import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Japan Visa Interview Preparation | KTTI",
  description: "Prepare for your Japan student or SSW visa interview with KTTI.",
};

export default function InterviewPrepPage() {
  return <LocalizedPageIntro page="interview" />;
}
