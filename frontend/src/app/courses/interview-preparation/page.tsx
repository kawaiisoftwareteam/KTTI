import type { Metadata } from "next";
import InterviewPreparationCourseContent from "@/components/InterviewPreparationCourseContent";

export const metadata: Metadata = {
  title: "Japan Interview Preparation in Dhaka | SSW & Student | KTTI",
  description: "Japan interview preparation in Dhaka for SSW workers and students. 2 to 3 week course with common questions, manners and a Japan-office mock interview.",
  keywords: "japan interview preparation bangladesh, japan visa interview preparation, ssw interview questions, japan job interview questions for bangladeshi, japan student visa interview questions, how to pass japan interview, japanese self introduction for interview, japan interview course dhaka, online interview japan company, japan interview manners",
};

export default function InterviewPreparationCoursePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Japan Interview Preparation Course",
        "description": "Japan interview preparation in Dhaka for SSW workers and students. 2 to 3 week course with common questions, manners and a Japan-office mock interview.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "KTTI",
          "sameAs": "https://kttidhaka.com"
        },
        "educationalCredentialAwarded": "Japan Interview Preparation",
        "timeRequired": "P2W"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Japan interview preparation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It is training that prepares you for an interview with a Japanese employer or school. You practise self-introduction, common questions, manners and answers in Japanese, then do a mock interview."
            }
          },
          {
            "@type": "Question",
            "name": "How do I prepare for a Japan job interview from Bangladesh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Write and learn your self-introduction, prepare your reasons for going to Japan, practise common questions out loud, learn Japanese interview manners and do mock interviews. KTTI's course covers all of these."
            }
          },
          {
            "@type": "Question",
            "name": "What questions are asked in an SSW interview?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common questions are: introduce yourself, why Japan, why this company, your past work and skills, your health and ability for the job, and how long you plan to stay. Questions change by employer and sector."
            }
          },
          {
            "@type": "Question",
            "name": "How long is KTTI's interview preparation course?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The course takes 2 to 3 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Japan interview preparation cost at KTTI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The course fee is BDT 5,000 (one-time). Contact KTTI to confirm the current fee."
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
            "name": "Interview Preparation",
            "item": "https://kttidhaka.com/courses/interview-preparation"
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
      <InterviewPreparationCourseContent />
    </>
  );
}
