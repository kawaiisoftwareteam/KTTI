import type { Metadata } from "next";
import CoursesPage from "@/components/CoursesPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "15 Day Basic Japanese | Kawaii Tredmig Training Institute (KTTI)",
  description:
    "আগে নিজেকে যাচাই করুন, তারপর Japanese Language শেখা শুরু করুন। KTTI-এর ১৫ দিনের Basic Japanese — নির্বাচিত কোর্স ফিতে ৫০% ছাড়।",
  alternates: { canonical: `${SITE_URL}/courses` },
  openGraph: {
    title: "15 Day Basic Japanese | KTTI",
    description:
      "কোর্সে ভর্তির আগে Basic Japanese-এর সঙ্গে নিজেকে পরিচিত করুন। নির্বাচিত কোর্স ফিতে ৫০% ছাড়।",
    url: `${SITE_URL}/courses`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function CoursesRoute() {
  return <CoursesPage />;
}
