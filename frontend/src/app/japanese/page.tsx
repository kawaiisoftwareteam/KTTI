import type { Metadata } from "next";
import JapanesePage from "@/components/JapanesePage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "Japanese Hub | Kawaii Tredmig Training Institute (KTTI)",
  description:
    "KTTI Japanese Language Academy — JLPT prep, immersion, and workplace Japanese for Bangladesh candidates.",
  alternates: { canonical: `${SITE_URL}/japanese` },
  openGraph: {
    title: "Japanese Hub | KTTI",
    description:
      "Japanese language academy and hub at Kawaii Tredmig Training Institute.",
    url: `${SITE_URL}/japanese`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function JapaneseRoute() {
  return <JapanesePage />;
}
