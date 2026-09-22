import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: "Contact | Kawaii Tredmig Training Institute (KTTI)",
  description:
    "Contact KTTI admissions — phone, WhatsApp, email, and campus locations in Gulshan and Aftabnagar, Dhaka.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact | KTTI",
    description:
      "Reach Kawaii Tredmig Training Institute admissions and campuses in Dhaka.",
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
