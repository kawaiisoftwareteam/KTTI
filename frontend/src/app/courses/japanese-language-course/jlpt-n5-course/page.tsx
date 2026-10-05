import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "JLPT N5 Course Bangladesh | KTTI",
  description: "Prepare for JLPT N5 with Kawaii Training Institute in Dhaka, Bangladesh.",
};

export default function JLPTN5CoursePage() {
  return <LocalizedPageIntro page="n5" />;
}
