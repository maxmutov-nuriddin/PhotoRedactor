import { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { getAppTranslations } from "@/lib/i18n/translations";

export const metadata: Metadata = {
  title: "PhotoRedactor - Screenshot Mockup Maker & Image Editor",
  description:
    "Make screenshot mockups in seconds. Browser frames, device mockups, gradient backgrounds, 3D effects, animations, and video export. Free, no signup.",
  openGraph: {
    title: "PhotoRedactor - Screenshot Mockup Maker & Image Editor",
    description:
      "Transform screenshots into professional graphics. Backgrounds, browser mockups, 3D effects, animations, and video export. No signup required.",
    url: "/landing",
  },
  alternates: {
    canonical: "/landing",
  },
};

export default async function LandingPageRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getAppTranslations(locale);

  const howItWorks = [
    {
      step: 1,
      title: t.landing.step1Title,
      description: t.landing.step1Desc,
    },
    {
      step: 2,
      title: t.landing.step2Title,
      description: t.landing.step2Desc,
    },
    {
      step: 3,
      title: t.landing.step3Title,
      description: t.landing.step3Desc,
    },
  ];

  return (
    <LandingPage
      heroTitle={t.landing.heroTitle}
      heroSubtitle={t.landing.heroSubtitle}
      heroDescription={t.landing.heroDescription}
      ctaLabel={t.landing.getStarted}
      ctaHref="/"
      howItWorks={howItWorks}
      brandName="PhotoRedactor"
    />
  );
}
