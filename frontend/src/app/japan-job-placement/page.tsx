import type { Metadata } from "next";
import CareersIndexPage from "@/components/CareersIndexPage";

export const metadata: Metadata = {
  title: "Japan Job From Bangladesh | KTTI",
  description: "Discover Japan job placement opportunities and career paths for candidates from Bangladesh.",
};

export default function JapanJobPlacementPage() {
  return (
    <>
      <div className="pt-28 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-black text-[#A71728] mb-6">Japan Job Placement From Bangladesh</h1>
          <p className="text-neutral-700">Explore the previous career opportunities below.</p>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <CareersIndexPage />
      </div>
    </>
  );
}
