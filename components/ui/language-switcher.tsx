"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const languages = [
  { code: "uz", label: "O'zbekcha", short: "UZ", flag: "🇺🇿" },
  { code: "ru", label: "Русский", short: "RU", flag: "🇷🇺" },
  { code: "en", label: "English", short: "EN", flag: "🇺🇸" },
] as const;

interface LanguageSwitcherProps {
  className?: string;
  variant?: "default" | "compact" | "editor";
}

export function LanguageSwitcher({
  className,
  variant = "default",
}: LanguageSwitcherProps) {
  let currentLocale = "en";
  try {
    currentLocale = useLocale();
  } catch {
    // fallback if outside next-intl context
  }

  // Also check pathname in case of hydration delay
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
    if (path.startsWith("/uz/") || path === "/uz") {
      currentLocale = "uz";
    } else if (path.startsWith("/ru/") || path === "/ru") {
      currentLocale = "ru";
    }
  }

  const pathname = usePathname();
  const router = useRouter();

  const activeLanguage =
    languages.find((l) => l.code === currentLocale) || languages[2];

  const handleSelectLanguage = (code: string) => {
    if (code === currentLocale) return;

    // 1. Save language in cookie and localStorage
    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; SameSite=Lax`;
      try {
        localStorage.setItem("NEXT_LOCALE", code);
      } catch {}
    }

    // 2. Compute exact destination URL
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      const segments = currentPath.split("/").filter(Boolean);
      const knownLocales = [
        "en", "ru", "uz", "es", "fr", "de", "ja", "pt", "ko", "zh"
      ];
      if (segments.length > 0 && knownLocales.includes(segments[0])) {
        segments.shift(); // remove existing locale prefix
      }
      const basePath = segments.length > 0 ? `/${segments.join("/")}` : "";
      const targetPath = code === "en" ? (basePath || "/") : `/${code}${basePath}`;
      const finalUrl = `${targetPath}${window.location.search}${window.location.hash}`;

      window.location.href = finalUrl;
      return;
    }

    router.replace(pathname, { locale: code as any });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors outline-none select-none cursor-pointer",
            "text-muted-foreground hover:text-foreground hover:bg-muted/60",
            variant === "compact"
              ? "h-8 px-2 text-xs"
              : variant === "editor"
                ? "h-8 px-2 text-xs border border-border/50 bg-background/50 hover:bg-muted"
                : "h-9 px-2.5 text-xs md:text-sm",
            className
          )}
          aria-label="Tilni tanlash / Выбор языка / Select language"
        >
          <span className="text-sm leading-none">{activeLanguage.flag}</span>
          <span className="font-semibold uppercase tracking-wider text-[11px] md:text-xs">
            {activeLanguage.short}
          </span>
          <Globe className="size-3.5 opacity-60 ml-0.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36 min-w-[9rem] p-1 shadow-lg z-50">
        {languages.map((lang) => {
          const isSelected = currentLocale === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code)}
              className={cn(
                "flex items-center justify-between px-2.5 py-1.5 text-xs rounded-sm cursor-pointer transition-colors",
                isSelected
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm">{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                {lang.short}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
