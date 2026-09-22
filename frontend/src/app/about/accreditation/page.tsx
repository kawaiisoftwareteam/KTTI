import type { Metadata } from "next";
import AccreditationPage from "@/components/AccreditationPage";
import { aboutPageEn } from "@/i18n/aboutPage";

const SITE_URL = "https://sswv.org";
const A = aboutPageEn.accreditation;

export const metadata: Metadata = {
  title: `${A.h2} | KTTI`,
  description: A.h2Question,
  alternates: { canonical: `${SITE_URL}/about/accreditation` },
  openGraph: {
    title: `${A.h2} | KTTI`,
    description: A.h2Question,
    url: `${SITE_URL}/about/accreditation`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function AccreditationRoute() {
  return <AccreditationPage />;
}
