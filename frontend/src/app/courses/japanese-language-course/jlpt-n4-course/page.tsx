import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "JLPT N4 Preparation Bangladesh | KTTI",
  description: "Prepare for JLPT N4 with Kawaii Training Institute in Dhaka, Bangladesh.",
};

export default function JLPTN4CoursePage() {
  return <LocalizedPageIntro page="n4" />;
}
