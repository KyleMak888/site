import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, SectionHeading } from "@/components/ui";
import { getHomeContent } from "@/lib/cms/loader";

export const metadata: Metadata = {
  title: "首页",
  description:
    "技术驱动的品牌营销与数字产品。内容×技术×数据，持续交付可量化增长。",
};

export default function Home() {
  const { hero, stats, clients, featuredCases, services } = getHomeContent();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={hero.backgroundImage}
            alt="广州联恩科技 - 品牌与数字产品背景"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px]" />
        </div>
        <Container className="py-28 text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2 text-sm font-medium text-primary shadow-lg shadow-primary/10 ring-1 ring-primary/20">
            {hero.badgeLabel}
            <span className="h-1 w-1 rounded-full bg-primary"></span>
            {hero.badgeCaption}
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            {hero.headline}
            <br />
            <span className="text-primary">{hero.highlight}</span>
          </h1>

          <p className="mb-6 text-lg text-gray-600 md:text-xl">
            {hero.subheadline}
          </p>

          <p className="mb-12 text-lg text-gray-700 md:text-xl">
            <span className="font-semibold">{hero.description}</span>
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
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={caseStudy.coverImage ?? "/images/case/app-booking.png"}
                    alt={caseStudy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {caseStudy.industry}
                    <span className="h-1 w-1 rounded-full bg-primary"></span>
                    {caseStudy.technologies?.[0]}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
                    {caseStudy.title}
                  </h3>
                  <p className="mb-4 text-gray-600 line-clamp-3">{caseStudy.summary}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{caseStudy.duration}</span>
                    <span className="font-medium text-primary">查看详情 →</span>
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
