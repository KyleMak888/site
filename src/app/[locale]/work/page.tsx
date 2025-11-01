import type { Metadata } from "next";
import { Container, SectionHeading, Button, CaseStudyGrid, Breadcrumb } from "@/components/ui";
import { getAllCases } from "@/lib/cms/loader";
import type { CaseStudy } from "@/types";
import { JsonLd, generateBreadcrumbSchema } from "@/lib/utils/json-ld";

export const metadata: Metadata = {
  title: "案例展示 | 成功案例",
  description: "查看我们的成功案例，了解如何通过内容×技术×数据为客户创造可量化的业务增长。",
};

export default function WorkPage() {
  const cases = getAllCases() as CaseStudy[];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yourdomain.com";
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "首页", href: `${baseUrl}/` },
    { name: "案例展示", href: `${baseUrl}/work` },
  ]);

  const caseStudyCards = cases.map((caseStudy) => {
    const tags =
      (caseStudy.tags && caseStudy.tags.length > 0
        ? caseStudy.tags.slice(0, 3)
        : caseStudy.technologies?.slice(0, 3)) || undefined;

    const metrics = caseStudy.results
      ? caseStudy.results.slice(0, 3).map((result) => ({
          label: result.metric,
          value: result.value,
        }))
      : undefined;

    return {
      slug: caseStudy.slug,
      title: caseStudy.title,
      client: caseStudy.client,
      industry: caseStudy.industry,
      thumbnail: caseStudy.coverImage ?? "/images/case/app-booking.png",
      description: caseStudy.summary,
      tags,
      metrics,
    };
  });

  return (
    <main className="min-h-screen">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
          <Breadcrumb items={[{ name: "首页", href: "/" }, { name: "案例展示", href: "/work" }]} className="mb-8" />
          <SectionHeading
            title="成功案例"
            titleEn="Our Work"
            description="深度整合内容、技术与数据，为客户创造可量化的业务增长"
            align="center"
          />
        </Container>
      </section>

      {/* Cases Grid */}
      <section className="pb-20">
        <Container>
          {/* 筛选器（简化版） */}
          <div className="mb-12 flex flex-wrap gap-3">
            <button className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white">
              全部
            </button>
            <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              零售行业
            </button>
            <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              奢侈品
            </button>
            <button className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              服务行业
            </button>
          </div>

          {/* 案例网格 */}
          <CaseStudyGrid cases={caseStudyCards} columns={3} />

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              想了解更多案例？
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              获取完整案例包，了解我们如何帮助客户实现业务增长
            </p>
            <Button size="lg" href="/contact">
              获取案例包
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
