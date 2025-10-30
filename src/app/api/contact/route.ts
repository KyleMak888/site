import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import type { ContactFormData } from "@/types";

const SUBMISSIONS_DIR = path.join(process.cwd(), "data", "submissions");

// 确保目录存在
if (!fs.existsSync(SUBMISSIONS_DIR)) {
  fs.mkdirSync(SUBMISSIONS_DIR, { recursive: true });
}

/**
 * 保存联系表单提交
 */
function saveSubmission(data: ContactFormData & { timestamp: string; id: string }) {
  const filename = `contact_${data.id}.json`;
  const filePath = path.join(SUBMISSIONS_DIR, filename);
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
  
  // 同时追加到总列表
  const listPath = path.join(SUBMISSIONS_DIR, "contacts.json");
  let list: any[] = [];
  
  if (fs.existsSync(listPath)) {
    const content = fs.readFileSync(listPath, "utf8");
    list = JSON.parse(content);
  }
  
  list.push(data);
  fs.writeFileSync(listPath, JSON.stringify(list, null, 2), "utf8");
}

/**
 * 表单验证
 */
function validateFormData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("姓名必须至少2个字符");
  }
  
  if (!data.email || typeof data.email !== "string") {
    errors.push("请提供有效的邮箱地址");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push("邮箱格式不正确");
    }
  }
  
  if (!data.company || typeof data.company !== "string" || data.company.trim().length < 2) {
    errors.push("公司名称必须至少2个字符");
  }
  
  if (data.phone && typeof data.phone === "string") {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push("电话号码格式不正确");
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * POST /api/contact
 * 提交联系表单
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // 验证数据
    const validation = validateFormData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }
    
    // 生成ID和时间戳
    const timestamp = new Date().toISOString();
    const id = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const submissionData = {
      id,
      timestamp,
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      company: body.company.trim(),
      budget: body.budget || "",
      message: body.message || "",
      phone: body.phone || "",
      source: body.source || "website",
      utm: {
        source: body.utm_source || "",
        medium: body.utm_medium || "",
        campaign: body.utm_campaign || "",
      },
    };
    
    // 保存到文件
    saveSubmission(submissionData);
    
    // 返回成功响应
    return NextResponse.json(
      {
        success: true,
        message: "感谢您的咨询，我们会尽快与您联系！",
        submissionId: id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: "服务器错误，请稍后重试" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * 获取所有提交（需要认证）
 */
export async function GET(request: NextRequest) {
  try {
    // 简单的认证检查（生产环境应使用更安全的方式）
    const authHeader = request.headers.get("authorization");
    const validToken = process.env.ADMIN_API_KEY || "admin-secret-key";
    
    if (authHeader !== `Bearer ${validToken}`) {
      return NextResponse.json(
        { success: false, error: "未授权" },
        { status: 401 }
      );
    }
    
    const listPath = path.join(SUBMISSIONS_DIR, "contacts.json");
    
    if (!fs.existsSync(listPath)) {
      return NextResponse.json({ success: true, data: [] });
    }
    
    const content = fs.readFileSync(listPath, "utf8");
    const submissions = JSON.parse(content);
    
    // 按时间倒序排列
    submissions.sort((a: any, b: any) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    
    return NextResponse.json({ success: true, data: submissions });
  } catch (error) {
    console.error("Failed to retrieve submissions:", error);
    return NextResponse.json(
      { success: false, error: "服务器错误" },
      { status: 500 }
    );
  }
}
