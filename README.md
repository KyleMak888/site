# 广州领燕科技官方网站 / Guangzhou Linkend Tech Official Website

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

## 项目简介 / Project Overview

技术驱动的品牌营销与数字产品官方网站，采用 Next.js App Router、SSR/SSG 架构，提供卓越的 SEO 和用户体验。

Tech-powered brand marketing & digital product official website, built with Next.js App Router, SSR/SSG architecture for exceptional SEO and user experience.

## 技术栈 / Tech Stack

- **框架**: Next.js 15+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion (待集成)
- **表单**: React Hook Form + Zod (待集成)
- **国际化**: next-intl (待集成)
- **CMS**: 待选择 (Sanity/Contentful/Strapi)
- **SEO**: Next.js Metadata API + JSON-LD
- **分析**: Google Analytics 4 (待集成)

## 快速开始 / Getting Started

### 安装依赖 / Install Dependencies

```bash
npm install
```

### 开发服务器 / Development Server

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建 / Build

```bash
npm run build
npm run start
```

## 项目结构 / Project Structure

```
.
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── (marketing)/       # 营销页面组
│   │   │   ├── page.tsx       # 首页
│   │   │   ├── about/         # 关于页
│   │   │   ├── services/      # 服务页
│   │   │   ├── work/          # 案例页
│   │   │   ├── insights/      # 洞察/博客
│   │   │   └── contact/       # 联系页
│   │   ├── [locale]/          # 国际化路由 (待实现)
│   │   ├── layout.tsx         # 根布局
│   │   └── globals.css        # 全局样式
│   ├── components/            # React 组件
│   │   ├── layout/            # 布局组件 (Header, Footer, etc.)
│   │   ├── ui/                # 基础 UI 组件
│   │   ├── sections/          # 页面区块组件
│   │   └── shared/            # 共享组件
│   ├── lib/                   # 工具函数和库
│   │   ├── api/               # API 客户端
│   │   ├── utils/             # 通用工具
│   │   └── cms/               # CMS 集成 (待实现)
│   ├── types/                 # TypeScript 类型定义
│   ├── hooks/                 # 自定义 React Hooks
│   └── styles/                # 额外样式文件
├── public/                    # 静态资源
│   ├── images/               # 图片
│   ├── fonts/                # 字体
│   └── icons/                # 图标
├── legacy/                    # 原 Vue 2 项目（仅供参考）
├── REFACTORING_TASKS.md      # 重构任务清单
└── README.md                 # 本文件
```

## 开发指南 / Development Guide

### 添加新页面 / Adding New Pages

1. 在 `src/app` 下创建新文件夹
2. 添加 `page.tsx` 和 `layout.tsx`（可选）
3. 实现页面组件和元数据

### 创建组件 / Creating Components

```typescript
// src/components/ui/Button.tsx
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-lg transition-colors ${
        variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' :
        variant === 'secondary' ? 'bg-gray-600 text-white hover:bg-gray-700' :
        'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
```

### SEO 优化 / SEO Optimization

每个页面应导出 `metadata` 或使用 `generateMetadata` 函数：

```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '页面标题',
  description: '页面描述',
  openGraph: {
    title: 'OG 标题',
    description: 'OG 描述',
    images: ['/og-image.jpg'],
  },
}
```

## 重构进度 / Refactoring Progress

查看 [REFACTORING_TASKS.md](./REFACTORING_TASKS.md) 了解详细的重构任务和进度。

### 已完成 / Completed ✅

- [x] 初始化 Next.js 项目
- [x] 配置 TypeScript + Tailwind CSS
- [x] 项目结构设计
- [x] 任务清单制定

### 进行中 / In Progress 🚧

- [ ] 核心组件开发
- [ ] 页面迁移
- [ ] 国际化配置
- [ ] CMS 集成

### 待开始 / To Do 📋

- [ ] SEO 优化
- [ ] 性能优化
- [ ] 动画效果
- [ ] 分析集成
- [ ] 测试

## 环境变量 / Environment Variables

创建 `.env.local` 文件并添加以下变量：

```env
# CMS (待配置)
NEXT_PUBLIC_CMS_API_URL=
NEXT_PUBLIC_CMS_API_KEY=

# Analytics (待配置)
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Contact Form (待配置)
NEXT_PUBLIC_CONTACT_API_URL=

# 其他配置
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 部署 / Deployment

### Vercel (推荐)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### 自托管 / Self-Hosted

```bash
npm run build
npm run start
```

## 贡献 / Contributing

1. 创建功能分支: `git checkout -b feature/your-feature`
2. 提交更改: `git commit -m 'Add some feature'`
3. 推送分支: `git push origin feature/your-feature`
4. 提交 Pull Request

## 许可证 / License

Copyright © 2024 Guangzhou Linkend Technology Co., Ltd. All rights reserved.

---

## 联系我们 / Contact Us

- **官网**: [待添加]
- **邮箱**: [待添加]
- **地址**: 广州市

---

**注意**: 本项目正在从 Vue 2 SPA 重构为 Next.js SSR/SSG 架构。原 Vue 项目代码保留在 `/legacy` 目录中供参考。
