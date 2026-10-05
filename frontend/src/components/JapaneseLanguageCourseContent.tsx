"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, CheckCircle2, ArrowRight, MapPin, MonitorPlay, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { getJapaneseCourse } from "@/i18n/japaneseCourseCopy";

export default function JapaneseLanguageCourseContent() {
  const { lang } = useLanguage();
  const c = getJapaneseCourse(lang);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = c.faqs;
  const toc = c.toc;

  return (
    <div className="bg-[#FAF7F5] min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white pt-40 pb-28 px-4 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2000&auto=format&fit=crop" 
            alt="Japanese Language Course" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase leading-[1.1] drop-shadow-xl">
              {c.heroTitle} <span className="text-white/90 block mt-2">{c.heroAccent}</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 leading-relaxed max-w-3xl drop-shadow-md mx-auto lg:mx-0">
              {c.heroLead}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 text-sm font-medium border-t border-white/30 pt-8 mt-12">
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">{c.writtenBy}</span>
              <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full">{c.writtenByValue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">{c.reviewedBy}</span>
              <Link href="/our-teachers" className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full hover:bg-white/20 transition">{c.reviewedByValue}</Link>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80 uppercase tracking-widest text-xs font-bold drop-shadow">{c.lastUpdated}</span>
              <span className="bg-black/20 backdrop-blur-md px-3 py-1.5 !rounded-full">{c.lastUpdatedValue}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Sidebar - Table of Contents */}
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 shrink-0 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100">
              <h3 className="font-black text-neutral-900 uppercase tracking-wider mb-6 pb-4 border-b border-neutral-100">{c.tocTitle}</h3>
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
              <h4 className="font-black text-neutral-900 uppercase mb-3">{c.readyTitle}</h4>
              <p className="text-sm text-neutral-600 mb-6">{c.readyBody}</p>
              <Link href="/admission" className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#A71728] text-white !rounded-full font-bold uppercase tracking-wider hover:bg-red-800 transition-colors shadow-lg hover:shadow-xl">
                {c.applyNow}
              </Link>
            </div>
          </aside>

          {/* Right Main Content */}
          <article className="w-full lg:w-3/4 space-y-20 order-1 lg:order-2">
            
            {/* Intro text */}
            <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
              <p className="text-xl leading-relaxed">
                {c.intro}
              </p>
            </div>

            {/* 1. Why you need Japanese to go to Japan */}
            <section id="why-you-need-japanese" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">{c.s1Title}</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
                <p>{c.s1p1}</p>
                <p>{c.s1p2}</p>
                <p>{c.s1p3}</p>
              </div>
            </section>

            {/* 2. Which level do you need? */}
            <section id="which-level" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">{c.s2Title}</h2>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#A71728] text-white">
                      <th className="p-5 font-bold whitespace-nowrap">{c.goal}</th>
                      <th className="p-5 font-bold">{c.aim}</th>
                      <th className="p-5 font-bold">{c.test}</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    {c.levels.map((row) => (
                      <tr key={row.goal} className="hover:bg-neutral-50 transition-colors">
                        <td className="p-5 font-bold">{row.goal}</td>
                        <td className="p-5">{row.aim}</td>
                        <td className="p-5 font-medium text-[#A71728]">{row.test}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-500 italic px-4">
                {c.levelNote}
              </p>
            </section>

            {/* 3. JLPT N5, N4, N3 and JFT Basic Explained */}
            <section id="levels-explained" className="scroll-mt-32 space-y-12">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">{c.s3Title}</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {c.s3Lead}
              </p>

              {/* N5 */}
              <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#A71728]/5 rounded-bl-full -mr-4 -mt-4"></div>
                <h3 className="text-2xl font-black text-[#A71728] uppercase mb-4 relative z-10">{c.n5Title}</h3>
                <p className="text-neutral-700 mb-6 leading-relaxed relative z-10">
                  {c.n5Body}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-neutral-400 uppercase mb-1">{c.who}</span>
                    <span className="font-bold text-neutral-900">{c.n5Who}</span>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-neutral-400 uppercase mb-1">{c.why}</span>
                    <span className="font-bold text-neutral-900">{c.n5Why}</span>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-neutral-400 uppercase mb-1">{c.estimate}</span>
                    <span className="font-bold text-neutral-900">{c.n5Hours}</span>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-neutral-400 uppercase mb-1">{c.examParts}</span>
                    <span className="font-bold text-neutral-900">{c.n5Parts}</span>
                  </div>
                </div>
              </div>

              {/* N4 */}
              <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-900/5 rounded-bl-full -mr-4 -mt-4"></div>
                <h3 className="text-2xl font-black text-neutral-900 uppercase mb-4 relative z-10">{c.n4Title}</h3>
                <p className="text-neutral-700 mb-6 leading-relaxed relative z-10">
                  {c.n4Body}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-50 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-neutral-400 uppercase mb-1">{c.who}</span>
                    <span className="font-bold text-neutral-900">{c.n4Who}</span>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-neutral-400 uppercase mb-1">{c.why}</span>
                    <span className="font-bold text-[#A71728]">{c.n4Why}</span>
                  </div>
                  <div className="bg-neutral-50 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-neutral-400 uppercase mb-1">{c.estimate}</span>
                    <span className="font-bold text-neutral-900">{c.n4Hours}</span>
                  </div>
                </div>
              </div>

              {/* N3 & JFT Basic */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-neutral-900 uppercase border-l-4 border-[#A71728] pl-4">{c.n3Title}</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {c.n3Body}
                </p>
              </div>

              <div className="bg-[#A71728] text-white rounded-3xl p-8 sm:p-10 shadow-xl">
                <h3 className="text-2xl font-black uppercase mb-4">{c.jftTitle}</h3>
                <p className="text-white/90 mb-6 leading-relaxed text-lg">
                  {c.jftBody}
                </p>
                <p className="text-white/80 mb-8 leading-relaxed">
                  {c.jftScale}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 border border-white/20 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-white/50 uppercase mb-1">{c.levelLabel}</span>
                    <span className="font-bold">{c.jftLevel}</span>
                  </div>
                  <div className="bg-white/10 border border-white/20 p-4 rounded-2xl">
                    <span className="block text-xs font-bold text-white/50 uppercase mb-1">{c.styleLabel}</span>
                    <span className="font-bold">{c.jftStyle}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. JLPT vs JFT */}
            <section id="jlpt-vs-jft" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">{c.s4Title}</h2>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 text-neutral-900">
                      <th className="p-5 font-bold">{c.feature}</th>
                      <th className="p-5 font-black text-[#A71728] text-lg uppercase">{c.jlptN4}</th>
                      <th className="p-5 font-black text-neutral-900 text-lg uppercase">{c.jftA2}</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    {c.compare.map((row) => (
                      <tr key={row.feature} className="hover:bg-neutral-50/50">
                        <td className="p-5 font-bold">{row.feature}</td>
                        <td className={`p-5 ${row.jlpt === c.yes ? "font-bold text-green-600" : ""}`}>{row.jlpt}</td>
                        <td className={`p-5 ${row.jft === c.yes ? "font-bold text-green-600" : ""}`}>{row.jft}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-neutral-700 leading-relaxed bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <span className="font-bold text-[#A71728]">{c.proTipLabel}</span> {c.proTip}
              </p>
            </section>

            {/* 5. How we teach */}
            <section id="how-we-teach" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-8 pb-4 border-b border-neutral-200">{c.s5Title}</h2>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                {c.s5Lead}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {c.teach.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:border-[#A71728]/30 transition-colors">
                    <CheckCircle2 className="w-8 h-8 text-[#A71728] mb-4" />
                    <h4 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h4>
                    <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Class time, batches and fees */}
            <section id="class-fees" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-8 pb-4 border-b border-neutral-200">{c.s6Title}</h2>
              <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100 mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#A71728] text-white">
                      <th className="p-5 font-bold">{c.mode}</th>
                      <th className="p-5 font-bold">{c.classTime}</th>
                      <th className="p-5 font-bold whitespace-nowrap">{c.fee}</th>
                      <th className="p-5 font-bold">{c.levelsCol}</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-700 divide-y divide-neutral-100">
                    {c.modes.map((row) => (
                      <tr key={row.mode} className="hover:bg-neutral-50">
                        <td className="p-5 font-bold text-neutral-900">{row.mode}</td>
                        <td className="p-5">{row.time}</td>
                        <td className="p-5 font-bold text-[#A71728] whitespace-nowrap">{row.fee}</td>
                        <td className="p-5">{row.levels}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-6 bg-neutral-50 p-6 sm:p-8 rounded-3xl border border-neutral-100">
                <h3 className="text-xl font-bold text-neutral-900 uppercase">{c.whichMode}</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#A71728]/10 text-[#A71728] flex items-center justify-center shrink-0 mt-0.5"><MapPin className="w-3 h-3" /></div>
                    <p className="text-neutral-700"><strong className="text-neutral-900">{c.residentialLabel}</strong> {c.residentialBody}</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-neutral-900/10 text-neutral-900 flex items-center justify-center shrink-0 mt-0.5"><Users className="w-3 h-3" /></div>
                    <p className="text-neutral-700"><strong className="text-neutral-900">{c.nonResLabel}</strong> {c.nonResBody}</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-neutral-900/10 text-neutral-900 flex items-center justify-center shrink-0 mt-0.5"><MonitorPlay className="w-3 h-3" /></div>
                    <p className="text-neutral-700"><strong className="text-neutral-900">{c.onlineLabel}</strong> {c.onlineBody}</p>
                  </li>
                </ul>
              </div>
            </section>

            {/* 7. How long does it take */}
            <section id="how-long" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">{c.s7Title}</h2>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 overflow-x-auto bg-white rounded-2xl shadow-sm border border-neutral-100">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-neutral-50 text-neutral-900">
                        <th className="p-4 font-bold border-b border-neutral-100">{c.levelCol}</th>
                        <th className="p-4 font-bold border-b border-neutral-100">{c.hoursCol}</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-700">
                      {c.hours.map((row) => (
                        <tr key={row.level} className="hover:bg-neutral-50">
                          <td className="p-4 font-bold">{row.level}</td>
                          <td className="p-4 text-[#A71728] font-bold">{row.hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-full md:w-1/2 prose prose-lg text-neutral-700 leading-relaxed">
                  <p>
                    {c.pace}
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Tips */}
            <section id="tips" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">{c.s8Title}</h2>
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-100 shadow-sm">
                <ul className="space-y-4">
                  {c.tips.map((tip, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-[#A71728] shrink-0 mt-2.5"></div>
                      <span className="text-lg text-neutral-700 leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 9. How to join */}
            <section id="how-to-join" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">{c.s9Title}</h2>
              <div className="grid sm:grid-cols-5 gap-4 text-center">
                {c.join.map((text, idx) => {
                  const item = { step: idx + 1, text };
                  return (
                  <div key={item.step} className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-sm flex flex-col items-center justify-center gap-3 relative">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white font-black flex items-center justify-center text-sm">{item.step}</div>
                    <span className="text-sm font-bold text-neutral-700">{item.text}</span>
                  </div>
                  );
                })}
              </div>
            </section>

            {/* 10. Why Trust */}
            <section id="why-trust" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-6 pb-4 border-b border-neutral-200">{c.s10Title}</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed mb-8">
                <p>{c.trustLead}</p>
                <ul>
                  {c.trustItems.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong> {item.text}{" "}
                      {item.link ? (
                        <Link href="/our-teachers" className="text-[#A71728] font-bold underline">{item.link}</Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic text-neutral-500 mt-6 bg-neutral-50 p-4 rounded-xl">
                  {c.sources}
                </p>
              </div>
            </section>

            {/* 11. FAQ */}
            <section id="faq" className="scroll-mt-32">
              <h2 className="text-3xl font-black text-neutral-900 uppercase mb-8 pb-4 border-b border-neutral-200">{c.s11Title}</h2>
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

            {/* Next Steps */}
            <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
              <h2 className="text-2xl font-black uppercase mb-8 text-center">{c.nextTitle}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.next.map((item) => (
                  <Link key={item.href} href={item.href} className="bg-white/10 p-4 rounded-2xl flex items-center justify-between group hover:bg-white/20 transition-colors">
                    <span className="font-bold">{item.label}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
}
