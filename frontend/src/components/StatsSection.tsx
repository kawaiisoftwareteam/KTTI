"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

function CounterItem({
  value,
  suffix,
  label,
  sublabel,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const duration = 1600;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = value / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="p-8 sm:p-9 rounded-3xl bg-white border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:border-[#A71728] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div>
        <div className="text-5xl sm:text-6xl lg:text-7xl font-black font-mono text-neutral-950 tracking-tight flex items-baseline">
          <span>{count}</span>
          <span className="text-[#A71728] ml-1">{suffix}</span>
        </div>
        <h4 className="text-lg sm:text-xl font-black text-neutral-900 mt-3">
          {label}
        </h4>
      </div>
      <p className="text-xs sm:text-sm text-neutral-500 mt-2.5 font-medium leading-relaxed">
        {sublabel}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 lg:py-36 bg-neutral-50 text-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A71728]/10 text-[#A71728] text-xs font-mono font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#A71728]" />
            {t.stats.eyebrow}
          </div>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 uppercase tracking-tight leading-[0.98]">
            {t.stats.title}
          </h3>
          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto font-normal">
            {t.stats.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.stats.items.map((stat, idx) => (
            <CounterItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
