import type { CaseStudy, Service } from "@/types";
export { clients } from "./clients";

export const hero = {
  titleZh: "技术驱动的品牌营销与数字产品",
  titleEn: "Tech-powered brand marketing & product development",
  valueProposition: "内容 × 技术 × 数据，持续交付可量化增长",
  backgroundImage: "/images/home-banner-bg.jpg",
  primaryCta: {
    label: "获取案例包",
    href: "#cases",
  },
  secondaryCta: {
    label: "预约 15 分钟咨询",
    href: "#contact",
  },
};

export const stats = [
  {
    id: "conversion",
    metric: "+150%",
    title: "平均转化率提升",
    description: "通过数据驱动的营销策略和技术优化",
  },
  {
    id: "cpl",
    metric: "-40%",
    title: "获客成本降低",
    description: "精准投放与内容营销的完美结合",
  },
  {
    id: "cases",
    metric: "50+",
    title: "成功案例",
    description: "服务国内外知名品牌，覆盖多个行业",
  },
] as const;

export const featuredCases: CaseStudy[] = [
  {
    id: "case-sams-club",
    title: "山姆会员商店小程序",
    titleEn: "Sam's Club Mini Program",
    client: "山姆会员商店",
    industry: "零售行业",
    industryEn: "Retail",
    slug: "sams-club-mini-program",
    summary: "为山姆会员商店打造高性能小程序，提升会员购物体验",
    summaryEn:
      "Built a high-performance mini-program for Sam's Club to enhance member shopping experience.",
    challenge: "大流量高并发场景下的性能优化",
    solution: "技术架构优化与用户体验设计",
    results: [
      { metric: "页面加载速度", value: "-60%" },
      { metric: "会员满意度", value: "+45%" },
    ],
    technologies: ["WeChat Mini Program", "React", "Node.js"],
    duration: "3 个月",
    coverImage: "/images/case/app-sams-club.png",
    featured: true,
  },
  {
    id: "case-jewelry-ecom",
    title: "珠宝电商小程序",
    titleEn: "Jewelry E-commerce App",
    client: "奢侈品珠宝品牌",
    industry: "奢侈品",
    industryEn: "Luxury",
    slug: "jewelry-ecommerce-app",
    summary: "打造高端珠宝线上销售平台，融合3D展示与AR试戴功能",
    summaryEn:
      "Created a luxury jewelry e-commerce platform with 3D visualization and AR try-on features.",
    challenge: "如何在线上还原奢侈品的高端体验",
    solution: "3D建模 + AR技术 + 精致UI设计",
    results: [
      { metric: "线上转化率", value: "+180%" },
      { metric: "客单价", value: "+90%" },
    ],
    technologies: ["WeChat Mini Program", "Three.js", "AR Kit"],
    duration: "4 个月",
    coverImage: "/images/case/app-jewelry-ecom.png",
    featured: true,
  },
  {
    id: "case-booking-app",
    title: "预约服务应用",
    titleEn: "Booking Service App",
    client: "服务行业连锁品牌",
    industry: "服务行业",
    industryEn: "Service",
    slug: "booking-service-app",
    summary: "智能预约系统，优化用户预约流程，提升门店运营效率",
    summaryEn:
      "Intelligent booking system that optimizes appointment process and improves store operations.",
    challenge: "多门店预约管理与用户体验优化",
    solution: "智能排班算法 + 实时库存管理",
    results: [
      { metric: "预约效率", value: "+200%" },
      { metric: "门店利用率", value: "+35%" },
    ],
    technologies: ["React Native", "Node.js", "MongoDB"],
    duration: "2 个月",
    coverImage: "/images/case/app-booking.png",
    featured: true,
  },
];

export const services: Service[] = [
  {
    id: "brand-marketing",
    title: "品牌与活动营销",
    titleEn: "Brand & Campaign",
    description:
      "品牌策略、创意内容、活动策划与执行，打造有影响力的品牌体验。",
    descriptionEn:
      "Brand strategy, creative content, campaign planning and execution for impactful brand experiences.",
    slug: "brand-marketing",
    icon: "/images/marketing-gift-card.png",
    features: [
      "品牌定位与叙事",
      "整合营销活动",
      "内容策略与制作",
      "体验设计与创意资产",
    ],
  },
  {
    id: "digital-product",
    title: "数字产品研发",
    titleEn: "Digital Product",
    description: "网站、小程序、App、SaaS 平台等数字产品的设计与开发。",
    descriptionEn:
      "Design and development of websites, mini-programs, mobile apps, and SaaS platforms.",
    slug: "digital-product",
    icon: "/images/3d-screen.png",
    features: [
      "产品策略与原型设计",
      "全栈开发",
      "体验优化与可用性测试",
      "数据驱动迭代",
    ],
  },
  {
    id: "data-martech",
    title: "数据与营销技术",
    titleEn: "Data & MarTech",
    description:
      "MarTech 咨询、数据分析、增长策略，让每一分投入都可追踪。",
    descriptionEn:
      "MarTech consulting, data analytics, and growth strategy enabling measurable outcomes.",
    slug: "data-martech",
    icon: "/images/marketing-data-dashboard.png",
    features: [
      "MarTech 体系搭建",
      "数据仪表盘与分析",
      "营销自动化",
      "增长实验与优化",
    ],
  },
];
