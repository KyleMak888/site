# 无障碍访问指南 / Accessibility Guide

本项目遵循 WCAG 2.1 AA 级标准，确保网站对所有用户都具有良好的可访问性。

## 已实现的无障碍功能 / Implemented Accessibility Features

### 1. 语义化 HTML / Semantic HTML

- ✅ 使用语义化HTML标签（`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`）
- ✅ 正确的标题层级（H1-H6）
- ✅ 表单元素都有关联的 `<label>`

### 2. 键盘导航 / Keyboard Navigation

- ✅ 所有交互元素可通过键盘访问（Tab键导航）
- ✅ 焦点管理 - 页面切换时自动聚焦到主内容区域
- ✅ "跳转到主内容" 链接（Skip to Content）
- ✅ ESC 键关闭移动端菜单
- ✅ 可见的焦点指示器（focus-visible）

### 3. ARIA 标签与属性 / ARIA Labels and Attributes

- ✅ `aria-label` 用于图标按钮和链接
- ✅ `aria-labelledby` 关联区域与标题
- ✅ `aria-current="page"` 标识当前页面
- ✅ `aria-expanded` 用于折叠/展开状态
- ✅ `aria-controls` 关联控制器和受控元素
- ✅ `aria-haspopup` 标识弹出菜单
- ✅ `role="switch"` 用于开关控件（Cookie设置）
- ✅ `role="banner"` 用于页头
- ✅ `role="contentinfo"` 用于页脚
- ✅ `role="dialog"` 用于模态对话框（Cookie横幅）

### 4. 图片可访问性 / Image Accessibility

- ✅ 所有图片都有描述性的 `alt` 文本
- ✅ 装饰性图片使用空 `alt=""` 或作为CSS背景
- ✅ Next.js Image 组件自动优化

### 5. 颜色对比度 / Color Contrast

配色方案符合 WCAG AA 标准（对比度 ≥ 4.5:1）：

#### 文本颜色对比度

- ✅ 主文本（gray-900）在白色背景上：16.1:1
- ✅ 次要文本（gray-600）在白色背景上：7.0:1
- ✅ 主色调文本（primary）在白色背景上：4.8:1
- ✅ 白色文本在主色调背景上：4.8:1

#### 交互元素

- ✅ 按钮在所有状态下保持足够对比度
- ✅ 链接通过颜色和下划线区分
- ✅ 表单错误消息使用高对比度红色

### 6. 表单可访问性 / Form Accessibility

- ✅ 所有表单字段都有对应的 `<label>`
- ✅ 必填字段标注（视觉和语义）
- ✅ 验证错误消息清晰可见
- ✅ 表单提交状态反馈（加载、成功、错误）
- ✅ 占位符文本不作为唯一的标签

### 7. 响应式设计 / Responsive Design

- ✅ 移动端友好布局
- ✅ 触摸目标至少 44x44 像素
- ✅ 文本可以放大到 200% 而不丢失功能
- ✅ 横向和纵向模式都可用

### 8. 焦点管理 / Focus Management

- ✅ 可见的焦点指示器（蓝色外框）
- ✅ 页面导航后焦点移动到主内容
- ✅ 模态对话框打开时焦点trap
- ✅ 模态关闭后焦点返回触发元素

### 9. 屏幕阅读器支持 / Screen Reader Support

- ✅ 语义化结构便于导航
- ✅ ARIA 标签提供额外上下文
- ✅ 动态内容更新有适当的 ARIA 通知
- ✅ 隐藏的装饰性内容（`aria-hidden="true"`）

### 10. 合规性 / Compliance

- ✅ 隐私政策页面（`/privacy`）
- ✅ 服务条款页面（`/terms`）
- ✅ Cookie 同意横幅（GDPR合规）
- ✅ ICP 备案信息（中国大陆）

## 组件无障碍清单 / Component Accessibility Checklist

### Button 组件
- ✅ 支持键盘激活
- ✅ 焦点指示器
- ✅ 禁用状态视觉反馈
- ✅ 加载状态提示

