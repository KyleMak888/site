# CRM & CMS 功能说明 / CRM & CMS Feature Guide

## 📅 创建日期: 2024-10-30

---

## 📋 概述 / Overview

本项目实现了基本的CRM（客户关系管理）和CMS（内容管理系统）功能，用于：
- 📝 收集和管理客户咨询信息
- 📊 管理网站内容（案例、服务、首页数据）
- 🔒 简单的管理后台认证

---

## 🗂️ 文件结构

```
project/
├── data/                          # 数据存储目录
│   ├── cms/                       # CMS内容数据
│   │   ├── cases.json            # 案例数据
│   │   └── home.json             # 首页数据
│   └── submissions/               # 表单提交数据
│       ├── contacts.json         # 所有联系表单提交
│       └── contact_*.json        # 单个提交详情
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/
│   │   │   │   └── route.ts      # 联系表单API
│   │   │   └── cms/
│   │   │       └── cases/
│   │   │           └── route.ts  # 案例数据API
│   │   ├── contact/
│   │   │   └── page.tsx          # 联系页面
│   │   └── admin/
│   │       └── page.tsx          # CRM管理后台
│   │
│   ├── components/
│   │   └── sections/
│   │       └── contact-form.tsx  # 联系表单组件
│   │
│   └── lib/
│       └── cms/
│           └── loader.ts         # CMS数据加载工具
│
└── CRM_CMS_GUIDE.md              # 本文件
```

---

## 🚀 功能详解

### 1. CRM - 客户关系管理

#### 1.1 联系表单提交

**前端表单**: `/contact`

用户可以填写以下信息：
- ✅ 姓名（必填）
- ✅ 邮箱（必填）
- ✅ 公司（必填）
- 📱 电话（可选）
- 💰 预算范围（可选）
- 💬 项目需求（可选）

**API端点**: `POST /api/contact`

```typescript
// 请求示例
{
  "name": "张三",
  "email": "zhang@example.com",
  "company": "某某公司",
  "phone": "13800138000",
  "budget": "100k-300k",
  "message": "我们需要开发一个小程序..."
}

// 响应示例
{
  "success": true,
  "message": "感谢您的咨询，我们会尽快与您联系！",
  "submissionId": "1234567890_abc123"
}
```

**数据验证**:
- 姓名至少2个字符
- 邮箱格式校验
- 公司名称至少2个字符
- 电话号码格式检查（可选）

**数据存储**:
```
data/submissions/
├── contacts.json              # 所有提交的汇总
└── contact_1234567890_abc.json  # 单个提交详情
```

#### 1.2 CRM管理后台

**访问地址**: `/admin`

**认证方式**: API密钥认证

**默认密钥**: `admin-secret-key` （⚠️ 生产环境务必修改）

**功能**:
- 📋 查看所有提交记录
- 🔍 查看提交详情
- 📧 快速联系（点击邮箱/电话）
- 📅 提交时间排序

**使用步骤**:
1. 访问 `/admin`
2. 输入API密钥
3. 查看提交列表
4. 点击邮箱/电话联系客户

---

### 2. CMS - 内容管理系统

#### 2.1 数据结构

**案例数据**: `data/cms/cases.json`

```json
{
  "id": "case-sams-club",
  "title": "山姆会员商店小程序",
  "titleEn": "Sam's Club Mini Program",
  "client": "山姆会员商店",
  "industry": "零售行业",
  "slug": "sams-club-mini-program",
  "summary": "...",
  "challenge": "...",
  "solution": "...",
  "results": [
    { "metric": "页面加载速度", "value": "-60%", "description": "..." }
  ],
  "technologies": ["WeChat Mini Program", "React"],
  "duration": "3 个月",
  "coverImage": "/images/case/app-sams-club.png",
  "featured": true
}
```

**首页数据**: `data/cms/home.json`

```json
{
  "hero": {
    "headline": "技术驱动的品牌营销",
    "highlight": "与数字产品",
    "description": "...",
    "primaryCta": { "label": "获取案例包", "href": "#cases" }
  },
  "stats": [...],
  "clients": [...],
  "services": [...]
}
```

#### 2.2 CMS API

**获取所有案例**: `GET /api/cms/cases`

