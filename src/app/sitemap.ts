import { MetadataRoute } from "next";
import { getAllCases, getAllInsights } from "@/lib/cms/loader";
import type { CaseStudy } from "@/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://linkend.tech";
  
  // 静态页面
  const staticPages = [
    "",
    "/services",
    "/services/brand-marketing",
    "/services/digital-product",
    "/services/data-martech",
    "/work",
    "/about",
    "/insights",
    "/contact",
    "/admin",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 案例页面
  const cases = getAllCases() as CaseStudy[];
  const casePages = cases.map((caseStudy) => ({
    url: `${baseUrl}/work/${caseStudy.slug}`,
    lastModified: new Date(caseStudy.publishedAt || new Date()),
    changeFrequency: "monthly" as const,
    priority: caseStudy.featured ? 0.9 : 0.7,
  }));

  // 洞察文章页面
  const insights = getAllInsights();
  const insightPages = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.updatedAt || insight.publishedAt),
    changeFrequency: "monthly" as const,
    priority: insight.featured ? 0.9 : 0.7,
  }));

  return [...staticPages, ...casePages, ...insightPages];
}
