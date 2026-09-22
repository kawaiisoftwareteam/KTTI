import type { Metadata } from "next";
import SswPage from "@/components/SswPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "SSW Programs | Kawaii Tredmig Training Institute (KTTI)",
  description:
    "Specified Skilled Worker (SSW) pathway training at KTTI — Prometric/OTIT-aligned prep for careers in Japan.",
  alternates: { canonical: `${SITE_URL}/ssw` },
  openGraph: {
    title: "SSW Programs | KTTI",
    description:
      "SSW skill-test and Japan placement pathway at Kawaii Tredmig Training Institute.",
    url: `${SITE_URL}/ssw`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function SswRoute() {
  return <SswPage />;
}
