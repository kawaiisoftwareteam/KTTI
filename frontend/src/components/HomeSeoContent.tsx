"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, Minus, CheckCircle2, Phone, MapPin, Mail, Sparkles } from "lucide-react";
import DoorButton from "./DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";
import { getHomeSeo } from "@/i18n/homeSeo";
import { CONTACT_EMAIL, CONTACT_PHONES, MAILTO_URL } from "@/data/contact";

export default function HomeSeoContent({ onOpenApply }: { onOpenApply: () => void }) {
  const { lang } = useLanguage();
  const c = getHomeSeo(lang);
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
              <span>{c.badge}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-neutral-950 uppercase tracking-tight leading-[1.1]">
              {c.title} <br className="hidden sm:block" />
              <span className="text-[#A71728]">{c.titleAccent}</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              {c.lead}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-8 items-start">
            <div className="p-8 bg-[#A71728] rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-black">1</div>
                {c.aboutTitle}
              </h3>
              <p className="text-white/90 leading-relaxed text-sm font-medium">
                {c.aboutBody}
              </p>
            </div>
            <div className="p-8 bg-[#A71728] rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-black">2</div>
                {c.languageTitle}
              </h3>
              <p className="text-white/90 leading-relaxed text-sm font-medium">
                {c.languageBody}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-black text-neutral-900 uppercase">{c.dhakaTitle}</h3>
            <p className="text-neutral-600 leading-relaxed text-lg">
              {c.dhakaLead}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {c.offerings.map((item, idx) => (
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
              {c.culture}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
            <motion.div variants={itemVariants} className="p-8 bg-[#A71728] rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-black text-white uppercase mb-4">{c.studentTitle}</h3>
              <p className="text-white/90 leading-relaxed font-medium">
                {c.studentBody}
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-8 bg-[#A71728] rounded-2xl shadow-xl transition-transform hover:-translate-y-1">
              <h3 className="text-2xl font-black text-white uppercase mb-4">{c.sswTitle}</h3>
              <p className="text-white/90 leading-relaxed font-medium">
                {c.sswBody}
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A71728] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-3xl font-black text-white uppercase mb-8 relative z-10">{c.stepsTitle}</h3>
            <div className="space-y-6 relative z-10">
              {c.steps.map((step, idx) => (
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
            <h3 className="text-3xl font-black text-neutral-900 uppercase text-center">{c.faqTitle}</h3>
            <div className="space-y-4">
              {c.faqs.map((faq, idx) => {
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
            <h3 className="text-3xl font-black text-neutral-950 uppercase">{c.ctaTitle}</h3>
            <p className="text-neutral-600 max-w-xl mx-auto">
              {c.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-neutral-700">
                <Phone className="w-5 h-5 text-[#A71728]" />
                <a href={`tel:${CONTACT_PHONES[0]}`} className="font-medium">{CONTACT_PHONES[0]}</a>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Mail className="w-5 h-5 text-[#A71728]" />
                <a href={MAILTO_URL} className="font-medium">{CONTACT_EMAIL}</a>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <MapPin className="w-5 h-5 text-[#A71728]" />
                <span className="font-medium">{c.location}</span>
              </div>
            </div>
            <div className="pt-6">
              <DoorButton onClick={onOpenApply} className="px-10 py-4 font-bold text-lg">
                {c.apply}
              </DoorButton>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
