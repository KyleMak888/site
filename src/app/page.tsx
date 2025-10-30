import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container, SectionHeading } from "@/components/ui";
import { hero, stats, clients, featuredCases, services } from "@/lib/data/home";

export const metadata: Metadata = {
  title: "首页",
  description:
    "技术驱动的品牌营销与数字产品。内容×技术×数据，持续交付可量化增长。",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <Container className="py-24 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            {hero.titleZh.split("与")[0]}
            <br />
            <span className="text-primary">与{hero.titleZh.split("与")[1]}</span>
          </h1>

          <p className="mb-4 text-xl text-gray-600 md:text-2xl">
            {hero.titleEn}
          </p>

          <p className="mb-12 text-lg text-gray-700">
            <span className="font-semibold">{hero.valueProposition}</span>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Button>
            <Button size="lg" variant="outline" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <svg
              className="mx-auto h-6 w-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading title="我们的成果" align="center" />
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 text-center shadow-lg transition-all hover:shadow-xl"
              >
                <div className="mb-4 text-6xl font-bold text-primary">
                  {stat.metric}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {stat.title}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
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
            description="我们与多家国际品牌和行业领军企业保持长期合作"
            align="center"
          />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md"
              >
                <div className="h-12 w-full rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Cases Section */}
      <section id="cases" className="bg-white py-20">
        <Container>
          <SectionHeading
            title="代表案例"
            description="深度整合内容、技术与数据，为客户创造可量化的业务增长"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCases.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/work/${caseStudy.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5"></div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-primary">
                    {caseStudy.industry}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
                    {caseStudy.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{caseStudy.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {caseStudy.duration}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      查看详情 →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" href="/work">
              查看全部案例
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            title="我们的服务"
            description="内容 × 技术 × 数据，三位一体的综合解决方案"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-primary hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                {service.features && (
                  <ul className="mb-4 space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="mr-2 mt-1 text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <span className="text-sm font-medium text-primary">
                  了解更多 →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-primary py-20 text-white">
        <Container className="text-center">
          <h2 className="mb-4 text-4xl font-bold">准备好开始了吗？</h2>
          <p className="mb-8 text-xl opacity-90">
            让我们一起打造技术驱动的营销与产品解决方案
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="outline"
              href="/contact"
              className="border-white bg-white text-primary hover:bg-gray-100"
            >
              获取案例包
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="/contact"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              预约 15 分钟咨询
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
