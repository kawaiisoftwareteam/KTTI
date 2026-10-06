"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, CheckCircle2, ArrowRight, Video, Briefcase, GraduationCap, ShieldCheck, HelpCircle, MonitorPlay, Users, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InterviewPreparationCourseContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const toc = [
    { id: "why-not-enough", title: "1. Why Language Alone Isn't Enough" },
    { id: "who-should-join", title: "2. Who Should Join?" },
    { id: "types-of-interviews", title: "3. SSW vs Student Interviews" },
    { id: "common-questions", title: "4. Common Interview Questions" },
    { id: "what-you-learn", title: "5. What You Learn at KTTI" },
    { id: "interview-manners", title: "6. Japanese Interview Manners" },
    { id: "course-details", title: "7. Course Details and Fee" },
    { id: "mock-interview", title: "8. Japan-Office Mock Interview" },
    { id: "online-tips", title: "9. Online Interview Tips" },
    { id: "how-to-prepare", title: "10. Prepare on Your Own" },
    { id: "why-trust", title: "11. Why Trust KTTI" },
    { id: "faq", title: "12. FAQ" },
  ];

  const faqs = [
    {
      q: "What is Japan interview preparation?",
      a: "It is training that prepares you for an interview with a Japanese employer or school. You practise self-introduction, common questions, manners and answers in Japanese, then do a mock interview."
    },
    {
      q: "How do I prepare for a Japan job interview from Bangladesh?",
      a: "Write and learn your self-introduction, prepare your reasons for going to Japan, practise common questions out loud, learn Japanese interview manners and do mock interviews. KTTI's course covers all of these."
    },
    {
      q: "What questions are asked in an SSW interview?",
      a: "Common questions are: introduce yourself, why Japan, why this company, your past work and skills, your health and ability for the job, and how long you plan to stay. Questions change by employer and sector."
    },
    {
      q: "What questions are asked in a Japan student interview?",
      a: "Common questions are: introduce yourself, why you want to study in Japan, why this school, your future plan, who pays for your study, and your Japanese level."
    },
    {
      q: "Is the interview in Japanese?",
      a: "Mostly yes, at your level. Some interviews use simple English or an interpreter. That is why you need to practise answering in Japanese."
    },
    {
      q: "How long is KTTI's interview preparation course?",
      a: "The course takes 2 to 3 weeks."
    },
    {
      q: "How much does Japan interview preparation cost at KTTI?",
      a: "The course fee is BDT 5,000 (one-time). Contact KTTI to confirm the current fee."
    },
    {
      q: "Do I need to pass JLPT or JFT Basic before I join?",
      a: "The course is made for learners who have passed their language test. If you are still learning Japanese, start with a language course first."
    },
    {
      q: "Can I join if my Japanese is only basic?",
      a: "Yes, if you have passed your test. Our teachers will help you build simple, clear answers at your level."
    },
    {
      q: "What is a Japan mock interview?",
      a: "It is a practice interview that feels like the real one. At KTTI, it is arranged online with our Japan office."
    },
    {
      q: "Is the interview preparation different for SSW and student visa?",
      a: "Yes. The questions and focus are different, so we train you for your own path."
    },
    {
      q: "What should I wear to a Japan interview?",
      a: "Dress neatly and simply: a clean collared shirt, tidy hair and plain trousers or a suit. Dark or neutral colours are best. Women can wear a simple blouse and trousers or a skirt."
    },
    {
      q: "Can I take the course online?",
      a: "The interview preparation course runs in Dhaka, as residential or non-residential. Ask our admission team if an online option is open for your batch."
    },
    {
      q: "Does KTTI guarantee that I will pass the interview or get a job?",
      a: "No. KTTI provides training and mock interviews. Interview results, visas and jobs are decided by schools, employers and the authorities."
    }
  ];

  return (
    <div className="bg-[#FAF7F5] min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white pt-40 pb-28 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop" 
            alt="Japan Interview Preparation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.1] drop-shadow-xl">
              Japan Interview <span className="text-white/90 block mt-2">Preparation in Bangladesh</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed max-w-3xl drop-shadow-md mx-auto lg:mx-0">
              Be Ready for Japanese Employers and Schools with Our Specialized 2-3 Week Course.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 text-sm font-medium border-t border-white/30 pt-8 mt-12">
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">Duration</span>
              <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full">2-3 Weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">Fee</span>
              <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full">BDT 5,000 (one-time)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">Highlights</span>
              <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full">Mock Interview with Japan Office</span>
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
              <h4 className="font-black text-neutral-900 uppercase mb-3">Join The Next Batch</h4>
              <p className="text-sm text-neutral-600 mb-6">Master your interview skills and secure your opportunity in Japan.</p>
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
                Japan interview preparation is training that gets you ready to face a Japanese company or school after you learn Japanese. KTTI&apos;s interview preparation course in Dhaka is a 2 to 3 week programme for SSW workers and students who have passed their language test. You practise self-introduction, common questions, manners and answers in Japanese, then do an online mock interview with our Japan office.
              </p>
            </div>

            {/* 1. Why Language Alone Is Not Enough */}
            <section id="why-not-enough" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">1. Why Japanese Language Alone Is Not Enough</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
                <p>
                  Many Bangladeshi candidates pass JLPT or JFT Basic and still struggle in the real interview. There are three common reasons:
                </p>
                <ul>
                  <li><strong>Nerves:</strong> You speak Japanese with a Japanese person for the first time on the most important day.</li>
                  <li><strong>Unclear answers:</strong> You know the words, but your answer is too short, too long, or does not explain why you want to go.</li>
                  <li><strong>Wrong manners:</strong> In Japan, how you greet, sit and speak matters as much as what you say.</li>
                </ul>
                <p className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                  A Japanese company that hires from Bangladesh wants to know three things: can you communicate, can you do the work, and will you follow the rules and work well with a team. Interview preparation trains all three.
                </p>
              </div>
            </section>

            {/* 2. Who Should Join? */}
            <section id="who-should-join" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">2. Who Should Join?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "SSW visa candidates who will be interviewed by a Japanese employer.",
                  "Students who will be interviewed by a Japanese language school.",
                  "Candidates who passed JLPT, JFT Basic or another language test and are waiting for an interview.",
                  "Anyone who knows Japanese but feels nervous when speaking."
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex items-start gap-4 hover:border-[#A71728]/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-[#A71728] shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm italic text-neutral-500 mt-6 px-4">
                If you have not passed your language test yet, start with the <Link href="/japanese-language-course" className="text-[#A71728] font-bold underline">Japanese Language Course</Link> and join interview preparation after your test.
              </p>
            </section>

            {/* 3. Types of Interviews */}
            <section id="types-of-interviews" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">3. Types of Interviews: SSW Employer vs Student School</h2>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-900">
                      <th className="p-5 font-bold"></th>
                      <th className="p-5 font-black text-[#A71728] text-lg uppercase"><div className="flex items-center gap-2"><Briefcase className="w-5 h-5"/> SSW Candidates</div></th>
                      <th className="p-5 font-black text-neutral-900 text-lg uppercase"><div className="flex items-center gap-2"><GraduationCap className="w-5 h-5"/> Student Candidates</div></th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Who interviews you</td>
                      <td className="p-5">A Japanese employer or company, often online</td>
                      <td className="p-5">A Japanese language school, often online</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">What they check</td>
                      <td className="p-5">Your Japanese, your skills and work experience, your attitude, how long you plan to work</td>
                      <td className="p-5">Your Japanese, your study plan, your reason for going, how you will pay and live in Japan</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">Language</td>
                      <td className="p-5">Mostly Japanese, sometimes simple English or an interpreter</td>
                      <td className="p-5">Mostly Japanese at your level</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">What matters most</td>
                      <td className="p-5 font-medium">Clear self-introduction, safe and honest answers about your skills, polite manners</td>
                      <td className="p-5 font-medium">Clear study goals, honest family and money answers, polite manners</td>
                    </tr>
                    <tr className="hover:bg-neutral-50/50">
                      <td className="p-5 font-bold text-neutral-900">KTTI help</td>
                      <td className="p-5 font-bold text-[#A71728]">Interview prep + Japan office mock interview</td>
                      <td className="p-5 font-bold text-[#A71728]">Interview prep + Japan office mock interview</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 italic px-4">
                Steps differ by employer, school and sector. Our team will tell you what to expect for your own case.
              </p>
            </section>

            {/* 4. Common Questions */}
            <section id="common-questions" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">4. Common Japan Interview Questions</h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                These are the types of questions candidates from Bangladesh are often asked. We practise many more in class.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
                    <Briefcase className="w-6 h-6 text-[#A71728]" />
                    <h3 className="text-xl font-bold text-neutral-900 uppercase">For SSW & Jobs</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Please introduce yourself.",
                      "Why do you want to work in Japan?",
                      "Why did you choose this company (or this sector)?",
                      "What work have you done before? What are your strengths?",
                      "Can you do hard physical work or shift work?",
                      "How long do you plan to stay in Japan?",
                      "What will you do if you have a problem at work?",
                      "Do you have any questions for us?"
                    ].map((q, idx) => (
                      <li key={idx} className="flex gap-3">
                        <HelpCircle className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                        <span className="text-neutral-700 font-medium">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-100">
                    <GraduationCap className="w-6 h-6 text-neutral-900" />
                    <h3 className="text-xl font-bold text-neutral-900 uppercase">For Students</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Please introduce yourself.",
                      "Why do you want to study in Japan?",
                      "Why did you choose this school?",
                      "What will you do after you finish school?",
                      "Who will pay for your study and living costs?",
                      "How many hours have you studied Japanese? What is your level?",
                      "Do you plan to work part-time? How will you balance work and study?"
                    ].map((q, idx) => (
                      <li key={idx} className="flex gap-3">
                        <HelpCircle className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                        <span className="text-neutral-700 font-medium">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-black text-neutral-900 uppercase mb-4">Useful Japanese Phrases</h3>
              <div className="overflow-x-auto bg-[#A71728] rounded-2xl shadow-xl mb-6">
                <table className="w-full text-left border-collapse text-white">
                  <thead>
                    <tr className="bg-black/20">
                      <th className="p-5 font-bold border-b border-white/10">Japanese (Romaji)</th>
                      <th className="p-5 font-bold border-b border-white/10">Meaning</th>
                      <th className="p-5 font-bold border-b border-white/10">When to use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="hover:bg-white/5">
                      <td className="p-5 font-bold">Hajimemashite. [Name] to moushimasu.</td>
                      <td className="p-5 text-white/90">Nice to meet you. I am [Name].</td>
                      <td className="p-5 text-white/80">Start of the self-introduction</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-5 font-bold">Yoroshiku onegaishimasu.</td>
                      <td className="p-5 text-white/90">Please treat me well.</td>
                      <td className="p-5 text-white/80">After your introduction and at the end</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-5 font-bold">Mou ichido onegaishimasu.</td>
                      <td className="p-5 text-white/90">Please say it once more.</td>
                      <td className="p-5 text-white/80">If you did not understand the question</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-5 font-bold">Arigatou gozaimashita.</td>
                      <td className="p-5 text-white/90">Thank you very much.</td>
                      <td className="p-5 text-white/80">At the end of the interview</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 5. What You Learn */}
            <section id="what-you-learn" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">5. What You Learn at KTTI</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Self-introduction", desc: "Write and practise a clear self-introduction in Japanese" },
                  { title: "Your story", desc: "Explain why Japan, why this company or school, and your future plan" },
                  { title: "Skills and experience", desc: "Talk about your education, work and skills in simple, honest Japanese" },
                  { title: "Common questions", desc: "Practise the most common questions for SSW and student interviews" },
                  { title: "Answering in Japanese", desc: "Build full answers, not one-word answers. Handle questions you do not understand." },
                  { title: "Interview manners", desc: "Greeting, bowing, sitting, tone of voice and how to enter and leave" },
                  { title: "Online interview skills", desc: "Camera, sound, background, internet and how to look at the screen" },
                  { title: "Documents", desc: "Know your own documents and explain them clearly" },
                  { title: "Practice & feedback", desc: "Mock interviews in class with feedback after each round" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
                    <h4 className="font-bold text-neutral-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Manners */}
            <section id="interview-manners" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">6. Japanese Interview Manners: Do and Do Not</h2>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2 bg-green-50 border border-green-100 p-6 sm:p-8 rounded-3xl">
                  <h3 className="text-2xl font-black text-green-700 uppercase mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-7 h-7" /> Do
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Arrive 10 to 15 minutes early (or join the online call early)",
                      "Dress neatly: clean shirt, tidy hair, simple clothes",
                      "Greet politely and bow lightly when you enter and leave",
                      "Sit straight, hands on your lap, look at the interviewer",
                      "Speak clearly and politely. Give full answers.",
                      "Say \"please say it once more\" if you did not understand",
                      "Be honest about your skills and plans",
                      "Thank the interviewer at the end"
                    ].map((text, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 shrink-0 mt-2"></div>
                        <span className="text-green-900 font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 bg-red-50 border border-red-100 p-6 sm:p-8 rounded-3xl">
                  <h3 className="text-2xl font-black text-red-700 uppercase mb-6 flex items-center gap-2">
                    <Minus className="w-7 h-7" /> Do Not
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Arrive late",
                      "Wear casual or flashy clothes",
                      "Walk in without a greeting",
                      "Slouch, cross arms or play with your phone",
                      "Mumble, or answer with only \"yes\" or \"no\"",
                      "Stay silent or guess when you did not understand",
                      "Make big promises you cannot keep",
                      "Leave without thanking"
                    ].map((text, idx) => (
                      <li key={idx} className="flex gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-2"></div>
                        <span className="text-red-900 font-medium">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 7. Course Details */}
            <section id="course-details" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">7. Course Details and Fee</h2>
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
                      <td className="p-5 font-bold text-neutral-900">Course</td>
                      <td className="p-5">Interview Preparation for language-passed candidates</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Duration</td>
                      <td className="p-5">2 to 3 weeks</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Batch size</td>
                      <td className="p-5">15 learners per batch</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Class time</td>
                      <td className="p-5">Afternoon batches</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Mode</td>
                      <td className="p-5">Residential or non-residential</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Start</td>
                      <td className="p-5">Rolling batches after your language exam</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Fee</td>
                      <td className="p-5 font-bold text-[#A71728]">BDT 5,000 (one-time)</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-5 font-bold text-neutral-900">Final step</td>
                      <td className="p-5 font-medium">Online mock interview with the Kawaii Group Japan office</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                Contact KTTI to confirm the latest fee and the next batch date. Learners from other districts can choose the residential option and stay at KTTI.
              </p>
            </section>

            {/* 8. Mock Interview */}
            <section id="mock-interview" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">8. Mock Interview with Our Japan Office</h2>
              <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-4 -mt-4"></div>
                <Users className="w-12 h-12 text-[#A71728] mb-6 relative z-10" />
                <p className="text-lg text-white/90 leading-relaxed mb-6 relative z-10">
                  This is what makes KTTI different. Kawaii Group has offices in both Bangladesh and Japan, so we can arrange your mock interview with people from our Japan office. You speak with a Japanese interviewer at natural speed, answer real questions and get honest feedback. By the real interview day, the experience is no longer new to you.
                </p>
                <Link href="/courses/online-mock-interview" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#A71728] transition-colors relative z-10">
                  Learn more on the Online Mock Interview page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

            {/* 9. Online Tips */}
            <section id="online-tips" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">9. Online Interview Tips</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Test your internet, camera and microphone one day before.",
                  "Sit in a quiet room with a plain background and good light.",
                  "Use a laptop if you can, or place your phone on a stand.",
                  "Look at the camera when you speak, not only at your own face on the screen.",
                  "Keep your documents and a glass of water nearby.",
                  "Log in early and keep your phone on silent."
                ].map((tip, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm text-center">
                    <MonitorPlay className="w-8 h-8 text-[#A71728] mx-auto mb-4" />
                    <p className="text-neutral-700 font-medium text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 10. Prepare on Your Own */}
            <section id="how-to-prepare" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">10. How to Prepare on Your Own</h2>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Write your self-introduction in Japanese and learn it by heart.",
                    "Prepare your story: why Japan, why this job or school, and your plan for 3 to 5 years.",
                    "List your skills and past work, with one example for each.",
                    "Practise answers out loud every day, and record yourself.",
                    "Ask a teacher or friend to do a practice interview with you.",
                    "Learn about the company or school before the interview.",
                    "Rest well the night before."
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-[#A71728]/10 text-[#A71728] font-black flex items-center justify-center text-sm shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-neutral-700 leading-relaxed font-medium mt-1">
                        {step}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 11. Why Trust */}
            <section id="why-trust" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">11. Why Candidates Trust KTTI</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed mb-8">
                <p>
                  KTTI is the training institute of Kawaii Group, a Bangladesh-Japan joint group with offices in Bangladesh and Japan. Kawaii Group works in human resources and sends people to Japan on the student visa and the SSW visa. So we know what Japanese schools and employers expect in an interview.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Briefcase, title: "Real experience", text: "We prepare candidates for both the SSW visa and the student visa." },
                  { icon: GraduationCap, title: "Expert teaching", text: "KTTI teachers, and a mock interview with people from our Japan office." },
                  { icon: ShieldCheck, title: "Authority", text: "Offices in Bangladesh and Japan." },
                  { icon: CheckCircle2, title: "Trust", text: "Clear fee on this page, honest limits, and no guarantee promises." },
                  { icon: FileText, title: "Approved Sectors", text: "Training for the visa paths and sectors approved by the Bangladesh government." },
                  { icon: Users, title: "One Institute", text: "Language, visa training and interview practice all at one institute." }
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
