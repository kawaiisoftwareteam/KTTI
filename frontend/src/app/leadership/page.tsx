import type { Metadata } from "next";
import LeadershipIndexPage from "@/components/LeadershipIndexPage";
import { aboutPageEn } from "@/i18n/aboutPage";

const SITE_URL = "https://sswv.org";
const L = aboutPageEn.leadership;

export const metadata: Metadata = {
  title: L.index.metaTitle,
  description: L.index.metaDescription,
  keywords: [
    "KTTI leadership",
    "Kawaii Tredmig board of directors",
    "SSW training institute Dhaka management",
    "Kawaii Group executives",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/leadership`,
  },
  openGraph: {
    title: L.index.metaTitle,
    description: L.index.metaDescription,
    url: `${SITE_URL}/leadership`,
    type: "website",
    locale: "en_US",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function LeadershipIndexRoute() {
  return <LeadershipIndexPage />;
}
