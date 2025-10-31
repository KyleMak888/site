import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection, Button, Container, SectionHeading } from "@/components/ui";
import { getHomeContent } from "@/lib/cms/loader";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { HeroSection, StatsHighlight } from "@/components/sections";

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
      <HeroSection hero={hero} />

      {/* Stats Section */}
      <section className="bg-white py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading title="我们的成果" align="center" />
          </AnimatedSection>
          <StatsHighlight stats={stats} />
        </Container>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="合作客户"
              description="我们与多家国际品牌和行业领军企业保持长期合作"
              align="center"
            />
          </AnimatedSection>
          <AnimatedSection className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6" variants={fadeIn}>
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
                  loading="lazy"
                  quality={75}
                  className="h-12 w-auto object-contain opacity-60 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      {/* Featured Cases Section */}
      <section id="cases" className="bg-white py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="代表案例"
              description="深度整合内容、技术与数据，为客户创造可量化的业务增长"
              align="center"
            />
          </AnimatedSection>
          <AnimatedSection className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" variants={fadeInUp}>
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
                    loading="lazy"
                    quality={85}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
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
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center">
            <Button variant="outline" href="/work">
              查看全部案例
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="我们的服务"
              description="内容 × 技术 × 数据，三位一体的综合解决方案"
              align="center"
            />
          </AnimatedSection>
          <AnimatedSection className="grid gap-8 md:grid-cols-3" variants={fadeInUp}>
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
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-primary py-20 text-white">
        <Container className="text-center">
          <AnimatedSection>
            <h2 className="mb-4 text-4xl font-bold">准备好开始了吗？</h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="mb-8 text-xl opacity-90">
              让我们一起打造技术驱动的营销与产品解决方案
            </p>
          </AnimatedSection>
          <AnimatedSection className="flex flex-col items-center justify-center gap-4 sm:flex-row" variants={fadeIn}>
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
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
