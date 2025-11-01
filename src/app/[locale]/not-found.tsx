import type { Metadata } from "next";
import Link from "next/link";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "404 - 页面未找到",
  description: "抱歉，您访问的页面不存在。",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
            <div className="inline-block">
              <div className="h-1 w-40 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            页面未找到
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            抱歉，您访问的页面不存在。可能是链接已过期或页面已被移除。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/" size="lg">
              返回首页
            </Button>
            <Button href="/work" variant="outline" size="lg">
              查看案例
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link
              href="/services"
              className="group p-6 rounded-xl border border-gray-200 hover:border-primary-500 transition-all hover:shadow-md"
            >
              <div className="text-primary-500 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                我们的服务
              </h3>
              <p className="text-sm text-gray-600">了解我们提供的解决方案</p>
            </Link>

            <Link
              href="/about"
              className="group p-6 rounded-xl border border-gray-200 hover:border-primary-500 transition-all hover:shadow-md"
            >
              <div className="text-primary-500 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                关于我们
              </h3>
              <p className="text-sm text-gray-600">了解我们的团队和理念</p>
            </Link>

            <Link
              href="/contact"
              className="group p-6 rounded-xl border border-gray-200 hover:border-primary-500 transition-all hover:shadow-md"
            >
              <div className="text-primary-500 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                联系我们
              </h3>
              <p className="text-sm text-gray-600">与我们取得联系</p>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
