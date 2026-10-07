"use client";

import Image from "next/image";
import { useAppTranslations } from "@/lib/i18n/use-app-translations";

export function ProductOverview(): React.JSX.Element {
  const { t } = useAppTranslations();

  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-stretch md:gap-0 lg:gap-0">
          <div className="hidden w-full shrink-0 justify-center md:flex md:w-[30%] md:justify-start md:pr-12 lg:w-[28%] lg:pr-16">
            <Image
              src="/logo-mark.png"
              alt="PhotoRedactor"
              width={256}
              height={256}
              className="h-60 w-60 self-end object-contain lg:h-64 lg:w-64"
              priority
            />
          </div>

          <div
            className="hidden w-px shrink-0 self-stretch bg-border md:block"
            aria-hidden="true"
          />

          <div className="min-w-0 flex-1 text-left md:pl-12 lg:pl-16">
            <h2
              className="max-w-4xl text-[28px] leading-[34px] font-semibold tracking-[-0.03em] sm:text-[40px] sm:leading-[46px] md:text-[48px] md:leading-[54px]"
              style={{
                fontFamily:
                  'Inter, "Inter Fallback", Arial, Helvetica, sans-serif',
              }}
            >
              <span className="landing-heading block md:whitespace-nowrap">
                {t.landing.overviewTitle}
              </span>
            </h2>
            <div className="mt-6 max-w-2xl space-y-3 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              <p>{t.landing.overviewP1}</p>
              <p>{t.landing.overviewP2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
