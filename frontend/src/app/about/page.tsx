import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { aboutPageEn } from "@/i18n/aboutPage";

const SITE_URL = "https://sswv.org";

export const metadata: Metadata = {
  title: aboutPageEn.meta.title,
  description: aboutPageEn.meta.description,
  keywords: [
    "KTTI leadership",
    "Kawaii Tredmig Training Institute about us",
    "SSW training institute Dhaka management",
    "Japanese language academy Bangladesh founders",
    "S M Mukhtadir COO Kawaii Group",
    "Kawaii Tredmig board of directors",
    "who owns KTTI",
    "is KTTI a legitimate SSW training center",
    "Kawaii Group Bangladesh",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: aboutPageEn.meta.ogTitle,
    description: aboutPageEn.meta.ogDescription,
    url: `${SITE_URL}/about`,
    type: "website",
    locale: "en_US",
    siteName: "Kawaii Tredmig Training Institute",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Kawaii Tredmig Training Institute",
  alternateName: "KTTI",
  url: SITE_URL,
  logo: `${SITE_URL}/ktti-logo.png`,
  description:
    "Dhaka-based SSW preparation and Japanese language training institute, part of the Kawaii Group, connecting Bangladeshi candidates to dignified careers in Japan.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Taj Caslina, L-2, 25 Gulshan Avenue",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  founder: [
    { "@type": "Person", name: "Biswas Jahangir Alam", jobTitle: "Chairman" },
  ],
  employee: [
    { "@type": "Person", name: "Md Habib Ullah Babul", jobTitle: "Vice Chairman" },
    { "@type": "Person", name: "Quamrul Hasan Joarder", jobTitle: "Vice Chairman" },
    { "@type": "Person", name: "Md. Shafiuddin", jobTitle: "Managing Director" },
    { "@type": "Person", name: "Dewan Samir", jobTitle: "Chief Executive Officer" },
    { "@type": "Person", name: "Tajul Islam", jobTitle: "Overseas Director" },
    { "@type": "Person", name: "S. M. Mukhtadir", jobTitle: "Chief Operating Officer" },
  ],
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://linkedin.com",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aboutPageEn.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AboutRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AboutPage />
    </>
  );
}
