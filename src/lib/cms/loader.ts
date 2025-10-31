import fs from "fs";
import path from "path";
import type { CaseStudy, HomeCmsData, HomeContent } from "@/types";

const DATA_DIR = path.join(process.cwd(), "data", "cms");

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
  };
}
