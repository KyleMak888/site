import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, SectionHeading, Button, Breadcrumb } from "@/components/ui";
import { getAllCases, getCaseBySlug } from "@/lib/cms/loader";
import type { CaseStudy } from "@/types";
import { JsonLd, generateBreadcrumbSchema, generateProjectSchema } from "@/lib/utils/json-ld";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const cases = getAllCases() as CaseStudy[];
  return cases.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug) as CaseStudy | null;

  if (!caseStudy) {
    return {
      title: "案例未找到",
    };
  }

  return {
    title: `${caseStudy.title} - 案例展示`,
    description: caseStudy.summary,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.summary,
      images: caseStudy.coverImage ? [caseStudy.coverImage] : [],
    },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseBySlug(slug) as CaseStudy | null;

  if (!caseStudy) {
    notFound();
  }

  // 获取相关案例（相同行业）
  const allCases = getAllCases() as CaseStudy[];
  const relatedCases = allCases
    .filter((c) => c.id !== caseStudy.id && c.industry === caseStudy.industry)
    .slice(0, 2);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  
  const breadcrumbItems = [
    { name: "首页", href: "/" },
    { name: "案例展示", href: "/work" },
    { name: caseStudy.title, href: `/work/${caseStudy.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbItems.map((item) => ({
      name: item.name,
      href: `${baseUrl}${item.href}`,
    })),
  );

  const projectSchema = generateProjectSchema({
    name: caseStudy.title,
    description: caseStudy.summary,
    url: `${baseUrl}/work/${caseStudy.slug}`,
    image: caseStudy.coverImage ? [`${baseUrl}${caseStudy.coverImage}`] : undefined,
    client: caseStudy.client,
    keywords: [caseStudy.industry, ...(caseStudy.technologies || [])],
    about: caseStudy.industry,
  });

  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={projectSchema} />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 py-20 text-white">
        <Container>
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-white/80" />
          <div className="mx-auto max-w-4xl text-center">
            {/* 标签 */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold">
                {caseStudy.industry}
              </span>
              <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
                {caseStudy.client}
              </span>
            </div>

            {/* 标题 */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mb-8 text-xl text-gray-300">{caseStudy.summary}</p>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div>
                <span className="font-semibold text-white">项目周期：</span>
                {caseStudy.duration}
              </div>
              {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                <div>
                  <span className="font-semibold text-white">技术栈：</span>
                  {caseStudy.technologies.slice(0, 3).join(", ")}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 封面图 */}
      {caseStudy.coverImage && (
        <section className="-mt-20">
          <Container>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={caseStudy.coverImage}
                alt={caseStudy.title}
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

      {/* 核心成果 */}
      {caseStudy.results && caseStudy.results.length > 0 && (
        <section className="py-20">
          <Container>
            <SectionHeading title="核心成果" align="center" className="mb-12" />
            <div className="grid gap-8 md:grid-cols-3">
              {caseStudy.results.map((result, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center"
                >
                  <div className="mb-3 text-5xl font-bold text-primary">
                    {result.value}
                  </div>
                  <div className="mb-2 text-lg font-semibold text-gray-900">
                    {result.metric}
                  </div>
                  {result.description && (
                    <div className="text-sm text-gray-600">{result.description}</div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 项目详情 */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* 挑战 */}
            {caseStudy.challenge && (
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">项目挑战</h2>
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {caseStudy.challenge}
                  </p>
                </div>
              </div>
            )}

            {/* 解决方案 */}
            {caseStudy.solution && (
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">解决方案</h2>
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 技术栈 */}
      {caseStudy.technologies && caseStudy.technologies.length > 0 && (
        <section className="py-20">
          <Container>
            <SectionHeading title="技术栈" align="center" className="mb-12" />
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-full border-2 border-primary/20 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 相关案例 */}
      {relatedCases.length > 0 && (
        <section className="bg-gray-50 py-20">
          <Container>
            <SectionHeading
              title="相关案例"
              description="查看更多同行业的成功案例"
              align="center"
              className="mb-12"
            />
            <div className="grid gap-8 md:grid-cols-2">
              {relatedCases.map((related) => (
                <Link
                  key={related.id}
                  href={`/work/${related.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={related.coverImage ?? "/images/case/app-booking.png"}
                      alt={related.title}
                      fill
                      loading="lazy"
                      quality={80}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{related.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-20 text-white">
        <Container className="text-center">
          <h2 className="mb-4 text-4xl font-bold">想要类似的成果？</h2>
          <p className="mb-8 text-xl opacity-90">
            让我们一起探讨您的项目需求，打造专属解决方案
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100"
            >
              预约咨询
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="/work"
              className="border-white text-white hover:bg-white/10"
            >
              查看更多案例
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
