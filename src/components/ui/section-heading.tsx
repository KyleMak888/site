import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  eyebrowEn?: string;
  title: string;
  titleEn?: string;
  description?: ReactNode;
  align?: "left" | "center";
  headingId?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowEn,
  title,
  titleEn,
  description,
  align = "center",
  className,
  headingId,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        align === "center" && "text-center",
        className,
      )}
      {...props}
    >
      {(eyebrow || eyebrowEn) && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
          {eyebrowEn && (
            <span className="ml-2 text-gray-500">{eyebrowEn}</span>
          )}
        </p>
      )}
      <h2 id={headingId} className="text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
        {titleEn && (
          <span className="ml-2 text-primary">{titleEn}</span>
        )}
      </h2>
      {description && (
        <p className="text-lg text-gray-600">{description}</p>
      )}
    </div>
  );
}
