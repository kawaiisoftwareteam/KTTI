import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Japanese Language Course Admission Dhaka | KTTI",
  description: "Apply for admission to KTTI's Japanese language and SSW visa training courses in Dhaka.",
};

export default function AdmissionPage() {
  return <LocalizedPageIntro page="admission" tone="warm" />;
}
