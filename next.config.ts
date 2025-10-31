import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // 图片优化配置
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 性能优化
  compress: true,
  
  // 生产环境优化
  poweredByHeader: false,
  
  // 实验性功能（可选）
  experimental: {
    optimizePackageImports: ["@/components/ui", "@/components/layout"],
  },
  
  // 环境变量
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  },
};

export default nextConfig;
