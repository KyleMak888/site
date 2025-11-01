import type { OrganizationSchema } from "@/lib/utils/json-ld";

export const organizationConfig: OrganizationSchema = {
  name: "广州领燕科技有限公司",
  description:
    "技术驱动的品牌营销与数字产品开发公司。内容×技术×数据，持续交付可量化增长。",
  url: "https://yourdomain.com",
  logo: "https://yourdomain.com/images/logo/logo_final.png",
  sameAs: [
    // 添加公司的社交媒体链接
    // "https://www.linkedin.com/company/yourcompany",
    // "https://twitter.com/yourcompany",
    // "https://www.facebook.com/yourcompany",
  ],
  contactPoint: {
    telephone: "+86-123-4567-8900",
    contactType: "customer service",
    email: "contact@linkendtech.com",
    areaServed: "CN",
    availableLanguage: ["zh-CN", "en-US"],
  },
  address: {
    streetAddress: "天河区某某路某某号",
    addressLocality: "广州市",
    addressRegion: "广东省",
    postalCode: "510000",
    addressCountry: "CN",
  },
};
