"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus, CheckCircle2, Phone, MapPin, Mail, Sparkles } from "lucide-react";
import DoorButton from "./DoorButton";

export default function HomeSeoContent({ onOpenApply }: { onOpenApply: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-white text-neutral-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A71728]/5 border border-[#A71728]/10 rounded-full text-[#A71728] text-sm font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Transform Your Future</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 uppercase tracking-tight leading-[1.1]">
              Japanese Language Course in Bangladesh <br className="hidden sm:block" />
              <span className="text-[#A71728]">with SSW and Student Visa Training</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              KTTI (Kawaii Training Institute) is a Japanese language institute in Dhaka, run by Kawaii Group. We teach Japanese and train students and workers for the Japan student visa from Bangladesh and for the SSW visa, so you are ready for study, work and daily life in Japan, not just for an exam.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-8 items-start">
            <div className="p-8 bg-[#A71728] rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-black">1</div>
                About KTTI
              </h3>
              <p className="text-white/90 leading-relaxed text-sm font-medium">
                Kawaii Group is a Bangladesh-Japan joint group with offices in both countries. It sends people from Bangladesh to Japan on the student visa and the Specified Skilled Worker (SSW) visa. KTTI is its training institute, a Japanese language institute in Dhaka that also trains learners for their visa.
              </p>
            </div>
            <div className="p-8 bg-[#A71728] rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-black">2</div>
                Language First
              </h3>
              <p className="text-white/90 leading-relaxed text-sm font-medium">
                Japanese language is the first step. Without it, you cannot go to Japan. At KTTI you learn Japanese first, then train for your own visa path. We prepare people for every sector that the Bangladesh government has approved for sending workers to Japan.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-black text-neutral-900 uppercase">Japanese Language Course in Dhaka</h3>
            <p className="text-neutral-600 leading-relaxed text-lg">
              Do you want to learn Japanese in Bangladesh? KTTI is a Japanese language school in Dhaka for complete beginners and exam candidates. Our Japanese language learning programme covers:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { title: "JLPT N5 course", desc: "The first level, for beginners." },
                { title: "JLPT N4 preparation", desc: "A common target for study and SSW." },
                { title: "JFT Basic preparation", desc: "The everyday Japanese test used for the SSW visa." },
                { title: "NAT test preparation", desc: "Practice for another recognised Japanese test." },
                { title: "Online Japanese course", desc: "Learn from home with live teachers." },
                { title: "Japanese language coaching", desc: "Small batches with regular exam practice." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A71728] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-neutral-900 block">{item.title}</strong>
                    <span className="text-neutral-600 text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-neutral-600 leading-relaxed mt-6">
              You can learn with a Bangladeshi teacher, a Japanese teacher, or both. Every week you take a mock test, so you always know where you stand. In class we also talk about Japanese culture, such as manners, workplace habits and daily life, so you can settle in quickly after you arrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
            <motion.div variants={itemVariants} className="p-8 bg-[#A71728] rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-black text-white uppercase mb-4">Student Visa</h3>
              <p className="text-white/90 leading-relaxed font-medium">
                Students in Japan can study and also work part-time, within the limits of their visa. KTTI prepares you for both before you leave. We train your Japanese, your interview and the skills you need for part-time jobs in Japan. That means you can start a Japan part-time job for students without stress.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 bg-[#A71728] rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-black text-white uppercase mb-4">SSW Visa</h3>
              <p className="text-white/90 leading-relaxed font-medium">
                The SSW visa lets you work in approved sectors in Japan. Candidates usually need Japanese language ability (JFT Basic or JLPT N4) and a skills test for their sector. KTTI gives SSW visa training in Bangladesh in two parts: Japanese language first, then sector-wise training for the work you will do.
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A71728] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-3xl font-black text-white uppercase mb-8 relative z-10">How to Go to Japan: 4 Steps</h3>
            <div className="space-y-6 relative z-10">
              {[
                "Choose your visa: student visa or SSW visa.",
                "Learn Japanese at KTTI, from beginner level to your exam level.",
                "Train for your visa and take weekly mock tests.",
                "Practise with an online mock interview from the Japan office, then attend your real interview."
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A71728] flex items-center justify-center font-bold font-mono shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-white/80 font-medium sm:text-lg">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-black text-neutral-900 uppercase text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                { q: "Do I need to learn Japanese to go to Japan?", a: "Yes. In practice, you cannot go to Japan on a student visa or an SSW visa without Japanese language ability. KTTI teaches the language and prepares you for your visa." },
                { q: "How to learn Japanese for Japan?", a: "Start with a structured course: JLPT N5, then N4 or JFT Basic. Join a class with weekly practice tests and speaking practice. At KTTI you can learn in Dhaka or online." },
                { q: "Which Japanese level is needed for the SSW visa?", a: "Usually JFT Basic or JLPT N4, plus a skills test for your sector. Rules can change, so confirm the latest rules with KTTI before you apply." },
                { q: "Can I do a part-time job in Japan on a student visa?", a: "Yes, with the right permission and within the weekly hour limit set by Japanese rules. KTTI prepares you for part-time jobs in Japan before you go." },
                { q: "What is a Japan mock interview?", a: "It is a practice interview that feels like the real one. At KTTI, Japanese interviewers from our Japan office run your Japan mock interview in Bangladesh, online." }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className={`rounded-2xl transition-all duration-300 ${
                      isOpen 
                        ? 'bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-100' 
                        : 'bg-neutral-50 hover:bg-neutral-100/70 border border-transparent'
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
          </motion.div>

          <motion.div variants={itemVariants} className="bg-neutral-50 rounded-3xl p-8 sm:p-12 text-center space-y-8 border border-neutral-200">
            <h3 className="text-3xl font-black text-neutral-950 uppercase">Start Your Japan Journey</h3>
            <p className="text-neutral-600 max-w-xl mx-auto">
              Ready to begin? Contact KTTI today and choose your Japanese language course in Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-neutral-700">
                <Phone className="w-5 h-5 text-[#A71728]" />
                <span className="font-medium">+880 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Mail className="w-5 h-5 text-[#A71728]" />
                <span className="font-medium">info@ktti.com.bd</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <MapPin className="w-5 h-5 text-[#A71728]" />
                <span className="font-medium">Dhaka, Bangladesh</span>
              </div>
            </div>
            <div className="pt-6">
              <DoorButton onClick={onOpenApply} className="px-10 py-4 font-bold text-lg">
                APPLY NOW
              </DoorButton>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
