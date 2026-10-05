import type { Metadata } from "next";
import CoursesPage from "@/components/CoursesPage";

export const metadata: Metadata = {
  title: "Learn Japanese in Bangladesh | KTTI",
  description: "Join the best Japanese language course in Bangladesh. We offer JLPT N5, N4 preparation with native-level teachers.",
};

export default function JapaneseLanguageCoursePage() {
  return (
    <>
      <div className="pt-28 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-black text-[#A71728] mb-6">Learn Japanese in Bangladesh</h1>
          <p className="text-neutral-700">Course details will be updated by the content team.</p>
        </div>
      </div>
      
      {/* Original 15-day Basic Japanese Offer Portion */}
      <div className="border-t border-neutral-200">
        <CoursesPage />
      </div>
    </>
  );
}
