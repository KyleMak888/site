import { NextRequest, NextResponse } from "next/server";
import { getAllCases, getFeaturedCases, getCaseBySlug } from "@/lib/cms/loader";

/**
 * GET /api/cms/cases
 * 获取案例列表
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get("featured");
    const slug = searchParams.get("slug");

    let data;

    if (slug) {
      // 获取单个案例
      data = getCaseBySlug(slug);
      if (!data) {
        return NextResponse.json(
          { success: false, error: "案例未找到" },
          { status: 404 }
        );
      }
    } else if (featured === "true") {
      // 获取精选案例
      data = getFeaturedCases();
    } else {
      // 获取所有案例
      data = getAllCases();
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Failed to load cases:", error);
    return NextResponse.json(
      { success: false, error: "加载失败" },
      { status: 500 }
    );
  }
}