```typescript
// 响应
{
  "success": true,
  "data": [
    { id: "case-1", title: "...", ... },
    { id: "case-2", title: "...", ... }
  ]
}
```

**获取精选案例**: `GET /api/cms/cases?featured=true`

```typescript
// 响应
{
  "success": true,
  "data": [
    { id: "case-1", title: "...", featured: true, ... }
  ]
}
```

**获取单个案例**: `GET /api/cms/cases?slug=sams-club-mini-program`

```typescript
// 响应
{
  "success": true,
  "data": {
    id: "case-sams-club",
    title: "山姆会员商店小程序",
    ...
  }
}
```

#### 2.3 CMS数据加载工具

**使用方法**:

```typescript
import { getAllCases, getFeaturedCases, getCaseBySlug, getHomeData } from "@/lib/cms/loader";

// 在Server Component中使用
export default function Page() {
  const cases = getAllCases();
  const featured = getFeaturedCases();
  const homeData = getHomeData();
  const singleCase = getCaseBySlug("sams-club-mini-program");
  
  return <div>...</div>;
}
```

---

## 🔧 配置说明

### 环境变量

创建 `.env.local`:

```env
# CRM管理后台API密钥（生产环境必须修改）
ADMIN_API_KEY=your-secure-api-key-here

# 网站URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# 其他配置...
```

### 修改API密钥

1. 打开 `.env.local`
2. 修改 `ADMIN_API_KEY` 的值
3. 重启开发服务器

**或者直接修改代码**:

```typescript
// src/app/api/contact/route.ts
const validToken = process.env.ADMIN_API_KEY || "your-new-key-here";
```

---

## 📊 数据管理

### 添加新案例

编辑 `data/cms/cases.json`，添加新对象：

```json
{
  "id": "case-new-project",
  "title": "新项目标题",
  "titleEn": "New Project Title",
  "client": "客户名称",
  "industry": "行业",
  "slug": "new-project-slug",
  "summary": "项目简介...",
  "challenge": "面临的挑战...",
  "solution": "解决方案...",
  "results": [
    { "metric": "指标", "value": "+50%", "description": "说明" }
  ],
  "technologies": ["技术1", "技术2"],
  "duration": "2 个月",
  "coverImage": "/images/case/new-project.png",
  "featured": true,
  "publishedAt": "2024-01-01",
  "tags": ["标签1", "标签2"]
}
```

### 修改首页内容

编辑 `data/cms/home.json`：

```json
{
  "hero": {
    "headline": "修改后的标题",
    "description": "修改后的描述..."
  },
  "stats": [
    {
      "id": "new-stat",
      "metric": "+200%",
      "title": "新指标",
      "description": "说明"
    }
  ]
}
```

### 查看提交数据

**方法1**: 通过管理后台（推荐）
- 访问 `/admin`
- 输入API密钥
- 查看所有提交

**方法2**: 直接查看文件
```bash
cat data/submissions/contacts.json
```

**方法3**: 使用API
```bash
curl -H "Authorization: Bearer admin-secret-key" \
  http://localhost:3000/api/contact
```

---

## 🔒 安全建议

### 生产环境部署前必做：

1. **修改API密钥**
   ```env
   ADMIN_API_KEY=your-long-random-secure-key-here-min-32-chars
   ```

2. **限制管理后台访问**
   - 添加IP白名单
   - 使用VPN
   - 添加更强的认证（如OAuth）

3. **数据备份**
   ```bash
   # 定期备份数据目录
   tar -czf data-backup-$(date +%Y%m%d).tar.gz data/
   ```

4. **监控提交**
   - 添加反垃圾机制
   - 添加验证码（reCAPTCHA）
   - 限制提交频率

5. **HTTPS**
   - 确保生产环境使用HTTPS
   - 防止API密钥泄露

---

## 🎯 使用场景

### 场景1: 客户咨询

1. 客户访问 `/contact`
2. 填写表单提交
3. 数据保存到 `data/submissions/`
4. 管理员登录 `/admin` 查看
5. 通过邮箱/电话联系客户

### 场景2: 更新案例

1. 编辑 `data/cms/cases.json`
2. 添加新案例或修改现有案例
3. 保存文件
4. 刷新网站，内容自动更新

