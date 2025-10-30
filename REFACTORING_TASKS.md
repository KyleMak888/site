# 网站重构任务分解 / Website Refactoring Task Breakdown

## 概述 / Overview
将当前 Vue 2 SPA 重构为 Next.js (App Router) SSR/SSG 架构，提升 SEO、转化率和用户体验。

---

## 阶段 1: 基础架构搭建 / Phase 1: Foundation Setup

### ✅ Task 1.1: 初始化 Next.js 项目
- [x] 创建 Next.js 16 项目（App Router）
- [x] 配置 TypeScript
- [x] 集成 Tailwind CSS
- [x] 配置 ESLint
- [x] 设置项目结构（app/, components/, lib/, types/, etc.）

### ✅ Task 1.2: 配置构建与开发环境
- [x] 配置 next.config.ts（图片优化）
- [x] 设置环境变量（.env.example）
- [x] 配置 TypeScript（tsconfig.json）
- [x] 更新 .gitignore

### ✅ Task 1.3: 设计系统迁移
- [x] 提取当前 Tailwind 配置（颜色、字体、断点）
- [x] 创建设计令牌（Design Tokens）
- [x] 定义排版系统
- [x] 设置间距和布局网格

### ✅ Task 1.4: 国际化 (i18n) 基础设置
- [ ] 配置 next-intl 或 i18n 路由
- [ ] 创建语言文件结构（/zh, /en）
- [ ] 设置语言切换逻辑
- [ ] 配置 hreflang 标签

---

## 阶段 2: 核心组件开发 / Phase 2: Core Components

### ✅ Task 2.1: 布局组件
- [x] Header/Navigation 组件（响应式）
- [x] Footer 组件（多列、社交链接）
- [x] 主布局（RootLayout、内嵌导航栏和页脚）
- [x] 移动端菜单

### ✅ Task 2.2: 基础 UI 组件
- [x] Button 组件（多种变体：primary, secondary, outline）
- [x] Card 组件
- [x] Section/Container 组件
- [x] Badge/Tag 组件
- [ ] Icon 系统（Heroicons 或自定义）

### ✅ Task 2.3: 数据展示组件
- [x] Stats/KPI 数字组件（基础版本完成，动画待补充）
- [x] 客户 Logo 墙组件
- [ ] Testimonial/Quote 组件
- [ ] 行业徽章组件
- [ ] Case Study 卡片组件

---

## 阶段 3: 页面开发（SSR/SSG）/ Phase 3: Page Development

### ✅ Task 3.1: 首页 (/)
- [x] Hero Section（价值主张 + 双 CTA）
- [x] 量化成果展示（3-5 个关键指标）
- [x] 客户 Logo 墙
- [x] 代表案例预览（3 个精选案例）
- [x] 服务概览 Section
- [x] 底部 CTA Section

### ✅ Task 3.2: 服务页面 (/services)
- [x] 服务总览页（/services）
- [x] 品牌与活动页（/services/brand-marketing）
- [x] 数字产品页（/services/digital-product）
- [x] 数据与营销技术页（/services/data-martech）
- [x] 统一页面模板（结构：痛点 → 方案 → 案例 → CTA）

### ✅ Task 3.3: 案例页面 (/work)
- [x] 案例列表页（/work）- 支持筛选（行业、目标、技术）*（基础列表完成，筛选待实现）*
- [x] 案例详情页模板（/work/[slug]）
  - 项目概述（客户、行业、目标）
  - 痛点分析
  - 解决方案（Content × Tech × Data）
  - 成效指标（可视化）
  - 技术栈与周期
  - 关键截图/视频
  - 相关案例推荐

### ✅ Task 3.4: 关于页面 (/about)
- [x] 公司定位与价值主张
- [x] 方法论展示（Content · Tech · Data）
- [ ] 团队介绍（可选）
- [x] 合作流程
- [x] 客户与合作伙伴

### ✅ Task 3.5: 洞察/博客页面 (/insights)
- [ ] 文章列表页（分类、标签筛选）
- [ ] 文章详情页（/insights/[slug]）
- [ ] 支持 MDX 或富文本
- [ ] 相关文章推荐
- [ ] 作者信息

### ✅ Task 3.6: 联系页面 (/contact)
- [x] 联系表单（姓名、邮箱、公司、预算档位）
- [x] 多通道联系方式（Messenger/WhatsApp/邮件）*（目前提供邮箱、电话、微信二维码）*
- [ ] 可选：嵌入 Calendly 预约组件
- [ ] 成功页/Thank You 页（提供 PDF 案例摘要下载）

### ✅ Task 3.7: 404 & 其他页面
- [ ] 自定义 404 页面
- [ ] Loading 状态
- [ ] Error 边界