### Header/Navigation
- ✅ `role="banner"`
- ✅ `aria-label` 用于导航
- ✅ `aria-current` 标识当前页面
- ✅ 移动端菜单可键盘操作
- ✅ ESC键关闭菜单

### Footer
- ✅ `role="contentinfo"`
- ✅ 清晰的链接标签
- ✅ 社交媒体链接有 `aria-label`

### CookieConsent
- ✅ `role="dialog"`
- ✅ `aria-describedby` 描述Cookie用途
- ✅ 开关控件 `role="switch"` 和 `aria-checked`
- ✅ 键盘导航支持
- ✅ 可关闭的横幅

## 测试指南 / Testing Guidelines

### 键盘导航测试
```
1. Tab键 - 前进到下一个可聚焦元素
2. Shift+Tab - 返回到上一个可聚焦元素
3. Enter/Space - 激活按钮和链接
4. ESC - 关闭模态和菜单
5. 箭头键 - 在某些组件中导航（如选项卡）
```

### 屏幕阅读器测试
推荐使用以下屏幕阅读器测试：
- **NVDA**（Windows，免费）
- **JAWS**（Windows，商业）
- **VoiceOver**（macOS/iOS，内置）
- **TalkBack**（Android，内置）

### 自动化测试工具
- **axe DevTools** - 浏览器扩展
- **Lighthouse** - Chrome DevTools
- **WAVE** - Web Accessibility Evaluation Tool
- **Pa11y** - 命令行工具

## 最佳实践 / Best Practices

### 开发新组件时：

1. **使用语义化HTML**
   ```tsx
   // ✅ 好
   <button onClick={handleClick}>提交</button>
   
   // ❌ 差
   <div onClick={handleClick}>提交</div>
   ```

2. **添加ARIA标签**
   ```tsx
   // ✅ 好
   <button aria-label="关闭菜单">
     <XIcon />
   </button>
   
   // ❌ 差
   <button>
     <XIcon />
   </button>
   ```

3. **确保键盘可访问**
   ```tsx
   // ✅ 好
   <button onClick={handleClick}>
     点击我
   </button>
   
   // ❌ 差
   <div onClick={handleClick}>
     点击我
   </div>
   ```

4. **提供焦点指示器**
   ```css
   /* ✅ 好 - 使用 focus-visible */
   .button:focus-visible {
     outline: 2px solid blue;
     outline-offset: 2px;
   }
   
   /* ❌ 差 - 移除outline */
   .button:focus {
     outline: none;
   }
   ```

5. **图片alt文本**
   ```tsx
   // ✅ 好 - 描述性alt
   <Image 
     src="/logo.png" 
     alt="广州领燕科技公司标志" 
   />
   
   // ❌ 差 - 无意义alt
   <Image 
     src="/logo.png" 
     alt="图片" 
   />
   ```

## 颜色对比度参考 / Color Contrast Reference

### 文本颜色
| 颜色 | Hex | 用途 | 对比度（白色背景） |
|------|-----|------|---------------------|
| Gray-900 | #111827 | 主要文本 | 16.1:1 ✅ |
| Gray-700 | #374151 | 次要文本 | 10.8:1 ✅ |
| Gray-600 | #4B5563 | 辅助文本 | 7.0:1 ✅ |
| Gray-500 | #6B7280 | 禁用文本 | 4.6:1 ✅ |
| Primary | #0066CC | 链接/强调 | 4.8:1 ✅ |

### 检查对比度工具
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)

## 已知问题与改进计划 / Known Issues & Improvements

### 待改进项目
- [ ] 添加高对比度模式
- [ ] 更多ARIA live regions用于动态内容
- [ ] 减少动画选项（prefers-reduced-motion）
- [ ] 更多可自定义的字体大小选项

### 报告问题
如果您发现任何可访问性问题，请通过以下方式报告：
- GitHub Issues
- 邮箱：accessibility@linkend.tech

## 参考资源 / References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [React Accessibility Documentation](https://react.dev/learn/accessibility)
- [Next.js Accessibility](https://nextjs.org/docs/accessibility)

---

最后更新：2024年11月
