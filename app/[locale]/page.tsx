import type { Metadata } from "next";
import { HomeContent } from "@/components/home/HomeContent";

const DESCRIPTION =
  "Free browser editors for screenshots, code images, tweet images, and App Store screenshots, plus image tools that compress, convert, and resize without uploading. No signup, no watermark.";

export const metadata: Metadata = {
  title: "PhotoRedactor - Free Screenshot Editor & Image Tools",
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PhotoRedactor - Free Screenshot Editor & Image Tools",
    description: DESCRIPTION,
    url: "/",
  },
};

export default function StartPage() {
  return <HomeContent />;
}
