"use client";

import React, { useState } from "react";
import CourseCard from "@/components/CourseCard";
import { BookOpen, GraduationCap, Briefcase, MessagesSquare, FileCheck, MonitorPlay, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoursesHub() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const courses = [
    {
      title: "Japanese Language Course",
      description: "Learn Japanese in Bangladesh with Bangladeshi and Japanese teachers. Classes run from beginner level to JLPT N3 and JFT Basic, with a weekly mock test and Japanese culture lessons.",
      href: "/courses/japanese-language-course",
      tag: "Language",
      quickFacts: "Residential, non-residential or online. From BDT 2,000 per month.",
      imageIcon: <BookOpen className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "JLPT N5 Course",
      description: "Start from zero. Learn hiragana, katakana, basic kanji and grammar, and get ready for the JLPT N5 exam. N5 is a strong first step for the Japan student visa.",
      href: "/courses/jlpt-n5-course",
      tag: "Language",
      quickFacts: "Beginner level. No Japanese needed.",
      imageIcon: <BookOpen className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "JLPT N4 Course",
      description: "Move up to JLPT N4, which is accepted for the SSW visa. Includes NAT test practice and guidance on JFT Basic.",
      href: "/courses/jlpt-n4-course",
      tag: "Language",
      quickFacts: "For learners who have finished N5 level.",
      imageIcon: <BookOpen className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1613139474534-11005fb86259?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "SSW Preparation Course",
      description: "Get ready for the Japan SSW visa. Japanese language, JFT Basic, skill test practice, interview training and pre-departure orientation, all in one course.",
      href: "/courses/ssw-preparation-course",
      tag: "Visa & Training",
      quickFacts: "Residential, BDT 25,000 per month. New batch every 6 to 8 weeks. Free SSW guide (PDF).",
      imageIcon: <Briefcase className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Interview Preparation",
      description: "A short course for candidates who have passed their language test. Practise common questions, answers in Japanese and interview manners before the real day.",
      href: "/courses/interview-preparation",
      tag: "Preparation",
      quickFacts: "2 to 3 weeks. 15 learners per batch. BDT 5,000.",
      imageIcon: <MessagesSquare className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Student Visa Preparation",
      description: "Prepare for a Japan student visa from Bangladesh. We train your Japanese, documents knowledge, interview and part-time job skills for studying in Japan.",
      href: "/courses/student-visa-preparation",
      tag: "Visa & Training",
      quickFacts: "Language, interview and part-time job training. Free student visa guide (PDF).",
      imageIcon: <GraduationCap className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Weekly Mock Test",
      description: "A JLPT and JFT-style test every week. You see your real level, find weak points early and feel confident on exam day.",
      href: "/courses/weekly-mock-test",
      tag: "Assessment",
      quickFacts: "Part of KTTI language courses.",
      imageIcon: <FileCheck className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Online Mock Interview",
      description: "Practise a Japan interview online with Japanese interviewers from the Kawaii Group Japan office. Real practice before your real interview.",
      href: "/courses/online-mock-interview",
      tag: "Assessment",
      quickFacts: "Online. For student visa and SSW candidates.",
      imageIcon: <MonitorPlay className="w-10 h-10 stroke-[1.5]" />,
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const faqs = [
    { q: "What courses does KTTI offer?", a: "KTTI offers a Japanese language course, JLPT N5 and N4 courses, SSW preparation, Student Visa preparation, interview preparation, weekly mock tests and online mock interviews." },
    { q: "Which Japanese course is best for going to Japan?", a: "Start with the Japanese language course at your level. Beginners start with JLPT N5. Then take SSW preparation for work or Student Visa preparation for study." },
    { q: "How much does a Japanese language course cost at KTTI?", a: "Residential is BDT 25,000 per month, non-residential is BDT 8,000 per month and online is BDT 2,000 per month. Contact KTTI to confirm current fees." },
    { q: "Can I join KTTI if I live outside Dhaka?", a: "Yes. Choose the residential course and stay at KTTI, or learn online from home." }
  ];

  return (
    <div className="pt-28 pb-16 bg-[#FAF7F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header Section */}
        <div className="text-center space-y-6">
          <p className="text-sm font-bold tracking-widest text-[#A71728] uppercase">Last updated: October 2026</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight uppercase leading-[1.1]">
            Japanese Language and <br className="hidden md:block" />
            <span className="text-[#A71728]">Visa Training Courses</span> in Bangladesh
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            KTTI (Kawaii Training Institute) in Dhaka offers Japanese language courses, SSW visa preparation, Student Visa preparation, interview preparation, weekly mock tests and online mock interviews. Learn Japanese first, then train for your visa. Study as a residential, non-residential or online learner. Fees start from BDT 2,000 per month.
          </p>
        </div>

        {/* How to Go to Japan */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-100">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase mb-8 text-center">How to Go to Japan from Bangladesh</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: 1, t: "Learn Japanese. Without it, you cannot go to Japan." },
              { n: 2, t: "Choose your visa: student visa or SSW visa." },
              { n: 3, t: "Train for your visa with weekly mock tests." },
              { n: 4, t: "Practise your interview with our Japan office." }
            ].map(step => (
              <div key={step.n} className="flex flex-col items-center text-center space-y-4 p-6 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-[#A71728]/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#A71728] text-white flex items-center justify-center font-black text-xl shadow-lg">
                  {step.n}
                </div>
                <p className="text-neutral-700 font-medium leading-relaxed">{step.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section with Grouping for N4/N5 */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 uppercase">Our Courses</h2>
            <p className="text-neutral-600">Click a course to see the full details, fees and how to join.</p>
          </div>

          <div className="space-y-16">
            {/* Japanese Language Course Group */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl border-t-[6px] border-[#A71728] shadow-sm space-y-8">
              <h3 className="text-2xl font-black text-neutral-900 uppercase border-b border-neutral-100 pb-4">Japanese Language Courses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {courses.slice(0, 3).map((course, idx) => (
                  <CourseCard key={idx} {...course} />
                ))}
              </div>
            </div>

            {/* Other Courses Group */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl border-t-[6px] border-neutral-900 shadow-sm space-y-8">
              <h3 className="text-2xl font-black text-neutral-900 uppercase border-b border-neutral-100 pb-4">Visa Preparation & Assessments</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {courses.slice(3).map((course, idx) => (
                  <CourseCard key={idx} {...course} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Which Course is Right For You */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-100">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase mb-8">Which Course Is Right for You?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 text-neutral-900">
                  <th className="p-4 font-bold border-b border-neutral-200 rounded-tl-xl">If you are...</th>
                  <th className="p-4 font-bold border-b border-neutral-200 rounded-tr-xl">Start with</th>
                </tr>
              </thead>
              <tbody className="text-neutral-600">
                {[
                  { state: "A complete beginner", course: "JLPT N5 Course" },
                  { state: "Done with N5", course: "JLPT N4 Course" },
                  { state: "Planning to work in Japan", course: "SSW Preparation Course" },
                  { state: "Planning to study in Japan", course: "Student Visa Preparation" },
                  { state: "Passed your language test, facing the interview", course: "Interview Preparation and Online Mock Interview" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors">
                    <td className="p-4 font-medium">{row.state}</td>
                    <td className="p-4 text-[#A71728] font-bold">{row.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Course Modes and Fees */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-100">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 uppercase mb-8">Course Modes and Fees</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#A71728] text-white">
                  <th className="p-4 font-bold rounded-tl-xl whitespace-nowrap">Mode</th>
                  <th className="p-4 font-bold whitespace-nowrap">Fee</th>
                  <th className="p-4 font-bold rounded-tr-xl">Best for</th>
                </tr>
              </thead>
              <tbody className="text-neutral-700 bg-neutral-50">
                {[
                  { mode: "Residential", fee: "BDT 25,000 / month", best: "Learners from outside Dhaka. Stay and meals at KTTI." },
                  { mode: "Non-residential", fee: "BDT 8,000 / month", best: "Learners in or near Dhaka." },
                  { mode: "Online", fee: "BDT 2,000 / month", best: "Learners who cannot travel." }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-200 hover:bg-white transition-colors">
                    <td className="p-4 font-bold text-neutral-900 whitespace-nowrap">{row.mode}</td>
                    <td className="p-4 font-medium text-[#A71728] whitespace-nowrap">{row.fee}</td>
                    <td className="p-4">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-neutral-500 italic bg-neutral-50 p-4 rounded-xl border border-neutral-100">
            Interview Preparation costs BDT 5,000. Contact KTTI for the latest fees and the next batch date.
          </p>
        </div>

        {/* Why Learners Choose KTTI */}
        <div className="bg-[#A71728] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase mb-8">Why Learners Choose KTTI</h2>
          <ul className="space-y-4">
            {[
              "Mock interviews run by our Japan office, with Japanese interviewers",
              "A weekly mock test for every learner",
              "Bangladeshi and Japanese teachers, your choice",
              "Visa-wise training for SSW and student visa",
              "Japanese culture taught in class"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-lg text-white/90">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8 max-w-3xl mx-auto pb-10">
          <h2 className="text-3xl font-black text-neutral-900 uppercase text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100' 
                      : 'bg-white/50 hover:bg-white border border-transparent'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-[#A71728]' : 'text-neutral-900'}`}>
                      {faq.q}
                    </span>
                    <div className={`shrink-0 w-10 h-10 !rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#A71728]/10 text-[#A71728] rotate-180' : 'bg-white text-neutral-600 shadow-sm border border-neutral-200/50'
                    }`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 text-neutral-600 leading-relaxed pt-0">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
