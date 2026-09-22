import type { Metadata } from "next";
import CareersPage from "@/components/CareersPage";
import { aboutPageEn } from "@/i18n/aboutPage";

const SITE_URL = "https://sswv.org";
const C = aboutPageEn.careers;

export const metadata: Metadata = {
  title: `${C.h2} | KTTI`,
  description: C.body.slice(0, 155),
  alternates: { canonical: `${SITE_URL}/about/careers` },
  openGraph: {
    title: `${C.h2} | KTTI`,
    description: C.body.slice(0, 155),
    url: `${SITE_URL}/about/careers`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function CareersRoute() {
  return <CareersPage />;
}
