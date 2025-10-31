"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cardHover, cardTap } from "@/lib/animations";

type CardProps = {
  children: ReactNode;
  className?: string;
};

type CardLinkProps = CardProps & {
  href: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-2xl border border-gray-100 bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}

const MotionWrapper = motion.div;

export function CardLink({ children, className, href }: CardLinkProps) {
  return (
    <MotionWrapper whileHover={cardHover} whileTap={cardTap}>
      <Link
        href={href}
        className={cn(
          "group block rounded-2xl border border-gray-100 bg-white shadow-sm transition-all",
          className,
        )}
      >
        {children}
      </Link>
    </MotionWrapper>
  );
}
