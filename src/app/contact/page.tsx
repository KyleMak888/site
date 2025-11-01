import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Container, SectionHeading } from "@/components/ui";

const ContactForm = dynamic(
  () => import("@/components/sections/contact-form").then((mod) => mod.ContactForm),
  { loading: () => <div className="rounded-2xl bg-white p-8 shadow-md">加载表单中...</div> }
);

export const metadata: Metadata = {
  title: "联系我们",
  description: "与我们取得联系，开始您的数字化转型之旅。提供品牌营销、数字产品研发、数据与营销技术服务。",
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen">
      {/* Hero Section */}
      <section aria-labelledby="contact-hero-heading" className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
          <SectionHeading
            title="联系我们"
            titleEn="Get in Touch"
            description="让我们一起探讨您的项目需求，为您提供专业的解决方案"
            align="center"
            headingId="contact-hero-heading"
          />
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 左侧：表单 */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                填写咨询表单
              </h2>
              <ContactForm />
            </div>

            {/* 右侧：联系信息 */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  其他联系方式
                </h2>
                
                {/* 邮箱 */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">邮箱</h3>
                    <a
                      href="mailto:contact@linkend.tech"
                      className="text-gray-600 hover:text-primary"
                    >
                      contact@linkend.tech
                    </a>
                  </div>
                </div>

                {/* 电话 */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">电话</h3>
                    <a
                      href="tel:+8602012345678"
                      className="text-gray-600 hover:text-primary"
                    >
                      +86 020 1234 5678
                    </a>
                  </div>
                </div>

                {/* 地址 */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">地址</h3>
                    <p className="text-gray-600">
                      广东省广州市天河区
                      <br />
                      （具体地址待更新）
                    </p>
                  </div>
                </div>

                {/* 微信 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg
                      className="h-6 w-6 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8.5 3C4.4 3 1 6 1 9.7c0 2.4 1.5 4.6 3.8 6l-.9 2.8 3.2-1.6c.9.2 1.9.4 2.9.4.4 0 .8 0 1.2-.1-.3-.9-.4-1.8-.4-2.8C10.8 9.9 14.3 6.5 19 6.5c.3 0 .6 0 .9.1C18.7 4.3 13.9 3 8.5 3zm-1.9 4.9c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zm5.8 0c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4zM19 8c-3.5 0-6.4 2.5-6.4 5.5s2.9 5.5 6.4 5.5c.9 0 1.8-.2 2.6-.5l2.5 1.3-.7-2.2c1.8-1.1 3-3 3-5.1 0-3-2.9-5.5-6.4-5.5zm-2.5 3.6c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1zm5 0c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">微信</h3>
                    <p className="text-gray-600">扫码添加企业微信</p>
                  </div>
                </div>
              </div>

              {/* 工作时间 */}
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="mb-4 font-semibold text-gray-900">工作时间</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>周一至周五：9:00 - 18:00</p>
                  <p>周六：10:00 - 17:00</p>
                  <p className="text-gray-400">周日及法定节假日休息</p>
                </div>
              </div>

              {/* 响应时间 */}
              <div className="rounded-2xl bg-primary/5 p-6">
                <h3 className="mb-4 font-semibold text-gray-900">响应时间</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📧 邮件咨询：24小时内回复</p>
                  <p>📞 电话咨询：工作时间即时响应</p>
                  <p>💬 在线表单：12小时内回复</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
