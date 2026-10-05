import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "SSW Visa Training Bangladesh | KTTI",
  description: "Get comprehensive SSW Visa training at KTTI to work as a Specified Skilled Worker in Japan.",
};

export default function SSWCoursePage() {
  return <LocalizedPageIntro page="ssw" />;
}
