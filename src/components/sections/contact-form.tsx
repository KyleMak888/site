"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui";

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  phone: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    phone: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: data.message || "感谢您的咨询，我们会尽快与您联系！",
        });
        // 重置表单
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
          phone: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.errors?.join(", ") || "提交失败，请重试",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "网络错误，请稍后重试",
      });
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 姓名 */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            姓名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="请输入您的姓名"
          />
        </div>

        {/* 邮箱 */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            邮箱 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="your@email.com"
          />
        </div>

        {/* 公司 */}
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            公司 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="请输入公司名称"
          />
        </div>

        {/* 电话（可选） */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            电话
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="请输入联系电话（可选）"
          />
        </div>

        {/* 预算档位 */}
        <div>
          <label
            htmlFor="budget"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            项目预算
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">请选择预算范围</option>
            <option value="10k-50k">1-5 万</option>
            <option value="50k-100k">5-10 万</option>
            <option value="100k-300k">10-30 万</option>
            <option value="300k-500k">30-50 万</option>
            <option value="500k+">50 万以上</option>
          </select>
        </div>

        {/* 留言 */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            项目需求
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="请简要描述您的项目需求..."
          />
        </div>

        {/* 状态消息 */}
        {status.type !== "idle" && (
          <div
            className={`rounded-lg p-4 ${
              status.type === "success"
                ? "bg-green-50 text-green-800"
                : status.type === "error"
                ? "bg-red-50 text-red-800"
                : "bg-blue-50 text-blue-800"
            }`}
          >
            {status.message || (status.type === "loading" && "提交中...")}
          </div>
        )}

        {/* 提交按钮 */}
        <Button
          type="submit"
          size="lg"
          fullWidth
          loading={status.type === "loading"}
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "提交中..." : "提交咨询"}
        </Button>

        <p className="text-center text-sm text-gray-500">
          我们会在 24 小时内回复您的咨询
        </p>
      </form>
    </div>
  );
}
