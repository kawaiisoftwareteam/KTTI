import type { Metadata } from "next";
import CareersIndexPage from "@/components/CareersIndexPage";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Japan Job From Bangladesh | KTTI",
  description: "Discover Japan job placement opportunities and career paths for candidates from Bangladesh.",
};

export default function JapanJobPlacementPage() {
  return (
    <>
      <LocalizedPageIntro page="japanJobs" compact />
      <div className="border-t border-neutral-200">
        <CareersIndexPage />
      </div>
    </>
  );
}
