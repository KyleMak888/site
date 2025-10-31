"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, cardHover, cardTap } from "@/lib/animations";
import { Badge } from "./badge";
import { IndustryBadge } from "./industry-badge";

export interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  industry: string;
  thumbnail: string;
  description: string;
  tags?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  className?: string;
}

export function CaseStudyCard({
  slug,
  title,
  client,
  industry,
  thumbnail,
  description,
  tags = [],
  metrics = [],
  className = "",
}: CaseStudyCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={cardHover}
      whileTap={cardTap}
      className={className}
    >
      <Link
        href={`/work/${slug}`}
        className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
      >
        <div className="relative h-64 w-full overflow-hidden bg-gray-100">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {industry && (
            <div className="absolute top-4 left-4">
              <IndustryBadge industry={industry} variant="solid" size="sm" />
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="mb-2 text-sm font-medium text-primary-600">
            {client}
          </div>
          
          <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {title}
          </h3>
          
          <p className="mb-4 text-sm text-gray-600 line-clamp-3">
            {description}
          </p>

          {metrics && metrics.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-4">
              {metrics.slice(0, 3).map((metric, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-lg font-bold text-primary-600">
                    {metric.value}
                  </span>
                  <span className="text-xs text-gray-500">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-4 flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
            查看详情
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface CaseStudyGridProps {
  cases: CaseStudyCardProps[];
  columns?: 1 | 2 | 3;
  className?: string;
}

export function CaseStudyGrid({ cases, columns = 3, className = "" }: CaseStudyGridProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  }[columns];

  return (
    <div className={`grid ${gridClass} gap-8 ${className}`}>
      {cases.map((caseStudy, index) => (
        <CaseStudyCard key={index} {...caseStudy} />
      ))}
    </div>
  );
}
