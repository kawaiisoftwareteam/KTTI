import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Japanese Mock Test Bangladesh | KTTI",
  description: "Test your Japanese proficiency with KTTI's weekly mock tests in Bangladesh.",
};

export default function WeeklyMockTestPage() {
  return <LocalizedPageIntro page="weeklyMock" />;
}