### 场景3: 修改首页内容

1. 编辑 `data/cms/home.json`
2. 修改文案、数据、链接等
3. 保存文件
4. 刷新首页查看效果

---

## 🔄 工作流程

### 日常工作流

```
1. 客户提交表单
   ↓
2. 系统验证并保存数据
   ↓
3. 管理员收到通知（可选：邮件提醒）
   ↓
4. 登录后台查看详情
   ↓
5. 联系客户跟进
```

### 内容更新流

```
1. 编辑JSON数据文件
   ↓
2. 保存并提交到Git
   ↓
3. 部署到生产环境
   ↓
4. 网站内容自动更新
```

---

## 📈 扩展建议

### 短期改进

1. **邮件通知**
   - 表单提交后发送邮件通知管理员
   - 使用 Nodemailer 或 SendGrid

2. **验证码**
   - 添加 reCAPTCHA v3
   - 防止垃圾提交

3. **导出功能**
   - 导出提交数据为CSV
   - 导出为Excel

### 中期改进

1. **数据库集成**
   - 从JSON文件迁移到数据库（PostgreSQL/MySQL）
   - 使用Prisma ORM

2. **富文本编辑器**
   - 在管理后台添加可视化编辑器
   - 直接编辑案例和内容

3. **图片上传**
   - 支持直接上传案例图片
   - 集成云存储（阿里云OSS/AWS S3）

### 长期改进

1. **完整CMS系统**
   - 用户权限管理
   - 内容版本控制
   - 工作流审批

2. **高级CRM**
   - 客户状态跟踪
   - 销售漏斗
   - 自动化营销

3. **分析面板**
   - 提交来源分析
   - 转化率统计
   - 用户行为分析

---

## 🐛 常见问题

### Q1: 表单提交失败？
**A**: 检查：
1. 网络连接
2. API路由是否正确
3. 数据验证是否通过
4. 服务器日志

### Q2: 管理后台无法登录？
**A**: 检查：
1. API密钥是否正确
2. 环境变量是否设置
3. 浏览器控制台错误信息

### Q3: 案例数据不显示？
**A**: 检查：
1. JSON文件格式是否正确
2. 文件路径是否正确
3. 是否重启了开发服务器

### Q4: 图片无法显示？
**A**: 检查：
1. 图片路径是否以 `/` 开头
2. 图片文件是否在 `public/images/` 下
3. 文件扩展名是否正确

---

## 📚 API参考

### POST /api/contact

**功能**: 提交联系表单

**请求体**:
```json
{
  "name": "string (required, min: 2)",
  "email": "string (required, valid email)",
  "company": "string (required, min: 2)",
  "phone": "string (optional)",
  "budget": "string (optional)",
  "message": "string (optional)"
}
```

**响应**:
```json
// 成功
{
  "success": true,
  "message": "感谢您的咨询...",
  "submissionId": "1234567890_abc"
}

// 失败
{
  "success": false,
  "errors": ["错误信息1", "错误信息2"]
}
```

### GET /api/contact

**功能**: 获取所有提交（需认证）

**请求头**:
```
Authorization: Bearer your-api-key
```

**响应**:
```json
{
  "success": true,
  "data": [
    {
      "id": "...",
      "timestamp": "2024-10-30T12:00:00.000Z",
      "name": "...",
      "email": "...",
      ...
    }
  ]
}
```

### GET /api/cms/cases

**功能**: 获取案例数据

**查询参数**:
- `featured=true`: 仅获取精选案例
- `slug=xxx`: 获取特定案例

**响应**:
```json
{
  "success": true,
  "data": [ /* 案例数组 */ ]
}
```

---

## 🎉 总结

本CRM&CMS系统提供了：
- ✅ 基本的表单提交和管理功能
- ✅ 简单的内容管理系统
- ✅ 管理后台认证
- ✅ JSON文件存储（易于迁移）
- ✅ RESTful API接口
- ✅ TypeScript类型安全

虽然功能简单，但足以满足基本的业务需求，且易于扩展和迁移到更复杂的系统。

---

**创建时间**: 2024-10-30  
**最后更新**: 2024-10-30  
**维护者**: AI Assistant
