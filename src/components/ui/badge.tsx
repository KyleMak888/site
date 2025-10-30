import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  outline: "border border-current text-current",
  neutral: "bg-gray-100 text-gray-600",
};

type BadgeVariant = keyof typeof variants;

type BadgeProps = {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
};

export function Badge({ variant = "primary", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
