"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function FocusManager() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const main = document.querySelector<HTMLElement>("main#main-content");
      if (main) {
        main.focus();
      }
    }, 100);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
