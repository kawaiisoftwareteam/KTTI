import type { Metadata } from "next";
import CareersIndexPage from "@/components/CareersIndexPage";
import { aboutPageEn } from "@/i18n/aboutPage";

const SITE_URL = "https://sswv.org";
const I = aboutPageEn.careers.index;

export const metadata: Metadata = {
  title: I.metaTitle,
  description: I.metaDescription,
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: I.metaTitle,
    description: I.metaDescription,
    url: `${SITE_URL}/careers`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
    images: [
      {
        url: I.cardImage,
        alt: I.cardImageAlt,
      },
    ],
  },
};

export default function CareersIndexRoute() {
  return <CareersIndexPage />;
}
