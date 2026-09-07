"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, ArrowRight, Clock } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";

interface SswPathwayProps {
  onOpenApply: () => void;
}

export default function SswPathway({ onOpenApply }: SswPathwayProps) {
  const { t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [stepsVisible, setStepsVisible] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);
  const steps = t.ssw.steps;
  const activeStep = steps[activeStepIndex];

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStepsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ssw" className="py-24 lg:py-36 bg-white text-neutral-900 relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-5 lg:px-6">
        
        {/* SECTION HEADER */}
        <div className="max-w-4xl mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A71728]/10 text-[#A71728] text-xs font-bold uppercase tracking-wider font-mono">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            {t.ssw.eyebrow}
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-neutral-950 uppercase">
            {t.ssw.title} <br />
            <span className="text-[#A71728]">{t.ssw.titleAccent}</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
            {t.ssw.intro}
          </p>
        </div>

        {/* HORIZONTAL STEP BUTTONS — full width, staggered entrance */}
        <div className="relative mb-10" ref={stepsRef}>
          <div className="hidden lg:block absolute top-1/2 left-2 right-2 h-1 bg-neutral-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 relative z-10">
            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`ssw-step-card relative p-4 sm:p-5 lg:p-6 rounded-none text-left transition-all duration-300 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] border cursor-pointer ${
                    isActive
                      ? "bg-[#A71728] text-white border-[#A71728] shadow-xl"
                      : "bg-neutral-50 text-neutral-800 border-neutral-200/90 hover:border-[#A71728]/50 hover:bg-white"
                  } ${stepsVisible ? "ssw-step-card--visible" : ""}`}
                  style={{
                    animationDelay: stepsVisible ? `${idx * 140}ms` : undefined,
                  }}
                >
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span
                      className={`text-sm sm:text-base font-mono font-black ${
                        isActive ? "text-white/90" : "text-neutral-400"
                      }`}
                    >
                      {t.ssw.stepPrefix} {step.number}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-japanese font-medium ${
                        isActive ? "text-white/80" : "text-neutral-400"
                      }`}
                    >
                      {step.japanese}
                    </span>
                  </div>

                  <div className="font-black text-sm sm:text-base lg:text-lg tracking-tight leading-snug">
                    {step.title}
                  </div>

                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#A71728] rotate-45 hidden lg:block" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* DETAILED ACTIVE STEP SHOWCASE CARD */}
        <div className="bg-neutral-50 text-neutral-900 rounded-none p-8 sm:p-12 lg:p-14 border border-neutral-200/90 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#A71728]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 bg-[#A71728] text-white text-xs font-mono font-black rounded-none shadow-sm">
                  {t.ssw.stepPrefix} {activeStep.number} {t.ssw.stepOf}
                </span>
                <span className="text-xs text-neutral-600 font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#A71728]" />
                  {t.ssw.timelineLabel} <strong className="text-neutral-900">{activeStep.duration}</strong>
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight uppercase">
                {activeStep.title}
              </h3>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A71728] font-mono block">
                  {t.ssw.milestonesLabel}
                </span>
                <div className="space-y-2.5">
                  {activeStep.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 bg-white p-3.5 rounded-none border border-neutral-200/90 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-neutral-800">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-none p-7 sm:p-9 border border-neutral-200/90 flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3.5">
                  <span className="text-xs uppercase font-mono text-neutral-500">{t.ssw.sidebar.targetStandardLabel}</span>
                  <span className="text-xs font-bold text-[#A71728] uppercase">{t.ssw.sidebar.targetStandardValue}</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3.5">
                  <span className="text-xs uppercase font-mono text-neutral-500">{t.ssw.sidebar.visaLabel}</span>
                  <span className="text-xs font-bold text-neutral-900 uppercase">{t.ssw.sidebar.visaValue}</span>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3.5">
                  <span className="text-xs uppercase font-mono text-neutral-500">{t.ssw.sidebar.salaryLabel}</span>
                  <span className="text-xs font-bold text-emerald-600 font-mono">{t.ssw.sidebar.salaryValue}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono text-neutral-500">{t.ssw.sidebar.overtimeLabel}</span>
                  <span className="text-xs font-bold text-neutral-800">{t.ssw.sidebar.overtimeValue}</span>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <DoorButton
                  onClick={onOpenApply}
                  className="w-full py-4 px-6 font-black text-xs uppercase tracking-wider shadow-md"
                >
                  <span>{t.ssw.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </DoorButton>
                <p className="text-[11px] text-neutral-500 text-center font-mono">
                  {t.ssw.assessmentNote}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
