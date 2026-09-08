"use client";

import React from "react";
import { WHY_US_POINTS } from "@/data/content";
import { MessageSquareText, Briefcase, GraduationCap, Users, Building2, ShieldCheck, Handshake } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface WhyUsProps {
  onOpenApply: () => void;
}

export default function WhyUs({ onOpenApply }: WhyUsProps) {
  const { t } = useLanguage();
  const iconMap: Record<string, React.ReactNode> = {
    MessageSquareText: <MessageSquareText className="w-6 h-6 text-[#A71728]" />,
    Briefcase: <Briefcase className="w-6 h-6 text-[#A71728]" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-[#A71728]" />,
    Users: <Users className="w-6 h-6 text-[#A71728]" />,
    Building2: <Building2 className="w-6 h-6 text-[#A71728]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#A71728]" />,
  };
  // Icons are not translatable, so they stay indexed against the content source.
  const points = t.whyUs.points.map((point, idx) => ({
    ...point,
    iconName: WHY_US_POINTS[idx].iconName,
  }));

  return (
    <section id="why-us" className="py-24 lg:py-36 bg-neutral-50 text-neutral-900 relative overflow-hidden border-y border-neutral-200/80">
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03]">
        <span className="text-[24rem] font-bold font-japanese leading-none text-neutral-900">
          信頼
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER: LARGE & PROMINENT */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[3px] bg-[#A71728]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#A71728] uppercase font-mono">
                {t.whyUs.eyebrow}
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-neutral-950 uppercase">
              {t.whyUs.title} <br />
              <span className="text-[#A71728]">{t.whyUs.titleAccent}</span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            {t.whyUs.intro}
          </p>
        </div>

        {/* 6 NUMBERED POINTS (3x2 GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point) => (
            <div
              key={point.number}
              className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-neutral-200/90 hover:border-[#A71728] transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              {/* Header: Number and Icon */}
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-black font-mono text-neutral-300 group-hover:text-[#A71728] transition-colors">
                  {point.number}
                </span>
                <div className="p-3.5 bg-[#A71728]/10 rounded-2xl border border-[#A71728]/20 group-hover:bg-[#A71728]/15 transition-colors">
                  {iconMap[point.iconName]}
                </div>
              </div>

              {/* Title & Japanese Subtitle */}
              <div className="space-y-2">
                <span className="text-xs font-japanese font-medium text-neutral-400 block">
                  {point.japanese}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#A71728] transition-colors">
                  {point.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {point.description}
              </p>

              {/* Bottom Subtle Red Accent Bar on Hover */}
              <div className="w-0 group-hover:w-full h-1 bg-[#A71728] rounded-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* 100% JOB PLACEMENT PROMISE */}
        <div className="mt-16 lg:mt-20 relative overflow-hidden bg-white border border-[#A71728]/20 shadow-[0_20px_50px_-28px_rgba(167,23,40,0.35)]">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#A71728]" />
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#A71728]/[0.06] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-4 px-8 py-10 sm:py-12 text-center lg:text-left">
              <span className="inline-block text-[10px] sm:text-xs font-mono font-bold tracking-[0.22em] uppercase text-[#A71728] mb-4">
                {t.whyUs.guaranteeEyebrow}
              </span>
              <div className="font-black text-[#A71728] text-7xl sm:text-8xl lg:text-[7.5rem] leading-[0.85] tracking-tighter">
                100%
              </div>
              <p className="mt-3 text-base sm:text-lg font-black tracking-wide uppercase text-neutral-950">
                {t.whyUs.guaranteeTitle}
              </p>
            </div>

            <div className="lg:col-span-8 px-8 pb-10 lg:py-12 lg:pr-12 flex flex-col gap-6">
              <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed">
                {t.whyUs.guaranteeLead}{" "}
                <span className="font-black text-[#A71728]">100%</span>{" "}
                {t.whyUs.guaranteeTitle}.
              </p>

              <div className="flex items-start gap-4 bg-[#A71728]/[0.06] border border-[#A71728]/15 p-5">
                <div className="w-11 h-11 bg-[#A71728] flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-950">
                    {t.whyUs.guaranteeSupportTitle}
                  </h4>
                  <p className="text-sm sm:text-base text-neutral-600 mt-1.5 leading-relaxed">
                    {t.whyUs.guaranteeSupport}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
