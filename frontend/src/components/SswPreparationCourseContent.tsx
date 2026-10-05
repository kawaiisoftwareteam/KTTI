"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, CheckCircle2, ArrowRight, FileText, Briefcase, GraduationCap, Clock, AlertTriangle, ShieldCheck, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SswPreparationCourseContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const toc = [
    { id: "what-is-ssw", title: "1. What Is the SSW Visa?" },
    { id: "requirements", title: "2. Requirements for Bangladeshis" },
    { id: "japanese-level", title: "3. Japanese Level: JFT or JLPT" },
    { id: "skill-test", title: "4. The Skill Test" },
    { id: "sectors", title: "5. SSW Sectors" },
    { id: "how-to-get", title: "6. Step by Step Guide" },
    { id: "ktti-course", title: "7. KTTI SSW Preparation Course" },
    { id: "ssw-vs-student", title: "8. SSW vs Student Visa" },
    { id: "costs", title: "9. Costs and Fraud Safety" },
    { id: "free-guide", title: "10. Free SSW Visa Guide" },
    { id: "why-trust", title: "11. Why Trust KTTI" },
    { id: "faq", title: "12. FAQ" },
  ];

  const faqs = [
    {
      q: "What is the SSW visa?",
      a: "The SSW (Specified Skilled Worker) visa is a Japanese work visa for sectors that need more workers. It lets foreign workers with the right skills and Japanese ability work legally in Japan."
    },
    {
      q: "How can I get an SSW visa from Bangladesh?",
      a: "Choose an approved sector, learn Japanese and pass JFT Basic or JLPT N4, pass the skill test, join an employer interview, sign the contract, complete the Bangladesh government steps and apply for the visa. KTTI trains you for the language, the skills and the interview."
    },
    {
      q: "What are the SSW visa requirements for Bangladeshi candidates?",
      a: "You must be 18 or older, pass JFT Basic or JLPT N4, pass the skill test for your sector, pass a medical check, have a Japanese employer, and follow Bangladesh government rules. Requirements can change, so confirm them with KTTI."
    },
    {
      q: "Which Japanese level is needed for the SSW visa?",
      a: "Usually JFT Basic (A2 level) or JLPT N4."
    },
    {
      q: "JFT Basic or JLPT N4: which is better for SSW?",
      a: "Both are accepted. JFT Basic is computer-based with more test dates. JLPT N4 is a classic exam held usually twice a year. KTTI teaches both."
    },
    {
      q: "How long does SSW training take?",
      a: "It depends on your starting Japanese level. A common estimate is around 300 hours of study in total for N4. KTTI starts a new residential batch every 6 to 8 weeks."
    },
    {
      q: "How much does SSW training cost at KTTI?",
      a: "The residential course is BDT 25,000 per month. Interview preparation is BDT 5,000. The total depends on how many months you need. Contact KTTI to confirm current fees."
    },
    {
      q: "How much does an SSW visa cost from Bangladesh in total?",
      a: "It depends on your sector, employer and test fees, plus medical, document, visa and travel costs. Follow Bangladesh government rules and ask for clear, written costs. Do not pay anyone who promises a guaranteed visa."
    },
    {
      q: "Which sectors can Bangladeshi candidates apply for?",
      a: "Japan has around 16 SSW sectors. The Bangladesh government decides which are approved for sending workers. KTTI will tell you which sectors are open now."
    },
    {
      q: "Is there an age limit for the SSW visa?",
      a: "The minimum age is 18. Some employers prefer younger candidates, so ask about your sector."
    },
    {
      q: "How long can I stay in Japan on an SSW visa?",
      a: "Under SSW (i), you can stay up to 5 years in total. Family members usually cannot come with you. SSW (ii) has different rules."
    },
    {
      q: "What is the difference between SSW and the technical intern visa?",
      a: "SSW is a work visa for workers with skills and Japanese ability, and you can change employers within your sector under certain rules. The technical intern programme was made for skills training. Rules are changing, so check the latest news with KTTI."
    },
    {
      q: "Can I get a Japan job from Bangladesh without Japanese?",
      a: "No. Japanese ability is required. That is why KTTI starts every SSW candidate with language training."
    },
    {
      q: "Can I prepare for SSW while I work or study?",
      a: "Yes. KTTI has evening classes, weekend batches and online classes."
    },
    {
      q: "Does KTTI guarantee a visa or a job in Japan?",
      a: "No. KTTI provides training, mock tests and mock interviews. Visa and job decisions are made by the authorities and employers."
    }
  ];

  return (
    <div className="bg-[#FAF7F5] min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white pt-40 pb-28 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2000&auto=format&fit=crop" 
            alt="Japan Work Visa Preparation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.1] drop-shadow-xl">
              SSW Visa Training <span className="text-white/90 block mt-2">in Bangladesh</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed max-w-3xl drop-shadow-md mx-auto lg:mx-0">
              Japanese, JFT Basic and Skill Test Preparation for a Successful Career in Japan.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 text-sm font-medium border-t border-white/30 pt-8 mt-12">
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">Duration</span>
              <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full">Based on level</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">Fee</span>
              <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full">BDT 25,000 / month</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">Next Batch</span>
              <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full">Every 6-8 weeks</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Sidebar - Table of Contents */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 shrink-0 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100">
              <h3 className="font-black text-neutral-900 uppercase tracking-wider mb-6 pb-4 border-b border-neutral-100">Contents</h3>
              <nav className="space-y-3">
                {toc.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className="block text-sm font-bold text-neutral-600 hover:text-[#A71728] transition-colors leading-relaxed"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-8 bg-[#A71728]/5 rounded-3xl p-6 sm:p-8 border border-[#A71728]/10 text-center">
              <h4 className="font-black text-neutral-900 uppercase mb-3">Ready to Start?</h4>
              <p className="text-sm text-neutral-600 mb-6">Join our next batch and prepare for your SSW visa.</p>
              <Link href="/admission" className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#A71728] text-white !rounded-full font-bold uppercase tracking-wider hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl">
                Apply Now
              </Link>
            </div>
          </aside>

          {/* Right Main Content */}
          <article className="w-full lg:w-3/4 space-y-20 order-1 lg:order-2">
            
            {/* Intro text */}
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
              <p className="text-xl leading-relaxed">
                The SSW (Specified Skilled Worker) visa is a Japanese work visa. It lets foreign workers work in sectors where Japan needs more people. KTTI&apos;s SSW preparation course in Dhaka teaches SSW Japanese, JFT Basic and JLPT, and trains you for the skill test, the interview and life in Japan. The residential course costs BDT 25,000 per month, and a new batch starts every 6 to 8 weeks.
              </p>
            </div>

            {/* 1. What Is the SSW Visa? */}
            <section id="what-is-ssw" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">1. What Is the SSW Visa?</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
                <p>
                  SSW stands for Specified Skilled Worker. Japan created this visa to fill the labour shortage in sectors such as nursing care, construction, agriculture, food manufacturing and food service. It is a legal way to work in Japan.
                </p>
                <p>There are two types:</p>
                <ul>
                  <li><strong>SSW (i):</strong> for workers with basic skills. You can stay in Japan for up to 5 years in total. Family members usually cannot come with you. Most Bangladeshi candidates start here.</li>
                  <li><strong>SSW (ii):</strong> for workers with advanced skills in some sectors. It has different rules and is not the first step for new candidates.</li>
                </ul>
                <p>
                  By law, an SSW worker must get pay equal to or higher than a Japanese worker doing the same job. The exact salary depends on the employer, the sector and the area.
                </p>
              </div>
            </section>

            {/* 2. Requirements */}
            <section id="requirements" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">2. SSW Visa Requirements for Bangladeshi Candidates</h2>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#A71728] text-white">
                      <th className="p-5 font-bold whitespace-nowrap">Requirement</th>
                      <th className="p-5 font-bold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Age</td>
                      <td className="p-5">18 years or older</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Japanese language</td>
                      <td className="p-5">JFT Basic or JLPT N4, usually</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Skills</td>
                      <td className="p-5">Pass the skill test for your sector (some people who finished Technical Intern Training No. 2 may be exempt)</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Health</td>
                      <td className="p-5">Pass the medical check</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Employer</td>
                      <td className="p-5">A Japanese employer who signs a contract with you</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Documents</td>
                      <td className="p-5">Valid passport and other documents for your case</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Bangladesh government steps</td>
                      <td className="p-5">Follow the government process for overseas work, such as BMET registration and emigration clearance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Japanese Level */}
            <section id="japanese-level" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">3. Japanese Level for SSW: JFT Basic or JLPT N4</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Japanese is not optional. Every SSW candidate must show basic Japanese. There are two accepted tests.
              </p>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-900">
                      <th className="p-5 font-bold"></th>
                      <th className="p-5 font-black text-[#A71728] text-lg uppercase">JFT Basic</th>
                      <th className="p-5 font-black text-neutral-900 text-lg uppercase">JLPT N4</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Level</td>
                      <td className="p-5">A2 (everyday Japanese)</td>
                      <td className="p-5">N4 (basic Japanese)</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Format</td>
                      <td className="p-5">Computer-based, several test dates a year</td>
                      <td className="p-5">Paper exam, usually twice a year (July and December)</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Pass mark</td>
                      <td className="p-5">Usually 200 out of 250 points</td>
                      <td className="p-5">Set by JLPT for each test</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">What it tests</td>
                      <td className="p-5">Script and vocabulary, conversation and expression, listening, reading (about 1 hour)</td>
                      <td className="p-5">Vocabulary and kanji, grammar and reading, listening (about 2 hours)</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Best for</td>
                      <td className="p-5">Job seekers who want a quicker test date</td>
                      <td className="p-5">Learners who prefer a classic exam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                KTTI teaches both. Beginners start at N5 or A1 level and move up. Read more on our <Link href="/japanese-language-course" className="text-[#A71728] font-bold underline">Japanese Language Course page</Link>.
              </p>
            </section>

            {/* 4. Skill Test */}
            <section id="skill-test" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">4. The Skill Test</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
                <p>
                  Besides Japanese, you must pass a skill test for the sector you choose. The test checks that you can do the basic work of that sector, for example how to work safely, use tools and follow workplace rules. Test content, place and dates are different for each sector.
                </p>
                <p>
                  KTTI&apos;s residential course includes skill test preparation and skill training, together with SSW Japanese. This way you learn the work words in Japanese at the same time as the work itself.
                </p>
              </div>
            </section>

            {/* 5. SSW Sectors */}
            <section id="sectors" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">5. SSW Sectors</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
                <p>
                  Japan allows SSW workers in around 16 sectors, such as nursing care, building cleaning, construction, shipbuilding, automobile maintenance, aviation, accommodation, agriculture, fishery, food and beverage manufacturing and food service.
                </p>
                <p>
                  Not every sector is open for Bangladeshi candidates at all times. The Bangladesh government decides which sectors are approved for sending workers to Japan. KTTI trains candidates for the approved sectors, and our team will tell you which ones are open now.
                </p>
              </div>
            </section>

            {/* 6. Step by step */}
            <section id="how-to-get" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">6. How to Get an SSW Visa from Bangladesh: Step by Step</h2>
              <div className="space-y-4">
                {[
                  "Choose your sector from the approved list.",
                  "Learn Japanese and pass JFT Basic or JLPT N4.",
                  "Pass the skill test for your sector.",
                  "Find a Japanese employer. Kawaii Group has offices in Bangladesh and Japan and works with employers in Japan.",
                  "Join the employer interview. Practise first with our interview preparation and a mock interview.",
                  "Sign the contract. Your employer applies for your Certificate of Eligibility (COE) in Japan.",
                  "Complete the Bangladesh government steps (for example BMET registration and emigration clearance) and the medical check.",
                  "Apply for the visa with your COE, join pre-departure orientation, and fly to Japan."
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#A71728] text-white font-black flex items-center justify-center text-sm shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-neutral-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. KTTI Course */}
            <section id="ktti-course" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">7. KTTI SSW Preparation Course</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                The SSW preparation course is KTTI&apos;s main residential programme. It is made for candidates who want to work in Japan and need language, skills and interview training in one place.
              </p>

              <h3 className="text-2xl font-black text-neutral-900 uppercase mb-4">What You Learn</h3>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100 mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-900">
                      <th className="p-5 font-bold border-b border-neutral-100">Training area</th>
                      <th className="p-5 font-bold border-b border-neutral-100">What we do</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">SSW Japanese</td>
                      <td className="p-5">Work and daily-life Japanese for your sector</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">JFT Basic preparation</td>
                      <td className="p-5">A1 to A2 training with JFT-style practice tests</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">JLPT preparation</td>
                      <td className="p-5">N5 to N3 classes, with N4 as the usual SSW target</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Skill test preparation</td>
                      <td className="p-5">Practice for the skill test and basic skill training</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Weekly mock test</td>
                      <td className="p-5">A test every week to track your progress</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Interview preparation</td>
                      <td className="p-5">Short course for candidates who passed the language test (2 to 3 weeks, 15 per batch, BDT 5,000)</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Mock interview with our Japan office</td>
                      <td className="p-5">Online practice with Japanese interviewers from Kawaii Group Japan</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Pre-departure orientation</td>
                      <td className="p-5">Japanese culture, workplace manners and daily-life tips before you fly</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-black text-neutral-900 uppercase mb-4">Residential Course Details</h3>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#A71728] text-white">
                      <th className="p-5 font-bold">Item</th>
                      <th className="p-5 font-bold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Mode</td>
                      <td className="p-5">Residential. Stay at KTTI with meals arranged.</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Class time</td>
                      <td className="p-5">Morning batches</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Batch size</td>
                      <td className="p-5">30 learners per batch</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">New batches</td>
                      <td className="p-5">A new batch every 6 to 8 weeks</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Fee</td>
                      <td className="p-5 font-bold text-[#A71728]">BDT 25,000 per month</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Teachers</td>
                      <td className="p-5">Bangladeshi and Japanese teachers. You can choose, or learn from both.</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Extra</td>
                      <td className="p-5">Weekly mock test, Japanese culture lessons, Japan-office mock interview</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm italic text-neutral-500 mb-8 px-4">
                Fee and batch dates are confirmed by the KTTI admission team. Please ask what the residential fee includes.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-neutral-50 p-6 rounded-3xl border border-neutral-100">
                  <h4 className="text-xl font-bold text-neutral-900 uppercase mb-4">Other Ways to Prepare</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#A71728] shrink-0 mt-2"></div>
                      <span className="text-neutral-700"><strong>Non-residential:</strong> JLPT N5 to N3 and JFT A1 to A2 classes in the morning or midday, plus evening and weekend batches.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#A71728] shrink-0 mt-2"></div>
                      <span className="text-neutral-700"><strong>Afternoon exam preparation:</strong> JLPT and JFT Basic preparation for learners close to their exam.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#A71728] shrink-0 mt-2"></div>
                      <span className="text-neutral-700"><strong>Evening classes</strong> for people who work or study during the day.</span>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#A71728] shrink-0 mt-2"></div>
                      <span className="text-neutral-700"><strong>Online:</strong> live night classes and recorded classes.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#A71728]/5 rounded-bl-full -mr-4 -mt-4"></div>
                  <h4 className="text-xl font-bold text-neutral-900 uppercase mb-4 relative z-10">How Long Does SSW Training Take?</h4>
                  <p className="text-neutral-700 leading-relaxed mb-4 relative z-10">
                    It depends on your Japanese level when you start. As a common estimate, learners need around 150 hours of study to reach N5 or A2 start level and around 300 hours in total for N4. 
                  </p>
                  <p className="text-neutral-700 leading-relaxed relative z-10">
                    Beginners need longer than learners who already know some Japanese. KTTI starts a new residential batch every 6 to 8 weeks, and your teacher will tell you a realistic plan after your first mock tests.
                  </p>
                </div>
              </div>

              <div className="bg-[#A71728] text-white rounded-3xl p-8 shadow-xl">
                <h4 className="text-xl font-bold uppercase mb-4">Why the Japan-Office Mock Interview Matters</h4>
                <p className="text-white/90 leading-relaxed">
                  Many candidates pass JFT Basic or JLPT but freeze in the real interview. Our mock interviews are run online by Japanese interviewers from the Kawaii Group Japan office. You face natural Japanese speed, real questions and honest feedback before the real day. This is rare among Bangladeshi training institutes.
                </p>
              </div>
            </section>

            {/* 8. SSW vs Student */}
            <section id="ssw-vs-student" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">8. SSW Visa vs Student Visa</h2>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-900">
                      <th className="p-5 font-bold"></th>
                      <th className="p-5 font-black text-neutral-900 text-lg uppercase">SSW Visa</th>
                      <th className="p-5 font-black text-neutral-900 text-lg uppercase">Student Visa</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Main purpose</td>
                      <td className="p-5">Work in Japan</td>
                      <td className="p-5">Study in Japan</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Japanese needed</td>
                      <td className="p-5">JFT Basic or JLPT N4, usually</td>
                      <td className="p-5">Basic Japanese, depends on school (often around N5 or 150 hours)</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Skill test</td>
                      <td className="p-5">Yes, for your sector</td>
                      <td className="p-5">No</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Work rights</td>
                      <td className="p-5">Full-time work in your sector</td>
                      <td className="p-5">Part-time work with permission</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Stay</td>
                      <td className="p-5">Up to 5 years in total (SSW i)</td>
                      <td className="p-5">Depends on school and course</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">KTTI course</td>
                      <td className="p-5 font-bold text-[#A71728]">SSW Preparation Course</td>
                      <td className="p-5 font-bold text-[#A71728]">Student Visa Preparation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. Costs and Fraud */}
            <section id="costs" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">9. Costs and How to Stay Safe from Fraud</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed mb-6">
                <p>Your total cost has several parts:</p>
                <ul>
                  <li><strong>KTTI training fee:</strong> BDT 25,000 per month for the residential course. Interview preparation is BDT 5,000.</li>
                  <li>Test fees for JFT Basic or JLPT and for the skill test.</li>
                  <li>Medical check, passport and document costs.</li>
                  <li>Visa, travel and other costs. These depend on your sector and employer.</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
                <p className="text-yellow-800">
                  <strong>Important:</strong> Please follow the Bangladesh government rules on recruitment costs. Ask for clear, written costs and keep every receipt.
                </p>
              </div>
            </section>

            {/* 10. Free Guide */}
            <section id="free-guide" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">10. Free SSW Visa Guide (PDF)</h2>
              <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl text-center">
                <FileText className="w-12 h-12 text-[#A71728] mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase mb-4">Complete & Comprehensive Guide to Japan SSW Work Permit and Visa Pathways</h3>
                <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
                  Are you planning to work in Japan under the Specified Skilled Worker (SSW) program? We have prepared a complete guide covering the key requirements, eligibility, Japanese language and skill tests, required documents, job process, application procedures, visa requirements, and other important information you need to know before applying.
                </p>
                <Link href="#" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#A71728] text-white !rounded-full font-bold uppercase tracking-wider hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl">
                  <FileText className="w-5 h-5" />
                  Read the Complete Japan SSW Guide
                </Link>
              </div>
            </section>

            {/* 11. Why Trust */}
            <section id="why-trust" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">11. Why Candidates Trust KTTI</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed mb-8">
                <p>
                  KTTI is the training institute of Kawaii Group, a Bangladesh-Japan joint group with offices in Bangladesh and Japan. Kawaii Group works in human resources and sends people to Japan on the student visa and the SSW visa. So we train you for what employers and interviewers in Japan really expect.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Briefcase, title: "Real experience", text: "We train candidates for the SSW visa and the student visa, not only for exams." },
                  { icon: GraduationCap, title: "Expert teaching", text: "Bangladeshi and Japanese teachers. Meet them on the Our Teachers page." },
                  { icon: ShieldCheck, title: "Authority", text: "Offices in Bangladesh and Japan. Mock interviews run by our Japan office." },
                  { icon: CheckCircle2, title: "Trust", text: "Clear fee on this page, honest limits, a fraud warning, and no guarantee promises." },
                  { icon: Clock, title: "Approved Sectors", text: "Training for sectors approved by the Bangladesh government for sending workers to Japan." },
                  { icon: MapPin, title: "Residential facility", text: "Residential facility with meals, for candidates from other districts." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm flex items-start gap-4">
                    <item.icon className="w-8 h-8 text-[#A71728] shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 mb-1">{item.title}</h4>
                      <p className="text-neutral-600 leading-relaxed text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 12. FAQ */}
            <section id="faq" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-8 pb-4 border-b border-neutral-200">12. Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`rounded-2xl transition-all duration-300 ${
                        isOpen 
                          ? 'bg-white shadow-md border border-neutral-100' 
                          : 'bg-white/50 hover:bg-white border border-transparent'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left px-6 py-5 sm:px-8 flex items-center justify-between gap-4 focus:outline-none"
                      >
                        <span className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-[#A71728]' : 'text-neutral-900'}`}>
                          {faq.q}
                        </span>
                        <div className={`shrink-0 w-8 h-8 !rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen ? 'bg-[#A71728]/10 text-[#A71728] rotate-180' : 'bg-neutral-100 text-neutral-600'
                        }`}>
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                            <div className="px-6 pb-6 sm:px-8 text-neutral-600 leading-relaxed pt-0">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

          </article>
        </div>
      </div>
    </div>
  );
}
