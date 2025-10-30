import fs from "fs";
import path from "path";

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
export function getAllCases() {
  return loadData("cases.json");
}

/**
 * 获取单个案例
 */
export function getCaseBySlug(slug: string) {
  const cases = getAllCases();
  return Array.isArray(cases) ? cases.find((c: any) => c.slug === slug) : null;
}

/**
 * 获取精选案例
 */
export function getFeaturedCases() {
  const cases = getAllCases();
  return Array.isArray(cases) ? cases.filter((c: any) => c.featured) : [];
}

/**
 * 获取首页数据
 */
export function getHomeData() {
  return loadData("home.json");
}
