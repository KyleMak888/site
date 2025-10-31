"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui";

interface Submission {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  phone: string;
  source: string;
}

export default function AdminPage() {
  const [apiKey, setApiKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        setSubmissions(data.data || []);
        localStorage.setItem("admin_api_key", apiKey);
      } else {
        setError("API密钥无效");
      }
    } catch (err) {
      setError("连接失败，请重试");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setApiKey("");
    setSubmissions([]);
    localStorage.removeItem("admin_api_key");
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 尝试从localStorage恢复
  useEffect(() => {
    const savedKey = localStorage.getItem("admin_api_key");
    if (savedKey) {
      setApiKey(savedKey);
      // 自动尝试登录
      fetch("/api/contact", {
        headers: { Authorization: `Bearer ${savedKey}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsAuthenticated(true);
            setSubmissions(data.data || []);
          }
        })
        .catch(() => {});
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <Container size="sm">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
              CRM 管理后台
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="apiKey"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  API 密钥
                </label>
                <input
                  type="password"
                  id="apiKey"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="请输入API密钥"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  默认密钥: admin-secret-key (请在生产环境修改)
                </p>
              </div>

              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-white hover:bg-primary-600 disabled:opacity-50"
              >
                {loading ? "验证中..." : "登录"}
              </button>
            </form>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <Container size="full">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">CRM 管理后台</h1>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            退出登录
          </button>
        </div>

        <div className="mb-6 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            咨询提交记录
          </h2>
          <p className="text-sm text-gray-600">
            共 {submissions.length} 条记录
          </p>
        </div>

        <div className="space-y-4">
          {submissions.length === 0 ? (
            <div className="rounded-2xl bg-white p-12 text-center shadow">
              <p className="text-gray-500">暂无提交记录</p>
            </div>
          ) : (
            submissions.map((submission) => (
              <div
                key={submission.id}
                className="rounded-2xl bg-white p-6 shadow transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {submission.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {submission.company}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {submission.budget || "未填写预算"}
                  </span>
                </div>

                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-700">邮箱</p>
                    <a
                      href={`mailto:${submission.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {submission.email}
                    </a>
                  </div>
                  {submission.phone && (
                    <div>
                      <p className="text-sm font-medium text-gray-700">电话</p>
                      <a
                        href={`tel:${submission.phone}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {submission.phone}
                      </a>
                    </div>
                  )}
                </div>

                {submission.message && (
                  <div className="mb-4">
                    <p className="mb-1 text-sm font-medium text-gray-700">
                      项目需求
                    </p>
                    <p className="rounded-lg bg-gray-50 p-3 text-sm text-gray-900">
                      {submission.message}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
                  <span>提交时间: {formatDate(submission.timestamp)}</span>
                  <span>来源: {submission.source}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </main>
  );
}
