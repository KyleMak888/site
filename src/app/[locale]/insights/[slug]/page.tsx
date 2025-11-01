import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Badge, Button, Breadcrumb } from "@/components/ui";
import { getAllInsights, getInsightBySlug } from "@/lib/cms/loader";
import type { Insight } from "@/types";
import { JsonLd, generateBreadcrumbSchema, generateArticleSchema } from "@/lib/utils/json-ld";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const insights = getAllInsights();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "文章未找到",
    };
  }

  return {
    title: `${insight.title} | 洞察与观点`,
    description: insight.summary,
    openGraph: {
      title: insight.title,
      description: insight.summary,
      images: insight.coverImage ? [insight.coverImage] : [],
      type: "article",
      publishedTime: insight.publishedAt,
      modifiedTime: insight.updatedAt || insight.publishedAt,
      authors: insight.author ? [insight.author.name] : [],
    },
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";

  const breadcrumbItems = [
    { name: "首页", href: "/" },
    { name: "洞察与观点", href: "/insights" },
    { name: insight.title, href: `/insights/${insight.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbItems.map((item) => ({
      name: item.name,
      href: `${baseUrl}${item.href}`,
    })),
  );

  const articleSchema = generateArticleSchema({
    headline: insight.title,
    description: insight.summary,
    author: {
      name: insight.author?.name || "领燕科技",
      url: insight.author ? `${baseUrl}/about#team` : undefined,
    },
    datePublished: insight.publishedAt,
    dateModified: insight.updatedAt || insight.publishedAt,
    image: insight.coverImage ? `${baseUrl}${insight.coverImage}` : undefined,
    url: `${baseUrl}/insights/${insight.slug}`,
    publisher: {
      name: "广州领燕科技",
      logo: `${baseUrl}/logo.png`,
    },
  });

  // 获取相关文章（同类别或相同标签）
  const allInsights = getAllInsights();
  const relatedInsights = allInsights
    .filter((i) => {
      if (i.id === insight.id) return false;
      // 优先显示同类别的文章
      if (i.categoryId === insight.categoryId) return true;
      // 或者有相同标签的文章
      if (insight.tagIds && i.tagIds) {
        return insight.tagIds.some((tagId) => i.tagIds?.includes(tagId));
      }
      return false;
    })
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-20 text-white">
        <Container>
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-white/80" />
          <div className="mx-auto max-w-4xl">
            {/* Category & Read Time */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {insight.category && (
                <Badge variant="solid" size="md">
                  {insight.category.name}
                </Badge>
              )}
              {insight.readTime && (
                <span className="text-sm text-gray-300">
                  {insight.readTime} 分钟阅读
                </span>
              )}
              {insight.featured && (
                <Badge variant="solid" size="sm" className="bg-yellow-500">
                  精选
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {insight.title}
            </h1>

            {/* Summary */}
            <p className="mb-8 text-xl text-gray-300">{insight.summary}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 border-t border-white/20 pt-6 text-sm">
              {insight.author && (
                <div className="flex items-center gap-3">
                  {insight.author.avatar && (
                    <Image
                      src={insight.author.avatar}
                      alt={insight.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <div className="font-semibold">{insight.author.name}</div>
                    {insight.author.role && (
                      <div className="text-gray-400">{insight.author.role}</div>
                    )}
                  </div>
                </div>
              )}
              <div className="text-gray-400">
                发布于{" "}
                {new Date(insight.publishedAt).toLocaleDateString("zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              {insight.updatedAt && insight.updatedAt !== insight.publishedAt && (
                <div className="text-gray-400">
                  更新于{" "}
                  {new Date(insight.updatedAt).toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Cover Image */}
      {insight.coverImage && (
        <section className="-mt-20">
          <Container>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={insight.coverImage}
                alt={insight.title}
                fill
                priority
                quality={90}
                sizes="(min-width: 1280px) 80vw, 95vw"
                className="object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Article Content */}
      <article className="py-20">
        <Container size="md">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:text-gray-700 prose-ol:text-gray-700
              prose-code:text-primary-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-blockquote:border-l-primary-500 prose-blockquote:text-gray-700"
          >
            {insight.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="mt-12 mb-6">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="mt-8 mb-4">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              return (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          {insight.tags && insight.tags.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="mb-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                标签
              </h3>
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                  <Badge key={tag.id} variant="outline" size="md">
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {insight.author && insight.author.bio && (
            <div className="mt-12 rounded-2xl bg-gray-50 p-8">
              <h3 className="mb-4 text-lg font-bold text-gray-900">关于作者</h3>
              <div className="flex items-start gap-4">
                {insight.author.avatar && (
                  <Image
                    src={insight.author.avatar}
                    alt={insight.author.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900">
                    {insight.author.name}
                  </div>
                  {insight.author.role && (
                    <div className="mb-2 text-sm text-gray-600">
                      {insight.author.role}
                    </div>
                  )}
                  <p className="text-gray-700">{insight.author.bio}</p>
                </div>
              </div>
            </div>
          )}
        </Container>
      </article>

      {/* Related Articles */}
      {relatedInsights.length > 0 && (
        <section className="bg-gray-50 py-20">
          <Container>
            <h2 className="mb-8 text-3xl font-bold text-gray-900">相关文章</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedInsights.map((related) => (
                <Link
                  key={related.id}
                  href={`/insights/${related.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  {related.coverImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        loading="lazy"
                        quality={80}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      {related.category && (
                        <Badge variant="outline" size="sm">
                          {related.category.name}
                        </Badge>
                      )}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {related.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <Container className="text-center">
          <h2 className="mb-4 text-4xl font-bold">想要了解更多？</h2>
          <p className="mb-8 text-xl opacity-90">
            与我们讨论您的项目需求，获取专业咨询
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100"
            >
              联系我们
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="/insights"
              className="border-white text-white hover:bg-white/10"
            >
              返回列表
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
