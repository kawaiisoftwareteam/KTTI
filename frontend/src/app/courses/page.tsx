import type { Metadata } from "next";
import CoursesHub from "@/components/CoursesHub";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "Japanese Language Learning | Kawaii Training Institute",
  description: "Explore KTTI courses: Japanese language, SSW preparation, student visa preparation, mock tests, and interview prep in Dhaka, Bangladesh.",
  alternates: { canonical: `${SITE_URL}/courses` },
  openGraph: {
    title: "Courses | KTTI",
    description: "Explore KTTI courses: Japanese language, SSW preparation, student visa preparation, mock tests, and interview prep.",
    url: `${SITE_URL}/courses`,
    type: "website",
    siteName: "Kawaii Training Institute",
  },
};

export default function CoursesRoute() {
  return <CoursesHub />;
}
