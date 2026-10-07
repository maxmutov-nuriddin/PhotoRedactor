"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { getAppTranslations, AppLocale } from "./translations";

export function useAppTranslations() {
  let locale: AppLocale = "en";

  try {
    const intlLocale = useLocale();
    if (intlLocale === "uz" || intlLocale === "ru" || intlLocale === "en") {
      locale = intlLocale;
    }
  } catch {
    // Fallback if rendered outside of NextIntl context
  }

  // Double check pathname in case of hydration or static render
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    if (path.startsWith("/uz/") || path === "/uz") {
      locale = "uz";
    } else if (path.startsWith("/ru/") || path === "/ru") {
      locale = "ru";
    }
  }

  const t = getAppTranslations(locale);

  return { locale, t };
}
