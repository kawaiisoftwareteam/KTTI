"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F8F9FA] text-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#A71728] uppercase font-mono">
            {t.faq.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 uppercase tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-sm text-neutral-600 max-w-xl mx-auto">
            {t.faq.intro}
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {t.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-neutral-900 hover:text-[#A71728] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-[#A71728] text-white" : "bg-neutral-100 text-neutral-700"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
