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
    <section className="relative w-full py-24 lg:py-36 bg-neutral-100 text-neutral-900 overflow-hidden flex items-center justify-center border-y border-neutral-200">
      {/* Background Image with Light Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center scale-105 opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Subtle Light Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white" />
      <div className="absolute inset-0 bg-[#A71728]/5" />

      {/* Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A71728]/10 border border-[#A71728]/20 text-xs font-mono font-bold tracking-widest text-[#A71728] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#A71728] animate-ping" />
          <span>{t.japanBanner.eyebrow}</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.95] text-neutral-950">
          {t.japanBanner.titleLine1} <br />
          <span className="text-[#A71728]">{t.japanBanner.titleAccent}</span>
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
