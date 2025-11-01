import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatedSection,
  Button,
  CaseStudyGrid,
  Container,
  IndustryBadgeList,
  SectionHeading,
  TestimonialGrid,
} from "@/components/ui";
import { getHomeContent } from "@/lib/cms/loader";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { HeroSection, StatsHighlight } from "@/components/sections";

export const metadata: Metadata = {
  title: "首页",
  description:
    "技术驱动的品牌营销与数字产品。内容×技术×数据，持续交付可量化增长。",
};

export default function Home() {
  const { hero, stats, clients, featuredCases, services, testimonials, industries } = getHomeContent();

  const caseStudyCards = featuredCases.map((caseStudy) => {
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
    <main id="main-content" tabIndex={-1}>
      {/* Hero Section */}
      <HeroSection hero={hero} />

      {/* Stats Section */}
      <section aria-labelledby="stats-heading" className="bg-white py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading title="我们的成果" align="center" headingId="stats-heading" />
          </AnimatedSection>
          <StatsHighlight stats={stats} />
        </Container>
      </section>

      {/* Clients Section */}
      <section aria-labelledby="clients-heading" className="bg-gray-50 py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="合作客户"
              description="我们与多家国际品牌和行业领军企业保持长期合作"
              align="center"
              headingId="clients-heading"
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

      {/* Industries Section */}
      {industries.length > 0 && (
        <section aria-labelledby="industries-heading" className="bg-white py-20">
          <Container>
            <AnimatedSection>
              <SectionHeading
                title="服务行业覆盖"
                description="多行业经验沉淀，快速复用增长打法"
                align="center"
                headingId="industries-heading"
              />
            </AnimatedSection>
            <AnimatedSection className="mt-10" variants={fadeIn}>
              <IndustryBadgeList
                industries={industries}
                variant="outline"
                size="lg"
                className="justify-center gap-3 sm:gap-4"
              />
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* Featured Cases Section */}
      <section id="cases" aria-labelledby="cases-heading" className="bg-white py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="代表案例"
              description="深度整合内容、技术与数据，为客户创造可量化的业务增长"
              align="center"
              headingId="cases-heading"
            />
          </AnimatedSection>
          <AnimatedSection className="mt-10" variants={fadeInUp}>
            <CaseStudyGrid cases={caseStudyCards} columns={3} />
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center">
            <Button variant="outline" href="/work">
              查看全部案例
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Section */}
      <section aria-labelledby="services-heading" className="bg-gray-50 py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title="我们的服务"
              description="内容 × 技术 × 数据，三位一体的综合解决方案"
              align="center"
              headingId="services-heading"
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

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section aria-labelledby="testimonials-heading" className="bg-gray-50 py-20">
          <Container>
            <AnimatedSection>
              <SectionHeading
                title="客户评价"
                description="听听合作伙伴怎么说"
                align="center"
                headingId="testimonials-heading"
              />
            </AnimatedSection>
            <AnimatedSection className="mt-10" variants={fadeInUp}>
              <TestimonialGrid testimonials={testimonials} columns={3} />
            </AnimatedSection>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact" aria-labelledby="cta-heading" className="bg-primary py-20 text-white">
        <Container className="text-center">
          <AnimatedSection>
            <h2 id="cta-heading" className="mb-4 text-4xl font-bold">准备好开始了吗？</h2>
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
