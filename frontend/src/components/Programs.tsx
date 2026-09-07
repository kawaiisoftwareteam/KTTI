"use client";

import React from "react";
import { ArrowUpRight, Clock, CheckCircle2, Sparkles, BookOpen, Layers } from "lucide-react";
import { PROGRAMS } from "@/data/content";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProgramsProps {
  onOpenApply: (programName?: string) => void;
}

export default function Programs({ onOpenApply }: ProgramsProps) {
  const { t } = useLanguage();
  // Images stay in content.ts; the canonical English title is passed to the apply
  // modal so its program <select> keeps matching regardless of the active language.
  const programs = t.programs.items.map((item, idx) => ({
    ...item,
    image: PROGRAMS[idx].image,
    applyValue: PROGRAMS[idx].title,
  }));

  return (
    <section id="programs" className="py-24 lg:py-36 bg-[#F8F9FA] text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER: LARGE & PROMINENT */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[3px] bg-[#A71728]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#A71728] uppercase font-mono">
                {t.programs.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-neutral-950 uppercase">
              {t.programs.title} <br />
              <span className="text-[#A71728]">{t.programs.titleAccent}</span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            {t.programs.intro}
          </p>
        </div>

        {/* ORGANIZED & DESIGNABLE EDITORIAL PROGRAM CARDS (2x2 GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((program, idx) => (
            <div
              key={program.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:brightness-95"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* Floating Tags */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 bg-[#A71728] text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-md">
                    {program.tag}
                  </span>
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-black/70 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#A71728]" />
                    <span>{program.duration}</span>
                  </div>
                </div>

                {/* Bottom title in image banner */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-300">
                      0{idx + 1} // {program.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-neutral-100 transition-colors mt-0.5">
                      {program.title}
                    </h3>
                  </div>
                  <span className="text-lg font-japanese font-bold text-white/40 hidden sm:block">
                    {program.japaneseTitle}
                  </span>
                </div>
              </div>

              {/* Card Body & Structured Highlights */}
              <div className="p-7 sm:p-9 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {program.description}
                </p>

                {/* Organized Highlights Grid */}
                <div className="space-y-3 pt-3 border-t border-neutral-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A71728] block font-mono">
                    {t.programs.highlightsLabel}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {program.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-150">
                        <CheckCircle2 className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-neutral-800 leading-snug">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 flex items-center justify-between border-t border-neutral-100">
                  <button
                    onClick={() => onOpenApply(program.applyValue)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#A71728] group-hover:text-[#86101E] transition-colors cursor-pointer"
                  >
                    <span>{t.programs.viewDetails}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>

                  <DoorButton
                    onClick={() => onOpenApply(program.applyValue)}
                    variant="dark"
                    className="px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-md"
                  >
                    {t.programs.applyNow}
                  </DoorButton>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
