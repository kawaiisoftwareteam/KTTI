import type { Metadata } from "next";
import CoursesPage from "@/components/CoursesPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "Courses | Kawaii Tredmig Training Institute (KTTI)",
  description:
    "Explore KTTI academic courses for Japanese language, SSW skill training, and Japan career preparation in Dhaka.",
  alternates: { canonical: `${SITE_URL}/courses` },
  openGraph: {
    title: "Courses | KTTI",
    description:
      "Japanese language and SSW vocational courses at Kawaii Tredmig Training Institute.",
    url: `${SITE_URL}/courses`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function CoursesRoute() {
  return <CoursesPage />;
}
