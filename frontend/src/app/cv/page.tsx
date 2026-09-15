import type { Metadata } from "next";
import CvGeneratePage from "@/components/CvGeneratePage";
import { cvPageEn } from "@/i18n/cvPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: cvPageEn.meta.title,
  description: cvPageEn.meta.description,
  keywords: [
    "Japanese resume builder",
    "rirekisho online",
    "generate CV Japan",
    "KTTI resume",
    "SSW CV template",
    "履歴書 作成",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/cv`,
  },
  openGraph: {
    title: cvPageEn.meta.ogTitle,
    description: cvPageEn.meta.ogDescription,
    url: `${SITE_URL}/cv`,
    type: "website",
    locale: "en_US",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function CvRoute() {
  return <CvGeneratePage />;
}
