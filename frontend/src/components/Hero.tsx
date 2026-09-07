"use client";

import React from "react";
import DoorButton from "@/components/DoorButton";
import DoorLink from "@/components/DoorLink";
import { useLanguage } from "@/i18n/LanguageContext";

interface HeroProps {
  onOpenApply?: () => void;
}

export default function Hero({ onOpenApply }: HeroProps) {
  const { t, lang } = useLanguage();

  return (
    <section
      id="home"
      className="relative w-full min-h-[70vh] lg:min-h-screen bg-black overflow-hidden flex items-start justify-center"
    >
      <div className="absolute inset-0">
        <video
          src="/video_has_still_show_text_this.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 text-center self-start pt-28 sm:pt-32 lg:pt-36 pb-16">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-white/70 mb-5 sm:mb-7">
          {t.hero.eyebrow}
        </p>

        <h1
          className={`font-black tracking-tight text-white leading-[1.02] text-shadow-hero ${
            lang === "jp"
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          }`}
        >
          {t.hero.titleLine1}
          <br />
          <span className="text-white">{t.hero.titleLine2}</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-white/75 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        {onOpenApply && (
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <DoorButton
              onClick={onOpenApply}
              className="px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-bold tracking-wider uppercase"
            >
              {t.hero.ctaPrimary}
            </DoorButton>
            <DoorLink
              href="#about"
              variant="outline"
              className="px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold tracking-wider uppercase"
            >
              {t.hero.ctaSecondary}
            </DoorLink>
          </div>
        )}
      </div>
    </section>
  );
}
