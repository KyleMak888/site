import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/config";
import {
  AnimatedSection,
  Button,
  CaseStudyGrid,
  Container,
  IndustryBadgeList,
  SectionHeading,
  TestimonialGrid,
} from "@/components/ui";
import { getLocalizedHomeContent } from "@/lib/cms/i18n-loader";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { HeroSection, StatsHighlight } from "@/components/sections";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "home" });
  
  return {
    title: t("hero.headline"),
    description: t("hero.description"),
  };
}

export default async function Home({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: "home" });
  const tCommon = await getTranslations({ locale: params.locale, namespace: "common" });
  const locale = params.locale as Locale;
  
  const { hero, stats, clients, featuredCases, services, testimonials, industries } = getLocalizedHomeContent(locale, t);

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
            <SectionHeading title={t("stats.title")} align="center" headingId="stats-heading" />
          </AnimatedSection>
          <StatsHighlight stats={stats} />
        </Container>
      </section>

      {/* Clients Section */}
      <section aria-labelledby="clients-heading" className="bg-gray-50 py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title={t("clients.title")}
              description={t("clients.description")}
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
                title={t("industries.title")}
                description={t("industries.description")}
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
              title={t("cases.title")}
              description={t("cases.description")}
              align="center"
              headingId="cases-heading"
            />
          </AnimatedSection>
          <AnimatedSection className="mt-10" variants={fadeInUp}>
            <CaseStudyGrid cases={caseStudyCards} columns={3} />
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center">
            <Button variant="outline" href="/work">
              {tCommon("button.viewAllCases")}
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Section */}
      <section aria-labelledby="services-heading" className="bg-gray-50 py-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              title={t("services.title")}
              description={t("services.description")}
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
                  {t("services.learnMore")}
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
                title={t("testimonials.title")}
                description={t("testimonials.description")}
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
            <h2 id="cta-heading" className="mb-4 text-4xl font-bold">{t("cta.title")}</h2>
          </AnimatedSection>
          <AnimatedSection>
            <p className="mb-8 text-xl opacity-90">
              {t("cta.description")}
            </p>
          </AnimatedSection>
          <AnimatedSection className="flex flex-col items-center justify-center gap-4 sm:flex-row" variants={fadeIn}>
            <Button
              size="lg"
              variant="outline"
              href="/contact"
              className="border-white bg-white text-primary hover:bg-gray-100"
            >
              {tCommon("button.getCaseStudies")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              href="/contact"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              {tCommon("button.book15minConsultation")}
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
