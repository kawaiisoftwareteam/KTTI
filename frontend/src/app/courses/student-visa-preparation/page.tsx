import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Japan Student Visa From Bangladesh | KTTI",
  description: "Get complete guidance for your Japan student visa application from Bangladesh.",
};

export default function StudentVisaPrepPage() {
  return <LocalizedPageIntro page="studentVisa" />;
}
