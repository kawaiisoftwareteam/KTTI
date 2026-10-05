import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Residential Japanese Language Course Dhaka | KTTI",
  description: "Stay and study Japanese with full concentration at our residential facility in Dhaka.",
};

export default function ResidentialFacilityPage() {
  return <LocalizedPageIntro page="residential" />;
}
