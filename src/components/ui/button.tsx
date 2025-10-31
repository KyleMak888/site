"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonHover, buttonTap } from "@/lib/animations";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const MotionWrapper = motion.span;

const baseStyles =
  "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-600 focus-visible:ring-primary",
  secondary:
    "bg-secondary text-white hover:bg-secondary-800 focus-visible:ring-secondary",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
  ghost:
    "text-primary hover:bg-primary/10 focus-visible:ring-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

function renderContent(
  children: ReactNode,
  icon: ReactNode,
  iconPosition: "left" | "right",
): ReactNode {
  if (!icon) return children;

  if (iconPosition === "left") {
    return (
      <>
        <span className="mr-2 inline-flex items-center">{icon}</span>
        {children}
      </>
    );
  }

  return (
    <>
      {children}
      <span className="ml-2 inline-flex items-center">{icon}</span>
    </>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "left",
    fullWidth,
    loading,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    loading && "pointer-events-none opacity-70",
    className,
  );

  const content = (
    <span className="inline-flex items-center">
      {loading && (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
      )}
      {renderContent(children, icon, iconPosition)}
    </span>
  );

  const wrapperClasses = cn(fullWidth ? "block w-full" : "inline-block");

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return (
      <MotionWrapper whileHover={buttonHover} whileTap={buttonTap} className={wrapperClasses}>
        <Link href={href} {...linkProps} className={classes}>
          {content}
        </Link>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper whileHover={buttonHover} whileTap={buttonTap} className={wrapperClasses}>
      <button {...(rest as ButtonAsButton)} className={classes}>
        {content}
      </button>
    </MotionWrapper>
  );
}