---

## 阶段 4: 转化优化 / Phase 4: Conversion Optimization

### ✅ Task 4.1: CTA 系统
- [x] 双 CTA 组件（获取案例包 + 预约咨询）
- [x] 固定 CTA 按钮（首屏 + 页脚）*（浮动按钮待实现）*
- [ ] CTA 事件追踪

### ✅ Task 4.2: 表单与提交
- [ ] 表单验证（React Hook Form + Zod）
- [x] 最少字段设计
- [x] 表单提交 API 路由
- [x] 成功/失败状态处理
- [ ] PDF 案例摘要生成或链接

### ✅ Task 4.3: CRM 集成
- [x] HubSpot/Zoho/自研 CRM 集成 *（已实现自研 CRM，JSON 文件存储）*
- [x] 表单数据同步
- [x] UTM 参数捕获
- [ ] 会话 ID 追踪

---

## 阶段 5: SEO 与性能优化 / Phase 5: SEO & Performance

### ✅ Task 5.1: 技术 SEO
- [x] 元标签配置（每页独立 title, description）
- [x] Open Graph 标签 *（案例详情页已实现）*
- [ ] Twitter Card 标签
- [x] Sitemap 生成（sitemap.xml）
- [x] Robots.txt 配置
- [ ] Canonical URLs

### ✅ Task 5.2: 结构化数据 (JSON-LD)
- [ ] Organization Schema
- [ ] Breadcrumb Schema
- [ ] Article Schema（洞察文章）
- [ ] Project/CreativeWork Schema（案例）

### ✅ Task 5.3: 图片与媒体优化
- [x] 使用 Next/Image 组件
- [ ] 图片自适应尺寸（srcset）
- [ ] WebP/AVIF 格式
- [ ] 懒加载与优先加载
- [ ] 视频延迟加载

### ✅ Task 5.4: 性能优化
- [ ] 代码分割与动态导入
- [ ] 字体优化（next/font）
- [x] 首屏渲染优化（SSR/SSG）
- [ ] Core Web Vitals 监控
  - LCP ≤ 2.5s
  - FID/INP ≤ 200ms
  - CLS ≤ 0.1

---

## 阶段 6: CMS 集成 / Phase 6: CMS Integration

### ✅ Task 6.1: 选择与配置 CMS
- [x] 选择 headless CMS（Sanity/Contentful/Strapi）*（已实现基于 JSON 文件的简单 CMS）*
- [x] 配置 CMS 项目
- [x] API 密钥与环境变量

### ✅ Task 6.2: 内容模型设计
- [x] Service 模型（服务类型、描述、案例引用）
- [x] Case 模型（客户、行业、目标、方案、成效、技术栈、截图）
- [ ] Insight/Article 模型（标题、内容、作者、标签、发布日期）
- [ ] Author 模型
- [ ] Tag/Category 模型

### ✅ Task 6.3: CMS 集成
- [x] 创建 CMS 客户端（SDK/API）*（基于 JSON 文件的 loader）*
- [x] 数据获取函数（getServices, getCases, getInsights）*（已实现 services/cases，Insights 待补充）*
- [ ] ISR 配置（Incremental Static Regeneration）
- [x] 页面与 CMS 数据绑定

### ✅ Task 6.4: 内容迁移
- [x] 从 Vue 项目提取现有内容
- [x] 导入到 CMS
- [x] 验证数据完整性

---

## 阶段 7: 动效与交互 / Phase 7: Animations & Interactions

### ✅ Task 7.1: Framer Motion 集成
- [ ] 安装和配置 Framer Motion
- [ ] 创建通用动画变体

### ✅ Task 7.2: 页面动画
- [ ] 滚动显现动画（Scroll-triggered）
- [ ] 页面切换过渡
- [ ] Hero Section 动画
- [ ] 数字动画（Stats）

### ✅ Task 7.3: 微交互
- [ ] 按钮悬停效果
- [ ] 卡片悬停效果
- [ ] 导航栏滚动效果
- [ ] 加载指示器

---

## 阶段 8: 分析与监测 / Phase 8: Analytics & Monitoring

### ✅ Task 8.1: Google Analytics 4
- [ ] 安装 GA4
- [ ] 配置自定义事件
  - CTA 点击
  - 表单提交
  - 页面滚动深度
  - 会话开始
  - 下载触发
- [ ] 转化目标设置

### ✅ Task 8.2: Pixel & CAPI
- [ ] Facebook Pixel（如需广告投放）
- [ ] Conversions API 集成
- [ ] UTM 参数追踪
- [ ] Ad ID 追踪

