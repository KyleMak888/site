import type { CaseStudy, Service } from "@/types";

export const hero = {
  titleZh: "技术驱动的品牌营销与数字产品",
  titleEn: "Tech-powered brand marketing & product development",
  valueProposition: "内容 × 技术 × 数据，持续交付可量化增长",
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

export const clients = [
  { id: "client-1", name: "Brand A" },
  { id: "client-2", name: "Brand B" },
  { id: "client-3", name: "Brand C" },
  { id: "client-4", name: "Brand D" },
  { id: "client-5", name: "Brand E" },
  { id: "client-6", name: "Brand F" },
] as const;

export const featuredCases: CaseStudy[] = [
  {
    id: "case-1",
    title: "国际品牌数字化转型",
    titleEn: "Digital Transformation for Global Retail",
    client: "全球零售品牌",
    industry: "零售行业",
    industryEn: "Retail",
    slug: "global-retail-digital-transformation",
    summary: "通过小程序 + 私域运营，实现线上销售额 3 个月增长 200%",
    summaryEn:
      "Implemented mini-programs and private domain operations to achieve 200% online sales growth in 3 months.",
    challenge: "多渠道下的用户触达与运营效率低",
    solution: "整合内容体系与营销技术，实现用户全生命周期运营",
    results: [
      { metric: "转化率", value: "+180%" },
      { metric: "线上销售额", value: "+200%" },
    ],
    technologies: ["Next.js", "WeChat Mini Program", "Segment"],
    duration: "2 个月",
    coverImage: "/images/cases/retail.jpg",
    featured: true,
  },
  {
    id: "case-2",
    title: "金融产品营销活动",
    titleEn: "Fintech Product Launch",
    client: "金融科技企业",
    industry: "金融科技",
    industryEn: "Fintech",
    slug: "fintech-product-launch",
    summary: "数据驱动的精准投放，CPL 降低 45%，ROI 提升 3 倍",
    summaryEn:
      "Data-driven performance marketing reduced CPL by 45% and improved ROI by 3x.",
    challenge: "获客成本高，转化链路断层",
    solution: "构建营销数据平台，实时监测关键指标并优化投放",
    results: [
      { metric: "CPL", value: "-45%" },
      { metric: "ROI", value: "×3" },
    ],
    technologies: ["HubSpot", "Looker", "Meta Ads"],
    duration: "1 个月",
    coverImage: "/images/cases/fintech.jpg",
    featured: true,
  },
  {
    id: "case-3",
    title: "在线教育平台搭建",
    titleEn: "EdTech Platform Build",
    client: "教育科技公司",
    industry: "教育行业",
    industryEn: "Education",
    slug: "edtech-platform-build",
    summary: "从 0 到 1 搭建 SaaS 平台，支撑 10 万+ 用户并发访问",
    summaryEn:
      "Built an EdTech SaaS platform from 0 to 1, supporting 100k+ concurrent users.",
    challenge: "平台稳定性与用户体验无法满足增长",
    solution: "重构架构，引入数据驱动的学习路径与增长体系",
    results: [
      { metric: "活跃用户", value: "+120%" },
      { metric: "留存率", value: "+35%" },
    ],
    technologies: ["Next.js", "Node.js", "AWS"],
    duration: "3 个月",
    coverImage: "/images/cases/edtech.jpg",
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
    features: [
      "MarTech 体系搭建",
      "数据仪表盘与分析",
      "营销自动化",
      "增长实验与优化",
    ],
  },
];
