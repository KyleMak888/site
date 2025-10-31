"use client";

import { useEffect } from "react";
import { Container, Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center">
          <div className="mb-8">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-12 h-12 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="inline-block">
              <div className="h-1 w-40 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-full"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            出错了
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            抱歉，页面加载时遇到了一些问题。请尝试刷新页面或返回首页。
          </p>

          {error.digest && (
            <p className="text-sm text-gray-500 mb-6">
              错误代码: {error.digest}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={reset}
              size="lg"
            >
              重试
            </Button>
            <Button href="/" variant="outline" size="lg">
              返回首页
            </Button>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-xl max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3">需要帮助？</h3>
            <p className="text-sm text-gray-600 mb-4">
              如果问题持续出现，请联系我们的技术支持团队。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href="mailto:support@linkendtech.com"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                support@linkendtech.com
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a
                href="/contact"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
