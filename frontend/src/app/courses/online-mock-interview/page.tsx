import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Japan Mock Interview Bangladesh | KTTI",
  description: "Prepare with online mock interviews directly conducted by the Kawaii Group Japan office.",
};

export default function OnlineMockInterviewPage() {
  return <LocalizedPageIntro page="onlineMock" />;
}
