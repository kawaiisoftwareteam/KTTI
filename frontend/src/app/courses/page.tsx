import type { Metadata } from "next";
import CoursesHub from "@/components/CoursesHub";
import CoursesPage from "@/components/CoursesPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "Japanese Language & Visa Courses in Bangladesh | KTTI",
  description: "Explore KTTI courses in Dhaka: Japanese language, JLPT N5 and N4, SSW and student visa preparation, interview prep, mock tests and online mock interviews.",
  keywords: "japanese language course in bangladesh, japanese language courses dhaka, japan student visa from bangladesh, japan ssw visa bangladesh, how to go to japan from bangladesh",
  alternates: { canonical: `${SITE_URL}/courses` },
  openGraph: {
    title: "Japanese Language & Visa Courses in Bangladesh | KTTI",
    description: "Explore KTTI courses in Dhaka: Japanese language, JLPT N5 and N4, SSW and student visa preparation, interview prep, mock tests and online mock interviews.",
    url: `${SITE_URL}/courses`,
    type: "website",
    siteName: "Kawaii Training Institute",
  },
};

export default function CoursesRoute() {
  return (
    <>
      <div className="pt-24 bg-white">
        <CoursesPage />
      </div>
      <CoursesHub />
    </>
  );
}
