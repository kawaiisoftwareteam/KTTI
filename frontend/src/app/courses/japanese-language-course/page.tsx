import type { Metadata } from "next";
import JapaneseLanguageCourseContent from "@/components/JapaneseLanguageCourseContent";

export const metadata: Metadata = {
  title: "Japanese Language Course in Dhaka | N5, N4, JFT | KTTI",
  description: "Japanese language course in Dhaka for JLPT N5, N4, N3 and JFT Basic (A1-A2). Bangladeshi and Japanese teachers, weekly mock tests, online and residential.",
  keywords: "japanese language course in dhaka, japanese language course in bangladesh, learn japanese in bangladesh, jlpt n5 course bangladesh, jlpt n4 preparation bangladesh, jft basic preparation bangladesh, japanese language course fee in dhaka, online japanese language course bangladesh, how to learn japanese",
  alternates: { canonical: "https://sswv.org/courses/japanese-language-course" },
  openGraph: {
    title: "Japanese Language Course in Dhaka | N5, N4, JFT | KTTI",
    description: "Japanese language course in Dhaka for JLPT N5, N4, N3 and JFT Basic (A1-A2). Bangladeshi and Japanese teachers, weekly mock tests, online and residential.",
    url: "https://sswv.org/courses/japanese-language-course",
    type: "website",
    siteName: "Kawaii Training Institute",
  },
};

export default function JapaneseLanguageCoursePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Japanese Language Course (JLPT N5, N4, N3 and JFT Basic)",
    "description": "Japanese language course in Dhaka for student visa and SSW visa candidates.",
    "provider": {
      "@type": "EducationalOrganization", 
      "name": "KTTI (Kawaii Training Institute)",
      "url": "https://sswv.org", 
      "parentOrganization": {"@type": "Organization", "name": "Kawaii Group"}
    },
    "inLanguage": "en",
    "teaches": "Japanese language",
    "hasCourseInstance": [
      {"@type": "CourseInstance", "name": "Residential", "courseMode": "onsite",
       "offers": {"@type": "Offer", "price": "25000", "priceCurrency": "BDT"}},
      {"@type": "CourseInstance", "name": "Non-residential", "courseMode": "onsite",
       "offers": {"@type": "Offer", "price": "8000", "priceCurrency": "BDT"}},
      {"@type": "CourseInstance", "name": "Online", "courseMode": "online",
       "offers": {"@type": "Offer", "price": "2000", "priceCurrency": "BDT"}}
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best Japanese language course in Dhaka for going to Japan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best course is the one that matches your visa. For a student visa, start with JLPT N5. For the SSW visa, aim for JFT Basic or JLPT N4. KTTI offers all of these, with weekly mock tests, Japan-office mock interviews and visa-wise training."
        }
      },
      {
        "@type": "Question",
        "name": "Which Japanese level do I need for a Japan student visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many Japanese language schools ask for around 150 hours of Japanese study or a basic level like JLPT N5. Requirements differ by school, so confirm with your school. KTTI's team will help you check."
        }
      },
      {
        "@type": "Question",
        "name": "Which Japanese level do I need for the SSW visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually JFT Basic or JLPT N4, plus a skills test for your sector. Rules can change, so confirm the latest rules with KTTI before you apply."
        }
      },
      {
        "@type": "Question",
        "name": "What are JFT A1 and A2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A1 and A2 are the first two steps of the Japan Foundation's language scale. A1 is the beginner step. A2 is the level checked by the JFT Basic test, which is accepted for the SSW visa."
        }
      },
      {
        "@type": "Question",
        "name": "JLPT N4 or JFT Basic: which one is better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both are accepted for SSW. JLPT is a classic exam held usually twice a year. JFT Basic is computer-based with more test dates. KTTI teaches both, so you can choose by your timeline."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to learn Japanese for Japan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a common estimate, around 150 hours for N5 level, 300 hours for N4 and 450 hours for N3. Full-time residential learners usually progress faster."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Japanese language course fee in Dhaka at KTTI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Residential is BDT 25,000 per month, non-residential is BDT 8,000 per month and the online course is BDT 2,000 per month. Contact KTTI to confirm current fees and the next batch date."
        }
      },
      {
        "@type": "Question",
        "name": "Can I learn Japanese online in Bangladesh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. KTTI's online Japanese language course has live interactive classes at night and recorded classes you can watch any time."
        }
      },
      {
        "@type": "Question",
        "name": "I work or study during the day. Can I join?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. KTTI runs evening classes for working people and students, and weekend batches in the non-residential course."
        }
      },
      {
        "@type": "Question",
        "name": "Does KTTI have a residential facility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Learners from other districts can stay at KTTI with meals arranged, and study in the residential course."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to know Japanese before I join?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can start from zero at N5 or A1 level."
        }
      },
      {
        "@type": "Question",
        "name": "Should I choose a Bangladeshi teacher or a Japanese teacher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can choose either, or both. Bangladeshi teachers explain in Bangla, and Japanese teachers train your listening and speaking."
        }
      },
      {
        "@type": "Question",
        "name": "Does KTTI guarantee a visa or a job in Japan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. KTTI provides training, mock tests and mock interviews. Visa and job decisions are made by the authorities and employers."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sswv.org/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://sswv.org/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Japanese Language Course",
        "item": "https://sswv.org/courses/japanese-language-course"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <JapaneseLanguageCourseContent />
    </>
  );
}
