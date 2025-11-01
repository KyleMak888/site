import type { Locale } from "@/i18n/config";
import type {
  CaseStudy,
  HomeCmsData,
  HomeContent,
  Insight,
} from "@/types";
import {
  getAllCases,
  getAllInsights,
  getHomeData,
} from "./loader";

/**
 * 根据locale获取对应语言的字段值
 */
function getLocalizedField<T>(
  obj: any,
  field: string,
  locale: Locale
): T | undefined {
  if (locale === "zh-CN") {
    return obj[field];
  }
  
  const localizedField = locale === "zh-TW" 
    ? `${field}Tw` 
    : `${field}En`;
  
  return obj[localizedField] || obj[field];
}

/**
 * 本地化案例数据
 */
function localizeCaseStudy(caseStudy: CaseStudy, locale: Locale): CaseStudy {
  return {
    ...caseStudy,
    title: getLocalizedField(caseStudy, "title", locale) || caseStudy.title,
    industry: getLocalizedField(caseStudy, "industry", locale) || caseStudy.industry,
    summary: getLocalizedField(caseStudy, "summary", locale) || caseStudy.summary,
    challenge: getLocalizedField(caseStudy, "challenge", locale),
    solution: getLocalizedField(caseStudy, "solution", locale),
  };
}

/**
 * 本地化首页hero数据
 */
function localizeHero(hero: any, locale: Locale, t: any): any {
  if (locale === "zh-CN") {
    return hero;
  }

  return {
    headline: t("hero.headline"),
    highlight: t("hero.highlight"),
    subheadline: t("hero.subheadline"),
    description: t("hero.description"),
    badgeLabel: t("hero.badge.label"),
    badgeCaption: t("hero.badge.caption"),
    backgroundImage: hero.backgroundImage,
    primaryCta: {
      label: t("hero.primaryCta"),
      href: hero.primaryCta.href,
    },
    secondaryCta: {
      label: t("hero.secondaryCta"),
      href: hero.secondaryCta.href,
    },
  };
}

/**
 * 本地化统计数据
 */
function localizeStats(stats: any[], locale: Locale, t: any): any[] {
  return stats.map((stat) => {
    const key = stat.id || "";
    return {
      ...stat,
      title: t(`stats.items.${key}.title`),
      description: t(`stats.items.${key}.description`),
    };
  });
}

/**
 * 本地化服务数据
 */
function localizeServices(services: any[], locale: Locale): any[] {
  return services.map(service => ({
    ...service,
    title: getLocalizedField(service, "title", locale) || service.title,
    description: getLocalizedField(service, "description", locale) || service.description,
    features: getLocalizedField(service, "features", locale) || service.features,
  }));
}

/**
 * 本地化行业标签
 */
function localizeIndustries(industries: string[], locale: Locale): string[] {
  if (locale === "zh-CN") return industries;
  
  // Industry translations
  const industryMap: Record<string, { tw: string; en: string }> = {
    "零售与电商": { tw: "零售與電商", en: "Retail & E-commerce" },
    "奢侈品与时尚": { tw: "奢侈品與時尚", en: "Luxury & Fashion" },
    "生活方式与健身": { tw: "生活方式與健身", en: "Lifestyle & Fitness" },
    "餐饮与消费品": { tw: "餐飲與消費品", en: "F&B & Consumer Goods" },
    "汽车与出行": { tw: "汽車與出行", en: "Automotive & Mobility" },
    "文化与旅游": { tw: "文化與旅遊", en: "Culture & Tourism" },
    "金融与科技": { tw: "金融與科技", en: "Finance & Technology" },
  };
  
  return industries.map(industry => {
    const mapping = industryMap[industry];
    if (!mapping) return industry;
    return locale === "zh-TW" ? mapping.tw : mapping.en;
  });
}

/**
 * 获取本地化的首页内容
 */
export function getLocalizedHomeContent(locale: Locale, t: any): HomeContent {
  const data = getHomeData();
  const allCases = getAllCases();

  const featuredCases = (data.featuredCaseSlugs || [])
    .map((slug) => allCases.find((item) => item.slug === slug))
    .filter((item): item is CaseStudy => Boolean(item))
    .map((caseStudy) => localizeCaseStudy(caseStudy, locale));

  return {
    hero: localizeHero(data.hero, locale, t),
    stats: localizeStats(data.stats, locale, t),
    clients: data.clients,
    services: localizeServices(data.services, locale),
    featuredCases,
    testimonials: data.testimonials || [],
    industries: localizeIndustries(data.industries || [], locale),
  };
}

/**
 * 获取本地化的所有案例
 */
export function getLocalizedCases(locale: Locale): CaseStudy[] {
  const cases = getAllCases();
  return cases.map((caseStudy) => localizeCaseStudy(caseStudy, locale));
}

/**
 * 获取本地化的单个案例
 */
export function getLocalizedCaseBySlug(slug: string, locale: Locale): CaseStudy | null {
  const cases = getLocalizedCases(locale);
  return cases.find((c) => c.slug === slug) ?? null;
}

/**
 * 获取本地化的所有洞察
 */
export function getLocalizedInsights(locale: Locale): Insight[] {
  const insights = getAllInsights();
  return insights.map((insight) => ({
    ...insight,
    title: getLocalizedField(insight, "title", locale) || insight.title,
    summary: getLocalizedField(insight, "summary", locale) || insight.summary,
    content: getLocalizedField(insight, "content", locale) || insight.content,
  }));
}
