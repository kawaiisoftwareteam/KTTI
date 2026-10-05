import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KTTI Reviews & Success Stories",
  description: "Read success stories and reviews from KTTI students who successfully moved to Japan.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#FAF7F5]">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-black text-[#A71728] mb-6">KTTI Success Stories & Reviews</h1>
        <p className="text-neutral-700 mb-8">Stories will be updated by the content team.</p>
      </div>
    </div>
  );
}
