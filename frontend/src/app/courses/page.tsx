import type { Metadata } from "next";
import CoursesPage from "@/components/CoursesPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "15 Day Basic Japanese | Kawaii Tredmig Training Institute (KTTI)",
  description:
    "KTTI-এর ১৫ দিনের বেসিক জাপানি কোর্স। আবাসিক ৭,৫০০ টাকা — থাকা, খাওয়া ও শেখা। অনাবাসিক ২,৫০০ টাকা — শুধু কোর্স।",
  alternates: { canonical: `${SITE_URL}/courses` },
  openGraph: {
    title: "15 Day Basic Japanese | KTTI",
    description:
      "মাত্র ১৫ দিনে জাপানি ভাষার বেসিক। আবাসিক ৭,৫০০ অথবা অনাবাসিক ২,৫০০।",
    url: `${SITE_URL}/courses`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function CoursesRoute() {
  return <CoursesPage />;
}
