import type { Metadata } from "next";
import SswPreparationCourseContent from "@/components/SswPreparationCourseContent";

export const metadata: Metadata = {
  title: "SSW Visa Training in Bangladesh | JFT Basic | KTTI Dhaka",
  description: "SSW visa training in Dhaka: Japanese, JFT Basic, skill test prep, interview practice and pre-departure orientation. Residential course, BDT 25,000 per month.",
  keywords: "japan ssw visa bangladesh, ssw visa training bangladesh, ssw visa requirements for bangladeshi, specified skilled worker japan bangladesh, jft basic preparation bangladesh, how to get ssw visa from bangladesh, japan job from bangladesh, ssw visa process bangladesh, ssw visa sectors, ssw skill test, ssw visa cost bangladesh",
};

export default function SSWCoursePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "SSW Visa Preparation Course",
        "description": "Japanese, JFT Basic and Skill Test Preparation for the Specified Skilled Worker (SSW) visa in Japan.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "KTTI",
          "sameAs": "https://kttidhaka.com"
        },
        "educationalCredentialAwarded": "SSW Visa Preparation",
        "timeRequired": "P6W"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the SSW visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The SSW (Specified Skilled Worker) visa is a Japanese work visa for sectors that need more workers. It lets foreign workers with the right skills and Japanese ability work legally in Japan."
            }
          },
          {
            "@type": "Question",
            "name": "How can I get an SSW visa from Bangladesh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose an approved sector, learn Japanese and pass JFT Basic or JLPT N4, pass the skill test, join an employer interview, sign the contract, complete the Bangladesh government steps and apply for the visa. KTTI trains you for the language, the skills and the interview."
            }
          },
          {
            "@type": "Question",
            "name": "What are the SSW visa requirements for Bangladeshi candidates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You must be 18 or older, pass JFT Basic or JLPT N4, pass the skill test for your sector, pass a medical check, have a Japanese employer, and follow Bangladesh government rules. Requirements can change, so confirm them with KTTI."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kttidhaka.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Courses",
            "item": "https://kttidhaka.com/courses"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "SSW Preparation Course",
            "item": "https://kttidhaka.com/courses/ssw-preparation-course"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SswPreparationCourseContent />
    </>
  );
}
