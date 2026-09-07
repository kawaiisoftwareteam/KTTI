"use client";

import React from "react";
import { Check, ShieldCheck, Trophy, Sparkles, Building, Globe } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";

interface IntroductionProps {
  onOpenApply: () => void;
}

export default function Introduction({ onOpenApply }: IntroductionProps) {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 lg:py-36 bg-white text-neutral-900 relative overflow-hidden">
      {/* Background Japanese Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: COMMANDING LARGE TYPOGRAPHY */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[3px] bg-[#A71728]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#A71728] uppercase font-mono">
                {t.about.eyebrow}
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-7xl font-black tracking-tight leading-[0.95] text-neutral-950 uppercase">
              {t.about.title} <br />
              <span className="text-[#A71728]">{t.about.titleAccent}</span> <br />
              {t.about.titleEnd}
            </h2>

            <p className="text-lg sm:text-xl text-neutral-700 font-normal leading-relaxed">
              {t.about.lead}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {t.about.body}
            </p>

            {/* Structured 4-block Feature Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {t.about.features.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-1 hover:border-[#A71728]/40 transition-colors">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#A71728] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-neutral-900">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <DoorButton
                onClick={onOpenApply}
                variant="dark"
                className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg"
              >
                {t.about.cta}
              </DoorButton>
              <div className="text-xs text-neutral-500 font-medium">
                <span className="block font-bold text-neutral-900">{t.about.admissionsTitle}</span>
                <span>{t.about.admissionsSubtitle}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: ORGANIZED & DESIGNABLE CARDS COMPOSITION */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Visual Hero Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 group bg-neutral-950">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                  alt={t.about.heroCard.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#A71728] text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-md shadow-md">
                    {t.about.heroCard.badge}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-xs font-mono text-neutral-300">
                    {t.about.heroCard.campusLabel}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    {t.about.heroCard.title}
                  </h4>
                </div>
              </div>
            </div>

            {/* Organized Info Cards (2 Horizontal Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-neutral-50 text-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#A71728] flex items-center justify-center text-white font-bold">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 font-bold">{t.about.networkCard.label}</span>
                </div>
                <h5 className="font-bold text-sm text-neutral-900">{t.about.networkCard.title}</h5>
                <p className="text-xs text-neutral-600 leading-snug">
                  {t.about.networkCard.body}
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-neutral-50 text-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-md transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#A71728] flex items-center justify-center text-white font-bold">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 font-bold">{t.about.passCard.label}</span>
                </div>
                <h5 className="font-bold text-sm text-neutral-900">{t.about.passCard.title}</h5>
                <p className="text-xs text-neutral-600 leading-snug">
                  {t.about.passCard.body}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