### ✅ Task 8.3: Web Vitals 监控
- [ ] Real User Monitoring (RUM)
- [ ] Core Web Vitals 采样
- [ ] 报告端点（API 路由或第三方服务）

---

## 阶段 9: 无障碍与合规 / Phase 9: Accessibility & Compliance

### ✅ Task 9.1: 无障碍 (a11y)
- [ ] 语义化 HTML
- [ ] ARIA 标签
- [ ] 键盘导航支持
- [ ] 对比度检查（≥4.5:1）
- [ ] 图片 alt 文本
- [ ] 焦点管理

### ✅ Task 9.2: 合规性
- [ ] 隐私政策页面
- [ ] Cookie 通知（如需）
- [ ] ICP 备案信息（大陆访问）
- [ ] GDPR 合规（如针对欧洲用户）

---

## 阶段 10: 测试与上线 / Phase 10: Testing & Launch

### ✅ Task 10.1: 测试
- [ ] 单元测试（关键组件）
- [ ] 集成测试（表单提交、API 路由）
- [ ] E2E 测试（Playwright/Cypress - 关键用户路径）
- [ ] 跨浏览器测试
- [ ] 移动端测试
- [ ] 性能测试（Lighthouse）

### ✅ Task 10.2: SEO 审计
- [ ] 所有页面元标签完整
- [ ] 结构化数据验证（Google Rich Results Test）
- [ ] Sitemap 验证
- [ ] 内部链接检查
- [ ] 移动友好性测试

### ✅ Task 10.3: 内容审核
- [ ] 文案校对（中英文）
- [ ] 图片质量检查
- [ ] 链接有效性
- [ ] 案例数据准确性

### ✅ Task 10.4: 上线准备
- [ ] 配置生产环境变量
- [ ] 设置域名与 DNS
- [ ] SSL 证书
- [ ] CDN 配置
- [ ] 备份策略
- [ ] 监控告警设置

### ✅ Task 10.5: 软启动与 A/B 测试
- [ ] 内部预览
- [ ] 小流量测试
- [ ] A/B 测试方案（2 组变体）
- [ ] 收集反馈
- [ ] 迭代优化

### ✅ Task 10.6: 正式上线
- [ ] 切换 DNS/流量
- [ ] 301 重定向（旧 URL → 新 URL）
- [ ] 监控错误日志
- [ ] 性能监控
- [ ] 用户反馈收集

---

## 阶段 11: 文档与交付 / Phase 11: Documentation & Handover

### ✅ Task 11.1: 技术文档
- [ ] 项目架构说明
- [ ] 部署指南
- [ ] 环境变量配置
- [ ] CMS 使用指南
- [ ] API 文档

### ✅ Task 11.2: 设计文档
- [ ] 设计系统文档（Storybook 或 Figma）
- [ ] 组件库说明
- [ ] 品牌指南（颜色、字体、间距）
- [ ] 动效规范

### ✅ Task 11.3: 内容指南
- [ ] 内容模型说明
- [ ] SEO 最佳实践
- [ ] 更新内容流程
- [ ] 多语言内容管理

---

## 优先级标注 / Priority Markers

- **P0 (高优先级)**: 阶段 1-5（基础架构、核心页面、SEO）
- **P1 (中优先级)**: 阶段 6-8（CMS、动效、分析）
- **P2 (低优先级)**: 阶段 9-11（无障碍、测试、文档）

---

## 技术栈总结 / Tech Stack Summary

- **框架**: Next.js 14+ (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS (或 UnoCSS)
- **动画**: Framer Motion
- **表单**: React Hook Form + Zod
- **CMS**: Sanity/Contentful/Strapi (待选)
- **i18n**: next-intl
- **分析**: Google Analytics 4 + Web Vitals
- **SEO**: next-seo (或内置 Metadata API)
- **测试**: Jest + React Testing Library + Playwright/Cypress
- **部署**: Vercel/Netlify (推荐) 或自托管

---

## 估计时间线 / Estimated Timeline

- **阶段 1-2**: 1 周（基础架构 + 核心组件）
- **阶段 3**: 2 周（页面开发）
- **阶段 4-5**: 1 周（转化优化 + SEO）
- **阶段 6**: 1 周（CMS 集成）
- **阶段 7-8**: 0.5 周（动效 + 分析）
- **阶段 9-11**: 1 周（测试 + 上线）

**总计**: 约 6-7 周（全职开发）

---

## 下一步行动 / Next Steps

1. **评审任务清单**: 确认优先级和时间线
2. **开始阶段 1**: 搭建 Next.js 基础架构
3. **迭代开发**: 每完成一个阶段进行评审
4. **持续集成**: 每周部署到预览环境

---

最后更新: 2024-10
