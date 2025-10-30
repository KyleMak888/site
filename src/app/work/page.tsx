import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading, Button } from "@/components/ui";
import { getAllCases } from "@/lib/cms/loader";
import type { CaseStudy } from "@/types";

export const metadata: Metadata = {
  title: "案例展示 | 成功案例",
  description: "查看我们的成功案例，了解如何通过内容×技术×数据为客户创造可量化的业务增长。",
};

export default function WorkPage() {
  const cases = getAllCases() as CaseStudy[];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/work/${caseStudy.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* 封面图 */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={caseStudy.coverImage ?? "/images/case/app-booking.png"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {caseStudy.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      精选案例
                    </div>
                  )}
                </div>

                {/* 内容 */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {caseStudy.industry}
                    </span>
                    {caseStudy.technologies && caseStudy.technologies[0] && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        {caseStudy.technologies[0]}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
                    {caseStudy.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">{caseStudy.client}</p>
                  <p className="mb-4 text-gray-600 line-clamp-2">{caseStudy.summary}</p>

                  {/* 成果预览 */}
                  {caseStudy.results && caseStudy.results.length > 0 && (
                    <div className="mb-4 flex gap-4">
                      {caseStudy.results.slice(0, 2).map((result, idx) => (
                        <div key={idx}>
                          <div className="text-lg font-bold text-primary">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{caseStudy.duration}</span>
                    <span className="font-medium text-primary transition-transform group-hover:translate-x-1">
                      查看详情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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
