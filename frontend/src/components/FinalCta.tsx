"use client";

import React from "react";
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import DoorLink from "@/components/DoorLink";
import { useLanguage } from "@/i18n/LanguageContext";

interface FinalCtaProps {
  onOpenApply: () => void;
}

export default function FinalCta({ onOpenApply }: FinalCtaProps) {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 lg:py-36 bg-neutral-50 text-neutral-900 overflow-hidden border-t border-neutral-200">
      {/* Background Graphic & Subtle Crimson Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A71728]/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Japanese Architectural Subtle Watermark */}
      <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.03] hidden lg:block">
        <span className="text-[22rem] font-bold font-japanese leading-none text-neutral-900">
          未来
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A71728]/10 border border-[#A71728]/20 text-xs font-mono font-bold tracking-widest text-[#A71728] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#A71728] animate-ping" />
          <span>{t.finalCta.eyebrow}</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.95] text-neutral-950">
          {t.finalCta.title} <br />
          <span className="text-[#A71728]">{t.finalCta.titleAccent}</span>
        </h2>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed">
          {t.finalCta.body}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <DoorButton
            onClick={onOpenApply}
            className="w-full sm:w-auto px-9 py-4 font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl"
          >
            <span>{t.finalCta.applyNow}</span>
            <ArrowRight className="w-5 h-5" />
          </DoorButton>

          <DoorLink
            href="https://wa.me/8801817047247"
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            className="w-full sm:w-auto px-9 py-4 font-bold text-sm sm:text-base tracking-wider uppercase shadow-sm"
          >
            <Phone className="w-5 h-5" />
            <span>{t.finalCta.talkAdmissions}</span>
          </DoorLink>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-600 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#A71728]" />
            {t.finalCta.trust[0]}
          </span>
          <span>•</span>
          <span>{t.finalCta.trust[1]}</span>
          <span>•</span>
          <span>{t.finalCta.trust[2]}</span>
        </div>

      </div>
    </section>
  );
}
