"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppTranslations } from "@/lib/i18n/use-app-translations";

interface FooterProps {
  brandName?: string;
}

function FooterNavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}): React.JSX.Element {
  return (
    <Link
      href={href}
      className="flex w-full flex-1 items-center rounded-md bg-foreground/[0.04] px-4 py-3 text-sm text-foreground/90 ring-1 ring-border transition-colors duration-150 hover:bg-foreground/[0.08] hover:text-foreground"
    >
      {label}
    </Link>
  );
}

export function Footer({ brandName = "PhotoRedactor" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { t } = useAppTranslations();

  const navCol1 = [
    { href: "/editor", label: t.footer.screenshotEditor },
    { href: "/code", label: t.footer.codeToImage },
    { href: "/tweet", label: t.footer.tweetToImage },
    { href: "/store-screenshots", label: "App Store Mockups" },
    { href: "/remove-background", label: t.footer.removeBackground },
  ];

  const navCol2 = [
    { href: "/tools", label: t.footer.imageTools },
    { href: "/features", label: t.footer.features },
    { href: "/guides", label: t.footer.guides },
    { href: "/changelog", label: t.nav.changelog },
  ];

  const navCol3 = [
    { href: "/about", label: t.footer.about },
    { href: "/contact", label: t.footer.contact },
    { href: "/privacy-policy", label: t.footer.privacy },
    { href: "/terms", label: t.footer.terms },
  ];

  return (
    <footer className="bg-background px-6 pb-8 pt-4 sm:pb-10">
      <div className="mx-auto max-w-6xl rounded-2xl bg-card px-6 py-12 ring-1 ring-border shadow-[var(--card-edge-shadow)] sm:px-8 sm:py-14">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex h-full flex-col gap-6">
            <Link
              href="/"
              className="inline-flex w-fit items-center gap-2.5"
            >
              <Image
                src="/logo-mark.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-base font-semibold tracking-tight text-foreground">
                {brandName}
              </span>
            </Link>
            <p
              className="max-w-xs text-[20px] font-semibold leading-[1.3] tracking-[-0.03em] text-foreground sm:text-[24px]"
              style={{
                fontFamily:
                  'Inter, "Inter Fallback", Arial, Helvetica, sans-serif',
              }}
            >
              {t.footer.tagline}
            </p>
          </div>

          <div className="grid h-full w-full grid-cols-2 gap-2 sm:grid-cols-3 md:max-w-xl md:justify-self-end">
            <div className="flex h-full flex-col gap-2">
              {navCol1.map((item) => (
                <FooterNavLink key={item.href} {...item} />
              ))}
            </div>
            <div className="flex h-full flex-col gap-2">
              {navCol2.map((item) => (
                <FooterNavLink key={item.href} {...item} />
              ))}
            </div>
            <div className="flex h-full flex-col gap-2">
              {navCol3.map((item) => (
                <FooterNavLink key={item.href} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/privacy-policy"
              className="inline-flex h-10 items-center rounded-md bg-foreground/[0.04] px-3 text-sm text-foreground/90 ring-1 ring-border transition-colors duration-150 hover:bg-foreground/[0.08] hover:text-foreground"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/terms"
              className="inline-flex h-10 items-center rounded-md bg-foreground/[0.04] px-3 text-sm text-foreground/90 ring-1 ring-border transition-colors duration-150 hover:bg-foreground/[0.08] hover:text-foreground"
            >
              {t.footer.terms}
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/70">
            © {currentYear} {brandName}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
