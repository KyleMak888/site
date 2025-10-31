import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionHeading, Button } from "@/components/ui";
import { getHomeContent } from "@/lib/cms/loader";

export const metadata: Metadata = {
  title: "关于我们 | About Us",
  description: "技术驱动的品牌营销与数字产品。我们整合内容、技术与数据，为客户创造可量化的业务增长。",
};

export default function AboutPage() {
  const { clients } = getHomeContent();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              关于我们
            </h1>
            <p className="mb-4 text-xl text-gray-300">About Us</p>
            <p className="text-lg leading-relaxed text-gray-400">
              我们是一家专注于品牌营销与数字产品的技术公司。
              <br />
              通过整合内容、技术与数据，我们为客户创造可量化的业务增长。
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                我们的使命
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                我们相信，技术不仅仅是工具，更是推动业务增长的核心驱动力。
              </p>
              <p className="mb-4 text-gray-600">
                我们的使命是帮助企业在数字化时代实现业务增长。通过整合内容创意、技术研发与数据分析，
                我们为客户提供端到端的解决方案，让每一分投入都可追踪、可量化、可优化。
              </p>
              <p className="text-gray-600">
                我们不是传统的广告公司，也不只是开发团队。
                我们是您的数字化增长伙伴，致力于将创意、技术与数据完美融合，
                为您的业务创造真实、可持续的价值。
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/about-banner-bg.jpg"
                alt="关于我们"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Methodology Section */}
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
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600">
                <svg
                  className="h-10 w-10 text-white"
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
              <h3 className="mb-3 text-2xl font-bold text-gray-900">内容 Content</h3>
              <p className="mb-4 text-gray-600">
                从品牌定位到内容策略，我们帮助您讲好品牌故事，建立与用户的情感连接。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  品牌定位与叙事
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  内容策略与制作
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  创意资产设计
                </li>
              </ul>
            </div>

            {/* Tech */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600">
                <svg
                  className="h-10 w-10 text-white"
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
              <h3 className="mb-3 text-2xl font-bold text-gray-900">技术 Tech</h3>
              <p className="mb-4 text-gray-600">
                用技术赋能营销与产品，从网站、小程序到复杂的 SaaS 平台，我们都能实现。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  全栈开发能力
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  高性能架构设计
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  用户体验优化
                </li>
              </ul>
            </div>

            {/* Data */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600">
                <svg
                  className="h-10 w-10 text-white"
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
              <h3 className="mb-3 text-2xl font-bold text-gray-900">数据 Data</h3>
              <p className="mb-4 text-gray-600">
                数据驱动决策，让每一分投入都可追踪、可量化、可优化。
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  数据分析与洞察
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  MarTech 体系搭建
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  增长实验优化
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="我们的价值观"
            description="指导我们工作的核心原则"
            align="center"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "客户成功",
                desc: "客户的成功就是我们的成功",
                icon: "🎯",
              },
              {
                title: "持续创新",
                desc: "不断探索新技术和新方法",
                icon: "💡",
              },
              {
                title: "数据驱动",
                desc: "用数据说话，让结果可量化",
                icon: "📊",
              },
              {
                title: "追求卓越",
                desc: "在每个细节上追求完美",
                icon: "⭐",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border-2 border-gray-100 bg-white p-6 text-center transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-4 text-5xl">{value.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            title="合作客户"
            description="我们有幸与这些优秀的品牌合作"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain opacity-60 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <Container className="text-center">
          <h2 className="mb-4 text-4xl font-bold">想与我们合作？</h2>
          <p className="mb-8 text-xl opacity-90">
            让我们一起探讨如何帮助您的业务增长
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
