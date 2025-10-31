import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading, Badge, Breadcrumb } from "@/components/ui";
import { getAllInsights, getAllCategories, getAllTags } from "@/lib/cms/loader";
import { JsonLd, generateBreadcrumbSchema } from "@/lib/utils/json-ld";

export const metadata: Metadata = {
  title: "洞察与观点 | 行业趋势与最佳实践",
  description: "分享数字营销、技术开发、行业趋势的深度洞察和实战经验。",
};

export default function InsightsPage() {
  const insights = getAllInsights();
  const categories = getAllCategories();
  const tags = getAllTags();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首页", href: `${baseUrl}/` },
    { name: "洞察与观点", href: `${baseUrl}/insights` },
  ]);

  const featuredInsights = insights.filter((i) => i.featured);
  const regularInsights = insights.filter((i) => !i.featured);

  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
          <Breadcrumb
            items={[
              { name: "首页", href: "/" },
              { name: "洞察与观点", href: "/insights" },
            ]}
            className="mb-8"
          />
          <SectionHeading
            title="洞察与观点"
            titleEn="Insights"
            description="分享数字营销、技术开发、行业趋势的深度洞察和实战经验"
            align="center"
          />
        </Container>
      </section>

      {/* Filters Section */}
      <section className="pb-12">
        <Container>
          {/* Categories Filter */}
          <div className="mb-6">
            <h3 className="mb-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
              分类
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600">
                全部
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
              标签
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 10).map((tag) => (
                <Badge key={tag.id} variant="outline" size="sm">
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Insights */}
      {featuredInsights.length > 0 && (
        <section className="pb-20">
          <Container>
            <h2 className="mb-8 text-2xl font-bold text-gray-900">精选文章</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredInsights.map((insight) => (
                <Link
                  key={insight.id}
                  href={`/insights/${insight.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  {insight.coverImage && (
                    <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={insight.coverImage}
                        alt={insight.title}
                        fill
                        loading="lazy"
                        quality={85}
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        精选
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {insight.category && (
                        <Badge variant="default" size="sm">
                          {insight.category.name}
                        </Badge>
                      )}
                      {insight.readTime && (
                        <span className="text-xs text-gray-500">
                          {insight.readTime} 分钟阅读
                        </span>
                      )}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="mb-4 text-gray-600 line-clamp-3">
                      {insight.summary}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      {insight.author && (
                        <span className="text-gray-500">{insight.author.name}</span>
                      )}
                      <span className="font-medium text-primary">阅读更多 →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* All Insights */}
      <section className="bg-gray-50 py-20">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-gray-900">最新文章</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularInsights.map((insight) => (
              <Link
                key={insight.id}
                href={`/insights/${insight.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {insight.coverImage && (
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={insight.coverImage}
                      alt={insight.title}
                      fill
                      loading="lazy"
                      quality={80}
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {insight.category && (
                      <Badge variant="outline" size="sm">
                        {insight.category.name}
                      </Badge>
                    )}
                    {insight.readTime && (
                      <span className="text-xs text-gray-500">
                        {insight.readTime} 分钟阅读
                      </span>
                    )}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {insight.summary}
                  </p>
                  {insight.tags && insight.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {insight.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag.id}
                          className="text-xs text-gray-500"
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    {insight.author && (
                      <span className="text-gray-500">{insight.author.name}</span>
                    )}
                    <time className="text-gray-400">
                      {new Date(insight.publishedAt).toLocaleDateString("zh-CN")}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
