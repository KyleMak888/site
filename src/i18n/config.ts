export type Locale = "zh-CN" | "zh-TW" | "en";

export const locales: Locale[] = ["zh-CN", "zh-TW", "en"];

export const defaultLocale: Locale = "zh-CN";

export const localeNames: Record<Locale, string> = {
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  en: "English",
};
