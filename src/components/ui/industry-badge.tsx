"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface IndustryBadgeProps {
  industry: string;
  icon?: string;
  className?: string;
  variant?: "default" | "outline" | "solid";
  size?: "sm" | "md" | "lg";
}

export function IndustryBadge({
  industry,
  icon,
  className = "",
  variant = "default",
  size = "md",
}: IndustryBadgeProps) {
  const variantStyles = {
    default: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-600",
    solid: "bg-primary-500 text-white hover:bg-primary-600",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <motion.span
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`
        inline-flex items-center gap-1.5 rounded-full font-medium transition-all
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {icon && <span className="text-current">{icon}</span>}
      {industry}
    </motion.span>
  );
}

interface IndustryBadgeListProps {
  industries: string[];
  variant?: "default" | "outline" | "solid";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IndustryBadgeList({
  industries,
  variant = "default",
  size = "md",
  className = "",
}: IndustryBadgeListProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {industries.map((industry, index) => (
        <IndustryBadge
          key={index}
          industry={industry}
          variant={variant}
          size={size}
        />
      ))}
    </div>
  );
}
