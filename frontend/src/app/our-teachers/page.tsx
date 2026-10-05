import type { Metadata } from "next";
import LocalizedPageIntro from "@/components/LocalizedPageIntro";

export const metadata: Metadata = {
  title: "Japanese Language Teachers Dhaka | KTTI",
  description: "Meet our native-level and experienced Japanese language teachers at KTTI Dhaka.",
};

export default function OurTeachersPage() {
  return <LocalizedPageIntro page="teachers" />;
}
