import type { Metadata } from "next";
import NarailSeminarPage from "@/components/NarailSeminarPage";

const SITE_URL = "https://sswv.org";
const PATH = "/careers/narail-seminar";

export const metadata: Metadata = {
  title: "Japan Education & Career Roadmap Seminar 2026 | Narail | KTTI",
  description:
    "নড়াইলে KTTI-র বিনামূল্যে Japan Education & Career Roadmap Seminar — ১১ নভেম্বর ২০২৬, জেলা শিল্পকলা একাডেমি। Student Visa, SSW ও Japanese language roadmap।",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "Japan Education & Career Roadmap Seminar 2026 — Narail | KTTI",
    description:
      "Free seminar in Narail on Japanese language, Student Visa, SSW pathway and career roadmap. 11 Nov 2026.",
    url: `${SITE_URL}${PATH}`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
    images: [
      {
        url: "/career/narail-seminar-ad.webp",
        alt: "Japan Education & Career Roadmap Seminar 2026 — নড়াইল",
      },
    ],
  },
};

export default function NarailSeminarRoute() {
  return <NarailSeminarPage />;
}
