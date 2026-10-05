"use client";

import React from "react";
import CourseCard from "@/components/CourseCard";
import { BookOpen, GraduationCap, Briefcase, MessagesSquare, FileCheck, MonitorPlay } from "lucide-react";

export default function CoursesHub() {
  const courses = [
    {
      title: "Japanese Language Course",
      description: "Learn Japanese from scratch with native-level instructors. Perfect for beginners planning to study or work in Japan.",
      href: "/courses/japanese-language-course",
      tag: "Language",
      imageIcon: <BookOpen className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop" // Japan aesthetic
    },
    {
      title: "SSW Preparation Course",
      description: "Comprehensive training for the Specified Skilled Worker (SSW) visa program. Learn industry-specific vocabulary and skills.",
      href: "/courses/ssw-preparation-course",
      tag: "Visa & Training",
      imageIcon: <Briefcase className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" // Engineering/Workshop
    },
    {
      title: "Interview Preparation",
      description: "Get ready for your visa or job interview with our specialized training led by our Japan office experts.",
      href: "/courses/interview-preparation",
      tag: "Preparation",
      imageIcon: <MessagesSquare className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" // Interview/Office
    },
    {
      title: "Student Visa Preparation",
      description: "Complete guidance for Student Visa applications, documentation, and university selection in Japan.",
      href: "/courses/student-visa-preparation",
      tag: "Visa & Training",
      imageIcon: <GraduationCap className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" // Students
    },
    {
      title: "Weekly Mock Test",
      description: "Test your JLPT and NAT preparation with our weekly mock tests designed to simulate real exam conditions.",
      href: "/courses/weekly-mock-test",
      tag: "Assessment",
      imageIcon: <FileCheck className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" // Test/Writing
    },
    {
      title: "Online Mock Interview",
      description: "Practice your interview skills directly with native speakers from the Kawaii Group Japan office.",
      href: "/courses/online-mock-interview",
      tag: "Assessment",
      imageIcon: <MonitorPlay className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" // Online meeting
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#FAF7F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 tracking-tight">
            Our Courses & Preparation Programs
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            KTTI offers comprehensive training for language proficiency and visa preparation. Whether you are aiming for higher education or professional work in Japan, we have the right path for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
