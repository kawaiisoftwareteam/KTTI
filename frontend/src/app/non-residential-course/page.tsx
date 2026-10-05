import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Non-Residential Japanese Language Course Dhaka | KTTI",
  description: "Join our regular non-residential Japanese language classes in Dhaka.",
};

export default function NonResidentialCoursePage() {
  return <LocalizedPageIntro page="nonResidential" />;
}
