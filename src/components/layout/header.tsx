"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";

const navigation = [
  { href: "/", label: "首页", labelEn: "Home" },
  { href: "/services", label: "服务", labelEn: "Services" },
  { href: "/work", label: "案例", labelEn: "Work" },
  { href: "/insights", label: "洞察", labelEn: "Insights" },
  { href: "/about", label: "关于我们", labelEn: "About" },
  { href: "/contact", label: "联系", labelEn: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
            L
          </span>
          <div className="flex flex-col leading-tight">
            <span>Linkend Tech</span>
            <span className="text-xs text-gray-500">内容 × 技术 × 数据</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-gray-600",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" href="/en">
            EN
          </Button>
          <Button size="sm" href="/contact">
            预约咨询
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-lg border border-gray-200 p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-primary/10",
                  pathname === item.href ? "text-primary" : "text-gray-700",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span className="ml-2 text-xs text-gray-400">{item.labelEn}</span>
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button variant="ghost" href="/en">
                English Version
              </Button>
              <Button href="/contact">预约 15 分钟咨询</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
