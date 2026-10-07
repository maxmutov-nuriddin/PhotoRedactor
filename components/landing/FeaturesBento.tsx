"use client";

import { MagicBento, type MagicBentoCard } from "./MagicBento";
import {
  BackgroundsVisual,
  CaptureVisual,
  ExportVisual,
  FramesVisual,
  MotionVisual,
  TransformsVisual,
} from "./BentoCardVisuals";
import { useAppTranslations } from "@/lib/i18n/use-app-translations";

export function FeaturesBento(): React.JSX.Element {
  const { t } = useAppTranslations();

  const featureCards: MagicBentoCard[] = [
    {
      title: t.landing.cardFrames,
      description: t.landing.cardFramesDesc,
      label: "Frames",
      visual: <FramesVisual />,
    },
    {
      title: t.landing.cardTransforms,
      description: t.landing.cardTransformsDesc,
      label: "Depth",
      visual: <TransformsVisual />,
    },
    {
      title: t.landing.cardBackgrounds,
      description: t.landing.cardBackgroundsDesc,
      label: "Style",
      visual: <BackgroundsVisual />,
      large: true,
    },
    {
      title: t.landing.cardMotion,
      description: t.landing.cardMotionDesc,
      label: "Motion",
      visual: <MotionVisual />,
      large: true,
    },
    {
      title: t.landing.cardCapture,
      description: t.landing.cardCaptureDesc,
      label: "Capture",
      visual: <CaptureVisual />,
    },
    {
      title: t.landing.cardExport,
      description: t.landing.cardExportDesc,
      label: "Export",
      visual: <ExportVisual />,
    },
  ];

  return (
    <section className="bg-background px-6 pt-20 pb-4 sm:pt-28 sm:pb-4">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center md:mb-14">
          <h2
            className="landing-heading text-[28px] leading-[34px] font-semibold tracking-[-0.03em] sm:text-[36px] sm:leading-[42px] md:text-[44px] md:leading-[50px]"
            style={{
              fontFamily:
                'Inter, "Inter Fallback", Arial, Helvetica, sans-serif',
            }}
          >
            {t.landing.bentoTitle1}
            <br />
            {t.landing.bentoTitle2}
          </h2>
        </div>

        <MagicBento
          cards={featureCards}
          textAutoHide
          enableSpotlight
          enableBorderGlow
          clickEffect
          spotlightRadius={400}
          glowColor="var(--bento-glow-rgb)"
        />
      </div>
    </section>
  );
}
