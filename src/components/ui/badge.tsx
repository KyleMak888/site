import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  outline: "border border-current text-current",
  neutral: "bg-gray-100 text-gray-600",
  default: "bg-gray-100 text-gray-700",
  solid: "bg-primary text-white",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

type BadgeVariant = keyof typeof variants;
type BadgeSize = keyof typeof sizes;

type BadgeProps = {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
};

export function Badge({
  variant = "primary",
  size = "md",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-semibold",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
