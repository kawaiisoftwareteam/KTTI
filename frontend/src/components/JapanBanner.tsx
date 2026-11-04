"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";

interface JapanBannerProps {
  onOpenApply: () => void;
}

export default function JapanBanner({ onOpenApply }: JapanBannerProps) {
  const { t } = useLanguage();
  return (
    <section className="relative w-full py-16 lg:py-20 bg-neutral-100 text-neutral-900 overflow-hidden flex items-center justify-center border-y border-neutral-200">
      {/* Local CSS atmosphere — no third-party image fetch */}
      <div
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white" />
      <div className="absolute inset-0 bg-[#A71728]/5" />

      {/* Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A71728]/10 border border-[#A71728]/20 text-xs font-mono font-bold tracking-widest text-[#A71728] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#A71728] animate-ping" />
          <span>{t.japanBanner.eyebrow}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight uppercase leading-[1.1] text-neutral-950">
          {t.japanBanner.titleLine1} <span className="text-[#A71728]">{t.japanBanner.titleAccent}</span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-600 font-normal leading-relaxed">
          {t.japanBanner.body}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <DoorButton
            onClick={onOpenApply}
            className="group px-8 py-4 font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl"
          >
            <span>{t.japanBanner.cta}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </DoorButton>
        </div>
      </div>
    </section>
  );
}
