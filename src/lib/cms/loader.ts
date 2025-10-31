import fs from "fs";
import path from "path";
import type {
  Author,
  CaseStudy,
  Category,
  HomeCmsData,
  HomeContent,
  Insight,
  Tag,
} from "@/types";

const DATA_DIR = path.join(process.cwd(), "data", "cms");

type InsightEntry = Omit<Insight, "author" | "tags" | "category">;

type TagEntry = Omit<Tag, "category">;

type Identifiable = { id: string };

function toMap<T extends Identifiable>(items: T[]): Map<string, T> {
  return new Map(items.map((item) => [item.id, item]));
}

/**
 * 从JSON文件加载数据
 */
export function loadData<T>(filename: string): T {
  const filePath = path.join(DATA_DIR, filename);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file not found: ${filename}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as T;
}

/**
 * 保存数据到JSON文件
 */
export function saveData<T>(filename: string, data: T): void {
  const filePath = path.join(DATA_DIR, filename);
  const dir = path.dirname(filePath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

/**
 * 获取所有作者
 */
export function getAllAuthors(): Author[] {
  try {
    return loadData<Author[]>("authors.json");
  } catch {
    return [];
  }
}

export function getAuthorById(id: string): Author | null {
  const authors = getAllAuthors();
  return authors.find((author) => author.id === id) ?? null;
}

/**
 * 获取所有分类
 */
export function getAllCategories(): Category[] {
  try {
    return loadData<Category[]>("categories.json");
  } catch {
    return [];
  }
}

export function getCategoryById(id: string): Category | null {
  const categories = getAllCategories();
  return categories.find((category) => category.id === id) ?? null;
}

/**
 * 获取所有标签
 */
export function getAllTags(): Tag[] {
  try {
    const categories = toMap(getAllCategories());
    const tags = loadData<TagEntry[]>("tags.json");

    return tags.map((tag) => ({
      ...tag,
      category: tag.categoryId ? categories.get(tag.categoryId) : undefined,
    }));
  } catch {
    return [];
  }
}

export function getTagById(id: string): Tag | null {
  const tags = getAllTags();
  return tags.find((tag) => tag.id === id) ?? null;
}

/**
 * 获取所有案例
 */
export function getAllCases(): CaseStudy[] {
  return loadData<CaseStudy[]>("cases.json");
}

/**
 * 获取单个案例
 */
export function getCaseBySlug(slug: string): CaseStudy | null {
  const cases = getAllCases();
  return cases.find((c) => c.slug === slug) ?? null;
}

/**
 * 获取精选案例
 */
export function getFeaturedCases(): CaseStudy[] {
  return getAllCases().filter((c) => c.featured);
}

/**
 * 获取首页原始数据
 */
export function getHomeData(): HomeCmsData {
  return loadData<HomeCmsData>("home.json");
}

/**
 * 获取首页内容（解析后的数据）
 */
export function getHomeContent(): HomeContent {
  const data = getHomeData();
  const allCases = getAllCases();

  const featuredCases = (data.featuredCaseSlugs || [])
    .map((slug) => allCases.find((item) => item.slug === slug))
    .filter((item): item is CaseStudy => Boolean(item));

  return {
    hero: data.hero,
    stats: data.stats,
    clients: data.clients,
    services: data.services,
    featuredCases,
    testimonials: data.testimonials || [],
    industries: data.industries || [],
  };
}

/**
 * 获取所有洞察文章
 */
export function getAllInsights(): Insight[] {
  let entries: InsightEntry[];
  try {
    entries = loadData<InsightEntry[]>("insights.json");
  } catch {
    return [];
  }

  const authors = toMap(getAllAuthors());
  const categories = toMap(getAllCategories());
  const tags = toMap(getAllTags());

  return entries.map((entry) => ({
    ...entry,
    author: authors.get(entry.authorId),
    category: entry.categoryId ? categories.get(entry.categoryId) : undefined,
    tags: entry.tagIds
      ?.map((tagId) => tags.get(tagId))
      .filter((tag): tag is Tag => Boolean(tag)),
  }));
}

/**
 * 获取单个洞察文章
 */
export function getInsightBySlug(slug: string): Insight | null {
  const insights = getAllInsights();
  return insights.find((i) => i.slug === slug) ?? null;
}

/**
 * 获取最新洞察文章
 */
export function getLatestInsights(limit = 3): Insight[] {
  return getAllInsights()
    .slice()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

/**
 * 获取精选洞察文章
 */
export function getFeaturedInsights(limit = 3): Insight[] {
  return getAllInsights().filter((insight) => insight.featured).slice(0, limit);
}

/**
 * 根据分类ID获取洞察文章
 */
export function getInsightsByCategory(categoryId: string): Insight[] {
  return getAllInsights().filter((i) => i.categoryId === categoryId);
}

/**
 * 根据标签ID获取洞察文章
 */
export function getInsightsByTag(tagId: string): Insight[] {
  return getAllInsights().filter((i) => i.tagIds?.includes(tagId));
}
