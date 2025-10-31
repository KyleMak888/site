// CTA
export interface CTA {
  label: string;
  href: string;
}

// 服务类型
export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon?: string;
  slug: string;
  features?: string[];
  caseStudies?: string[];
}

// 案例类型
export interface CaseStudy {
  id: string;
  title: string;
  titleEn: string;
  client: string;
  industry: string;
  industryEn: string;
  slug: string;
  summary: string;
  summaryEn: string;
  challenge?: string;
  solution?: string;
  results?: CaseResult[];
  technologies?: string[];
  duration?: string;
  images?: string[];
  coverImage?: string;
  featured?: boolean;
  publishedAt?: string;
  tags?: string[];
}

// 案例成果
export interface CaseResult {
  metric: string;
  value: string;
  description?: string;
}

// 首页统计数据
export interface StatItem {
  id: string;
  metric: string;
  title: string;
  description?: string;
}

// 客户Logo信息
export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

// Hero内容
export interface HeroContent {
  headline: string;
  highlight: string;
  subheadline: string;
  description: string;
  badgeLabel?: string;
  badgeCaption?: string;
  backgroundImage: string;
  primaryCta: CTA;
  secondaryCta: CTA;
}

// 首页内容（原始）
export interface HomeCmsData {
  hero: HeroContent;
  stats: StatItem[];
  clients: ClientLogo[];
  featuredCaseSlugs?: string[];
  services: Service[];
}

// 首页内容（解析后）
export interface HomeContent {
  hero: HeroContent;
  stats: StatItem[];
  clients: ClientLogo[];
  featuredCases: CaseStudy[];
  services: Service[];
}

export interface Category {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  description?: string;
  descriptionEn?: string;
  categoryId?: string;
  category?: Category;
}

// 洞察/文章类型
export interface Insight {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
  authorId: string;
  author?: Author;
  publishedAt: string;
  updatedAt?: string;
  tagIds?: string[];
  tags?: Tag[];
  categoryId?: string;
  category?: Category;
  coverImage?: string;
  readTime?: number;
  featured?: boolean;
}

// 作者类型
export interface Author {
  id: string;
  name: string;
  nameEn: string;
  role?: string;
  avatar?: string;
  bio?: string;
  bioEn?: string;
}

// 联系表单类型
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget?: string;
  message?: string;
  phone?: string;
}

// 通用元数据类型
export interface PageMetadata {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  keywords?: string[];
  ogImage?: string;
}
