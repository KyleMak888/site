import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, SectionHeading, Button } from "@/components/ui";
import { getHomeData, getAllCases } from "@/lib/cms/loader";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const data = getHomeData();
  return data.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const data = getHomeData();
  const service = data.services.find((s) => s.slug === slug);

  if (!service) {
    return { title: "服务未找到" };
  }

  return {
    title: `${service.title} | 服务`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const { slug } = params;
  const data = getHomeData();
  const service = data.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // 获取相关案例
  const allCases = getAllCases();
  const relatedCases = allCases.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mb-4 text-xl text-gray-300">{service.titleEn}</p>
            <p className="text-lg text-gray-400">{service.description}</p>
          </div>
        </Container>
      </section>

      {/* Icon Section */}
      {service.icon && (
        <section className="-mt-16">
          <Container>
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </Container>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <SectionHeading
            title="核心服务内容"
            description="我们提供的专业服务"
            align="center"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {service.features?.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl border-2 border-gray-100 bg-white p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <SectionHeading
            title="服务流程"
            description="标准化的服务流程，确保项目成功交付"
            align="center"
            className="mb-12"
          />
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "需求分析", desc: "深入了解您的业务需求和目标" },
              { step: "2", title: "方案设计", desc: "制定定制化的解决方案" },
              { step: "3", title: "执行实施", desc: "高效执行，确保质量" },
              { step: "4", title: "效果优化", desc: "持续优化，提升效果" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-20">
          <Container>
            <SectionHeading
              title="相关案例"
              description="查看我们在该领域的成功案例"
              align="center"
              className="mb-12"
            />
            <div className="grid gap-8 md:grid-cols-3">
              {relatedCases.map((caseStudy) => (
                <Link
                  key={caseStudy.id}
                  href={`/work/${caseStudy.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={caseStudy.coverImage ?? "/images/case/app-booking.png"}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {caseStudy.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <Container className="text-center">
          <h2 className="mb-4 text-4xl font-bold">准备开始您的项目？</h2>
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
