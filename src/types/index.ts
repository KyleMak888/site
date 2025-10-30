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
}

// 案例成果
export interface CaseResult {
  metric: string;
  value: string;
  description?: string;
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
  author?: Author;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
  category?: string;
  coverImage?: string;
  readTime?: number;
}

// 作者类型
export interface Author {
  id: string;
  name: string;
  nameEn: string;
  role?: string;
  avatar?: string;
  bio?: string;
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
