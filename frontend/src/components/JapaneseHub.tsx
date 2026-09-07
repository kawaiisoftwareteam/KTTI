"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, Sparkles, Clock, ArrowRight, Users } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";

interface JapaneseHubProps {
  onOpenApply: () => void;
}

export default function JapaneseHub({ onOpenApply }: JapaneseHubProps) {
  const { t } = useLanguage();
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const levels = t.japaneseHub.levels;

  return (
    <section
      id="japanese"
      className="py-24 lg:py-36 bg-[#F4F4F5] text-neutral-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute -left-32 top-24 w-[420px] h-[420px] rounded-full bg-[#A71728]/[0.06] blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        <div className="max-w-4xl mb-14 sm:mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[3px] bg-[#A71728]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#A71728] uppercase font-mono">
              {t.japaneseHub.eyebrow}
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-neutral-950 uppercase">
            {t.japaneseHub.title} <br />
            <span className="text-[#A71728]">{t.japaneseHub.titleAccent}</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-2xl">
            {t.japaneseHub.intro}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          {levels.map((item, idx) => {
            const isHighlighted = idx === 1;

            return (
              <article
                key={`${item.level}-${idx}`}
                className={`jp-level-card group relative flex flex-col border bg-white transition-shadow duration-300 ${
                  isHighlighted
                    ? "border-[#A71728] shadow-[0_12px_32px_-16px_rgba(167,23,40,0.4)]"
                    : "border-neutral-200 shadow-sm hover:shadow-md"
                } ${cardsVisible ? "jp-level-card--visible" : ""}`}
                style={{
                  animationDelay: cardsVisible ? `${idx * 100}ms` : undefined,
                }}
              >
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-[10px] font-mono font-bold tracking-[0.16em] px-2 py-1 uppercase ${
                        isHighlighted
                          ? "bg-[#A71728] text-white"
                          : "bg-neutral-950 text-white"
                      }`}
                    >
                      {item.badge}
                    </span>
                    {isHighlighted && (
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#A71728]">
                        {t.japaneseHub.mostChosen}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-neutral-950 tracking-tight leading-snug">
                    {item.level}
                  </h3>
                  <p className="font-japanese text-sm text-neutral-500 mb-2 mt-0.5">
                    {item.kanji}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                    <span className="inline-flex items-center gap-1 font-semibold text-neutral-700">
                      <Clock className="w-3.5 h-3.5 text-[#A71728]" />
                      {item.hours}
                    </span>
                    <span className="text-neutral-300">|</span>
                    <span className="inline-flex items-center gap-1 truncate">
                      <Users className="w-3.5 h-3.5 text-[#A71728] shrink-0" />
                      <span className="truncate">{item.targetAudience}</span>
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 leading-snug mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <ul className="mt-auto space-y-1.5 mb-4">
                    {item.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 stroke-[2.5] ${
                            isHighlighted ? "text-[#A71728]" : "text-neutral-900"
                          }`}
                        />
                        <span className="text-[13px] text-neutral-700 leading-snug">
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <DoorButton
                    onClick={onOpenApply}
                    variant={isHighlighted ? "brand" : "dark"}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider"
                  >
                    <span>{t.japaneseHub.applyBatch}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </DoorButton>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 lg:mt-14 p-6 sm:p-8 bg-neutral-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-neutral-900">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 bg-[#A71728] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold tracking-tight">
                {t.japaneseHub.examCenterTitle}
              </h4>
              <p className="text-sm text-white/60 mt-1 max-w-xl leading-relaxed">
                {t.japaneseHub.examCenterDesc}
              </p>
            </div>
          </div>
          <DoorButton
            onClick={onOpenApply}
            variant="brand"
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider shrink-0 w-full sm:w-auto"
          >
            {t.japaneseHub.freeLevelTest}
          </DoorButton>
        </div>
      </div>
    </section>
  );
}
