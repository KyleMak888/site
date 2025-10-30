import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // 图片优化配置
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 性能优化
  compress: true,
  
  // 生产环境优化
  poweredByHeader: false,
  
  // 环境变量
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  },
};

export default nextConfig;
