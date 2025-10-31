"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // 在生产环境中，可以将指标发送到分析服务
    if (process.env.NODE_ENV === "production") {
      // 示例：发送到 Google Analytics
      // window.gtag?.("event", metric.name, {
      //   value: Math.round(
      //     metric.name === "CLS" ? metric.value * 1000 : metric.value
      //   ),
      //   event_category: "Web Vitals",
      //   event_label: metric.id,
      //   non_interaction: true,
      // });

      // 或者发送到自定义分析端点
      // fetch("/api/analytics", {
      //   method: "POST",
      //   body: JSON.stringify(metric),
      // });
    }

    // 开发环境下打印到控制台
    if (process.env.NODE_ENV === "development") {
      console.log(
        `[Web Vitals] ${metric.name}:`,
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
        metric.rating
      );
    }
  });

  return null;
}
