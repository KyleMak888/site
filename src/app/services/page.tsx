import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading, Button } from "@/components/ui";
import { getHomeData } from "@/lib/cms/loader";

export const metadata: Metadata = {
  title: "服务 | 我们的服务",
  description: "品牌与活动营销、数字产品研发、数据与营销技术。内容×技术×数据，三位一体的综合解决方案。",
};

export default function ServicesPage() {
  const homeData = getHomeData();
  const services = homeData.services as any[];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title="我们的服务"
              titleEn="Our Services"
              description="内容 × 技术 × 数据，三位一体的综合解决方案"
              align="center"
            />
            <p className="mt-6 text-lg text-gray-600">
              我们不是传统的广告公司，也不只是开发团队。
              <br />
              我们整合内容创意、技术研发与数据分析，为您提供端到端的解决方案。
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl border-2 border-gray-100 bg-white transition-all hover:border-primary hover:shadow-2xl">
                  {/* 图标 */}
                  {service.icon && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}

                  <div className="p-8">
                    {/* 编号 */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {index + 1}
                    </div>

                    {/* 标题 */}
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-gray-500">
                      {service.titleEn}
                    </p>

                    {/* 描述 */}
                    <p className="mb-6 text-gray-600">{service.description}</p>

                    {/* 特性列表 */}
                    {service.features && (
                      <ul className="mb-6 space-y-2">
                        {service.features.map((feature: string) => (
                          <li
                            key={feature}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <svg
                              className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <div className="flex items-center font-medium text-primary">
                      了解更多
                      <svg
                        className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 方法论 Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            title="我们的方法论"
            titleEn="Our Methodology"
            description="Content · Tech · Data 三位一体"
            align="center"
            className="mb-16"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {/* Content */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">内容</h3>
              <p className="text-gray-600">
                从品牌定位到内容策略，我们帮助您讲好品牌故事，建立与用户的情感连接。
              </p>
            </div>

            {/* Tech */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">技术</h3>
              <p className="text-gray-600">
                用技术赋能营销与产品，从网站、小程序到复杂的 SaaS 平台，我们都能实现。
              </p>
            </div>

            {/* Data */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                <svg
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">数据</h3>
              <p className="text-gray-600">
                数据驱动决策，让每一分投入都可追踪、可量化、可优化。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <Container className="text-center">
          <h2 className="mb-4 text-4xl font-bold">准备好开始了吗？</h2>
          <p className="mb-8 text-xl opacity-90">
            让我们一起探讨您的项目需求，为您提供专业的解决方案
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
              查看案例
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
