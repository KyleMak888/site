import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { WebVitals } from "@/components/web-vitals";
import { JsonLd, generateOrganizationSchema } from "@/lib/utils/json-ld";
import { organizationConfig } from "@/lib/config/organization";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc",
  weight: ["300", "400", "500", "700"],
  preload: true,
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "广州领燕科技 | 技术驱动的品牌营销与数字产品",
    template: "%s | 广州领燕科技",
  },
  description:
    "内容×技术×数据，持续交付可量化增长。专注品牌营销、数字产品研发、营销技术咨询服务。",
  keywords: [
    "品牌营销",
    "数字产品",
    "营销技术",
    "小程序开发",
    "网站建设",
    "数据驱动增长",
    "MarTech",
    "广州",
  ],
  authors: [{ name: "Guangzhou Linkend Technology Co., Ltd." }],
  creator: "Guangzhou Linkend Technology Co., Ltd.",
  publisher: "Guangzhou Linkend Technology Co., Ltd.",
  metadataBase: new URL("https://yourdomain.com"), // 替换为实际域名
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/zh",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://yourdomain.com",
    siteName: "广州领燕科技",
    title: "广州领燕科技 | 技术驱动的品牌营销与数字产品",
    description:
      "内容×技术×数据，持续交付可量化增长。专注品牌营销、数字产品研发、营销技术咨询服务。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "广州领燕科技",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "广州领燕科技 | 技术驱动的品牌营销与数字产品",
    description:
      "内容×技术×数据，持续交付可量化增长。",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "c3a8487458981446", // 从现有文件中提取
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable}`}>
      <head>
        <JsonLd data={generateOrganizationSchema(organizationConfig)} />
      </head>
      <body className="font-sans antialiased">
        <WebVitals />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
