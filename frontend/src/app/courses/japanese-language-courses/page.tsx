import type { Metadata } from "next";
import JapaneseCoursesRegisterPage from "@/components/JapaneseCoursesRegisterPage";

export const metadata: Metadata = {
  title: "জাপানিজ ভাষা কোর্স রেজিস্ট্রেশন | KTTI",
  description:
    "KTTI-তে অনাবাসিক দুপুর–সন্ধ্যা, অনলাইন ও ৫ ঘণ্টার জাপানিজ ভাষা কোর্সে রেজিস্ট্রেশন করুন। সাপ্তাহিক মক টেস্ট, মক ইন্টারভিউ ও SSW Skill Development।",
  alternates: {
    canonical: "https://sswv.org/courses/japanese-language-courses",
  },
  openGraph: {
    title: "জাপানিজ ভাষা কোর্স রেজিস্ট্রেশন | KTTI",
    description:
      "অনাবাসিক দুপুর–সন্ধ্যা, অনলাইন ও ইনটেনসিভ জাপানিজ ভাষা কোর্স — Kawaii Tredmig Training Institute।",
    url: "https://sswv.org/courses/japanese-language-courses",
    type: "website",
    siteName: "Kawaii Training Institute",
  },
};

export default function JapaneseLanguageCoursesPage() {
  return <JapaneseCoursesRegisterPage />;
}
