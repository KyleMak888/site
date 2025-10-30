import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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

export function CardLink({ children, className, href }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      {children}
    </Link>
  );
}
