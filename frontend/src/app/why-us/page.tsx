import type { Metadata } from "next";
import WhyUsPage from "@/components/WhyUsPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "Why Us | Kawaii Tredmig Training Institute (KTTI)",
  description:
    "Why candidates choose KTTI for disciplined SSW and Japanese-language training with transparent Japan career pathways.",
  alternates: { canonical: `${SITE_URL}/why-us` },
  openGraph: {
    title: "Why Us | KTTI",
    description:
      "What sets Kawaii Tredmig Training Institute apart for Japan-bound candidates.",
    url: `${SITE_URL}/why-us`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function WhyUsRoute() {
  return <WhyUsPage />;
}
