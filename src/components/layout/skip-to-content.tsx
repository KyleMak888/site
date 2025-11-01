import Link from "next/link";

export function SkipToContent() {
  return (
    <Link
      href="#main-content"
      className="absolute left-4 top-4 -translate-y-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white focus-visible:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      跳转到主要内容
    </Link>
  );
}
