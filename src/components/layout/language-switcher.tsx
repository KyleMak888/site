"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const currentLocale = (params.locale as Locale) || "zh-CN";

  const handleChange = (locale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleChange(locale)}
          disabled={isPending || locale === currentLocale}
          className={cn(
            "rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            locale === currentLocale
              ? "bg-primary text-white"
              : "text-gray-600 hover:bg-gray-100",
            isPending && "opacity-50"
          )}
          aria-label={`切换到${localeNames[locale]}`}
          aria-current={locale === currentLocale ? "true" : undefined}
        >
          {locale === "zh-CN" ? "简" : locale === "zh-TW" ? "繁" : "EN"}
        </button>
      ))}
    </div>
  );
}
