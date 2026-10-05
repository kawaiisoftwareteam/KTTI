import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "KTTI Reviews & Success Stories",
  description: "Read success stories and reviews from KTTI students who successfully moved to Japan.",
};

export default function SuccessStoriesPage() {
  return <LocalizedPageIntro page="success" tone="warm" />;
}
