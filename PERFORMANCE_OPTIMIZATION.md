# 性能优化指南 / Performance Optimization Guide

本文档记录了项目中实施的各项性能优化措施。

## 1. 图片优化 (Task 5.3)

### ✅ 已实现

#### 1.1 Next.js Image 组件
- 所有图片使用 `next/image` 组件
- 自动优化图片格式（AVIF → WebP → 原格式）
- 响应式图片尺寸

#### 1.2 图片配置 (next.config.ts)
```typescript
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

#### 1.3 加载策略
- **priority**: 首屏关键图片（Hero背景）
- **lazy**: 非关键图片（客户logo、案例封面）
- **sizes**: 响应式尺寸提示

```tsx
// 首屏优先加载
<Image priority quality={85} sizes="100vw" />

// 懒加载
<Image loading="lazy" quality={75} />

// 响应式尺寸
<Image sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
```

### 📋 待实现

- [ ] 视频延迟加载
- [ ] 更精细的图片质量控制（按用途区分）
- [ ] 图片占位符（blur placeholder）

---

## 2. 字体优化 (Task 5.4)

### ✅ 已实现

#### 2.1 next/font 集成
- 使用 `next/font/google` 自动优化字体
- 字体预加载和交换策略

```typescript
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc",
  weight: ["300", "400", "500", "700"],
  preload: true,
  fallback: ["sans-serif"],
});
```

#### 2.2 字体变量
- CSS 变量方式引用
- Tailwind 配置集成

```typescript
// tailwind.config.ts
fontFamily: {
  sans: ['var(--font-inter)', 'var(--font-noto-sans-sc)', 'system-ui'],
  chinese: ['var(--font-noto-sans-sc)', 'system-ui'],
}
```

---

## 3. 代码分割与动态导入

### ✅ 已实现

#### 3.1 动态导入示例
```tsx
// ContactForm 动态加载
const ContactForm = dynamic(
  () => import("@/components/sections/contact-form").then((mod) => mod.ContactForm),
  { loading: () => <div>加载表单中...</div> }
);
```

#### 3.2 包优化配置
```typescript
experimental: {
  optimizePackageImports: ["@/components/ui", "@/components/layout"],
}
```

### 📋 推荐实施

- [ ] Admin 页面动态导入（非首屏）
- [ ] 复杂交互组件按需加载
- [ ] 第三方库动态导入（如图表库）

---

## 4. SSR/SSG 优化

### ✅ 已实现

- 所有页面采用 SSG（Static Site Generation）
- 动态路由使用 `generateStaticParams`
- 数据在构建时获取

```typescript
// 案例详情页
export async function generateStaticParams() {
  const cases = getAllCases();
  return cases.map((c) => ({ slug: c.slug }));
}
```

---

## 5. Web Vitals 监控

### ✅ 已实现

#### 5.1 监控组件
创建了 `WebVitals` 组件监控核心指标：
- **LCP** (Largest Contentful Paint): 最大内容绘制
- **FID** (First Input Delay): 首次输入延迟
- **CLS** (Cumulative Layout Shift): 累积布局偏移
- **TTFB** (Time to First Byte): 首字节时间
- **INP** (Interaction to Next Paint): 交互响应

```tsx
// 开发环境：控制台输出
// 生产环境：可发送到分析服务
```

### 📋 目标值

| 指标 | 目标 | 当前状态 |
|------|------|----------|
| LCP | ≤ 2.5s | 待测试 |
| FID/INP | ≤ 100ms | 待测试 |
| CLS | ≤ 0.1 | 待测试 |
| TTFB | ≤ 600ms | 待测试 |

---

## 6. 缓存策略

### ✅ 配置

```typescript
// next.config.ts
compress: true,
images: {
  minimumCacheTTL: 60,
}
```

### 📋 推荐

- [ ] 配置 CDN 缓存头
- [ ] 静态资源版本控制
- [ ] API 响应缓存

---

## 7. 性能检查清单

### 构建优化
- [x] 生产构建启用压缩
- [x] 移除不必要的依赖
- [x] Tree-shaking 配置
- [ ] Bundle 分析（webpack-bundle-analyzer）

### 运行时优化
- [x] 组件懒加载
- [x] 图片优化
- [x] 字体优化
- [ ] Service Worker（可选）
- [ ] 预加载关键资源

### 监控与测试
- [x] Web Vitals 监控
- [ ] Lighthouse CI 集成
- [ ] 性能预算设定
- [ ] 真实用户监控（RUM）

---

## 8. 测试命令

```bash
# 构建生产版本
npm run build

# 本地预览生产构建
npm run start

# 分析包大小（需安装 @next/bundle-analyzer）
ANALYZE=true npm run build
```

---

## 9. 推荐工具

- **Lighthouse**: 网站性能评分
- **WebPageTest**: 详细性能分析
- **Chrome DevTools**: Performance 面板
- **Next.js Analytics**: Vercel 提供的分析工具

---

## 10. 下一步优化建议

1. **实施 ISR** (Incremental Static Regeneration)
   - 为频繁更新的内容页面使用 ISR
   - 平衡静态生成与内容新鲜度

2. **边缘计算**
   - 使用 Edge Runtime 加速 API 响应
   - 地理位置就近服务

3. **资源提示**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="dns-prefetch" href="https://analytics.google.com" />
   ```

4. **懒加载第三方脚本**
   - Google Analytics
   - 社交媒体插件
   - 聊天工具

---

*最后更新: 2024*
