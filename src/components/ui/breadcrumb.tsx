"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <motion.nav
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      aria-label="Breadcrumb"
      className={`text-sm ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                  <span className="text-gray-400">/</span>
                </>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
