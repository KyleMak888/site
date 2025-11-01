# 国际化 (i18n) 实现说明

本项目已实现完整的国际化支持，支持以下三种语言：
- 🇨🇳 简体中文 (zh-CN) - 默认语言
- 🇹🇼 繁体中文 (zh-TW)
- 🇺🇸 英语 (en)

## 技术栈

- **next-intl v3**: Next.js 官方推荐的国际化库
- **路由策略**: 动态路由 `[locale]`，默认语言无前缀

## 目录结构

```
src/
├── i18n/
│   ├── config.ts                 # i18n 配置（语言列表、默认语言）
│   ├── navigation.ts             # 国际化导航组件和hooks
│   ├── request.ts                # next-intl 请求配置
│   └── locales/                  # 翻译文件
│       ├── zh-CN/
│       │   ├── common.json       # 通用翻译（导航、按钮、Footer等）
│       │   └── home.json         # 首页翻译
│       ├── zh-TW/
│       │   ├── common.json
│       │   └── home.json
│       └── en/
│           ├── common.json
│           └── home.json
├── lib/cms/
│   ├── loader.ts                 # CMS 原始数据加载器
│   └── i18n-loader.ts            # CMS 国际化包装器
├── app/
│   ├── layout.tsx                # 根布局（简单透传）
│   ├── [locale]/                 # 国际化页面
│   │   ├── layout.tsx            # 语言布局
│   │   ├── page.tsx              # 首页
│   │   ├── about/
│   │   ├── services/
│   │   ├── work/
│   │   ├── insights/
│   │   └── contact/
│   ├── admin/                    # 不需要国际化的管理后台
│   └── api/                      # API 路由
├── components/
│   └── layout/
│       ├── header.tsx            # 导航栏（含语言切换）
│       ├── footer.tsx            # 页脚
│       └── language-switcher.tsx # 语言切换器组件
└── middleware.ts                 # 国际化中间件
```

## 使用方法

### 1. 在服务端组件中使用翻译

```tsx
import { getTranslations } from "next-intl/server";

export default async function MyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "common" });
  
  return <h1>{t("nav.home")}</h1>;
}
```

### 2. 在客户端组件中使用翻译

```tsx
"use client";

import { useTranslations } from "next-intl";

export function MyComponent() {
  const t = useTranslations("common");
  
  return <button>{t("button.submit")}</button>;
}
```

### 3. 使用国际化导航

```tsx
import { Link } from "@/i18n/navigation";

// 会自动根据当前语言添加正确的路径前缀
<Link href="/about">关于我们</Link>
```

### 4. 语言切换

已在 Header 组件中集成语言切换器，用户可以随时切换语言。

### 5. CMS 数据国际化

```tsx
import { getLocalizedHomeContent } from "@/lib/cms/i18n-loader";

const content = getLocalizedHomeContent(locale, t);
// 自动根据语言返回对应字段（title/titleEn/titleTw）
```

## 翻译文件结构

### common.json (通用翻译)

包含：
- 导航菜单
- 按钮文本
- Footer 链接
- 元数据（标题、描述）
- 无障碍标签
- 错误消息

### home.json (首页翻译)

包含：
- Hero 区域
- 统计数据
- 客户区域
- 服务介绍
- 案例展示
- 客户评价
- CTA 区域

## CMS 数据国际化

CMS 数据文件（如 `cases.json`、`home.json`）中的字段遵循以下命名规范：
- 简体中文：`title`、`description`、`summary` 等
- 英文：`titleEn`、`descriptionEn`、`summaryEn` 等
- 繁体中文：`titleTw`、`descriptionTw`、`summaryTw` 等

`i18n-loader.ts` 中的 `getLocalizedField()` 函数会自动根据当前语言选择正确的字段。

## 路由示例

- 简体中文（默认）: `/`, `/about`, `/services`
- 繁体中文: `/zh-TW`, `/zh-TW/about`, `/zh-TW/services`
- 英语: `/en`, `/en/about`, `/en/services`

## 添加新语言

1. 在 `src/i18n/config.ts` 中添加新语言代码
2. 在 `src/i18n/locales/` 中创建对应文件夹和翻译文件
3. 在 CMS 数据文件中添加对应语言字段（如 `titleDe`）
4. 更新 `i18n-loader.ts` 中的 `getLocalizedField()` 逻辑（如需要）

## 添加新翻译命名空间

1. 在 `src/i18n/locales/[locale]/` 中创建新的 JSON 文件（如 `services.json`）
2. 在 `src/i18n/request.ts` 中导入新命名空间：
   ```ts
   messages: {
     common: (await import(`./locales/${locale}/common.json`)).default,
     home: (await import(`./locales/${locale}/home.json`)).default,
     services: (await import(`./locales/${locale}/services.json`)).default,
   }
   ```
3. 在组件中使用：`const t = useTranslations("services")`

## 最佳实践

1. **始终使用翻译键**：不要在代码中硬编码文本
2. **命名一致性**：使用描述性的键名（如 `button.submit`、`nav.home`）
3. **避免嵌套过深**：翻译文件的嵌套层级不要超过 3 层
4. **使用插值**：对于动态内容，使用 `{t("message", { name: "John" })}`
5. **SEO 优化**：确保每个页面的 metadata 都已国际化

## 注意事项

- Next.js 16 要求 `params` 作为 Promise 处理，需要 await
- next-intl v3 使用 `createNavigation()` 而不是旧的 `createSharedPathnamesNavigation()`
- `requestLocale` 是新的配置参数名（不是 `locale`）
- 始终在 `getRequestConfig()` 返回值中包含 `locale` 字段
- 管理后台和 API 路由保持在 `[locale]` 目录之外

## 测试

启动开发服务器后访问：
- http://localhost:3000/ （简体中文）
- http://localhost:3000/zh-TW （繁体中文）
- http://localhost:3000/en （英语）

切换语言后，所有导航、内容、SEO 信息都会相应更新。
