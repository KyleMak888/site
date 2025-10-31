"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error occurred:", error);
  }, [error]);

  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6">
          <div className="text-center max-w-2xl">
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
              应用程序错误
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              抱歉，应用程序遇到了严重错误。请刷新页面或返回首页。
            </p>

            {error.digest && (
              <p className="text-sm text-gray-500 mb-6">
                错误代码: {error.digest}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={reset}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                重试
              </button>
              <a
                href="/"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary-500 hover:text-primary-600 transition-colors"
              >
                返回首页
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
