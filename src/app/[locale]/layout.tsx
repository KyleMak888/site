import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header, Footer } from "@/components/layout";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { FocusManager } from "@/components/layout/focus-manager";
import { WebVitals } from "@/components/web-vitals";
import { CookieConsent } from "@/components/ui";
import { JsonLd, generateOrganizationSchema } from "@/lib/utils/json-ld";
import { organizationConfig } from "@/lib/config/organization";
import { locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

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

type LayoutParams = { locale: string };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<LayoutParams> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await getMessages({ locale })) as any;
  const meta = messages.common?.meta || {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

  return {
    title: {
      default: meta.defaultTitle || "广州领燕科技 | 技术驱动的品牌营销与数字产品",
      template: meta.titleTemplate || "%s | 广州领燕科技",
    },
    description: meta.description || "内容×技术×数据，持续交付可量化增长。专注品牌营销、数字产品研发、营销技术咨询服务。",
    keywords: meta.keywords?.split(", ") || [
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
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
      languages: {
        "zh-CN": "/",
        "zh-TW": "/zh-TW",
        "en": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "zh-TW" ? "zh_TW" : locale === "en" ? "en_US" : "zh_CN",
      url: baseUrl,
      siteName: locale === "en" ? "Linkend Tech" : "广州领燕科技",
      title: meta.defaultTitle || "广州领燕科技 | 技术驱动的品牌营销与数字产品",
      description: meta.description || "内容×技术×数据，持续交付可量化增长。",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: locale === "en" ? "Linkend Tech" : "广州领燕科技",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.defaultTitle || "广州领燕科技 | 技术驱动的品牌营销与数字产品",
      description: meta.description || "内容×技术×数据，持续交付可量化增长。",
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
      google: "c3a8487458981446",
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<LayoutParams> }) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  const htmlLang = locale === "zh-TW" ? "zh-Hant" : locale === "en" ? "en" : "zh-Hans";

  return (
    <html lang={htmlLang} className={`${inter.variable} ${notoSansSC.variable}`}>
      <head>
        <JsonLd data={generateOrganizationSchema(organizationConfig)} />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <SkipToContent />
          <WebVitals />
          <FocusManager />
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
