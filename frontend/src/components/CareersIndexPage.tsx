"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

/** Subtle seigaiha (青海波) wave motif — CSS only */
const seigaiha =
  "radial-gradient(circle at 100% 150%, transparent 24%, rgba(167,23,40,0.07) 25%, rgba(167,23,40,0.07) 28%, transparent 29%), radial-gradient(circle at 0 150%, transparent 24%, rgba(167,23,40,0.07) 25%, rgba(167,23,40,0.07) 28%, transparent 29%), radial-gradient(circle at 50% 100%, transparent 20%, rgba(167,23,40,0.05) 21%, rgba(167,23,40,0.05) 28%, transparent 29%)";

function FujiSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 120"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M0 120 L80 48 L120 72 L160 28 L200 58 L240 18 L280 52 L320 40 L400 120 Z" />
      <path
        d="M160 28 L180 42 L200 58 L190 42 L175 35 Z"
        className="opacity-40"
      />
    </svg>
  );
}

export default function CareersIndexPage() {
  const { lang, t } = useLanguage();
  const C = t.aboutPage.careers;
  const I = C.index;
  const jpFont = { fontFamily: "var(--font-japanese), var(--font-sans)" };

  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF7F5] text-neutral-950 border-b border-[#E8D5D5]">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: seigaiha,
            backgroundSize: "48px 32px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 text-[#A71728]/10 pointer-events-none">
          <FujiSilhouette className="w-full h-24 sm:h-32" />
        </div>
        {/* Vertical jp accent */}
        <p
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-[11px] font-bold tracking-[0.35em] text-[#A71728]/35 [writing-mode:vertical-rl]"
          style={jpFont}
          aria-hidden
        >
          日本への道
        </p>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 pb-10 sm:pb-14 lg:pb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="w-8 h-[2px] bg-[#A71728]" />
            <p
              className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#A71728]"
              style={lang === "jp" ? jpFont : undefined}
            >
              {C.eyebrow}
            </p>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
            style={lang === "jp" ? jpFont : undefined}
          >
            {I.h1}
          </h1>
            <p
            className="mt-2 text-xl sm:text-2xl lg:text-3xl font-medium text-[#A71728]/80"
            style={jpFont}
          >
            Japan Job Placement
          </p>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            {I.subhead}
          </p>
        </div>
      </section>

      <section className="relative py-14 lg:py-20 bg-[#FAF7F5]">
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: seigaiha,
            backgroundSize: "56px 36px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers/japan-recruitment/"
            className="group relative grid grid-cols-1 md:grid-cols-12 w-full max-w-5xl mx-auto overflow-hidden bg-white shadow-[0_1px_0_rgba(167,23,40,0.15)] transition-shadow hover:shadow-[0_12px_40px_rgba(167,23,40,0.12)]"
          >
            {/* Torii-red frame */}
            <span
              className="absolute inset-0 pointer-events-none border-2 border-[#A71728]/25 group-hover:border-[#A71728]/55 transition-colors z-20"
              aria-hidden
            />
            <span
              className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#A71728] z-20"
              aria-hidden
            />
            <span
              className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#A71728] z-20"
              aria-hidden
            />
            <span
              className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#A71728] z-20"
              aria-hidden
            />
            <span
              className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#A71728] z-20"
              aria-hidden
            />

            <div className="relative md:col-span-5 w-full bg-[#FAF7F5]">
              <Image
                src={I.cardImage}
                alt={I.cardImageAlt}
                width={1469}
                height={1232}
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
              />
              <p
                className="absolute bottom-3 left-3 text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white drop-shadow-md"
                style={jpFont}
              >
                日本へ · TO JAPAN
              </p>
            </div>

            <div className="relative md:col-span-7 flex flex-col justify-center p-5 sm:p-8 lg:p-11 space-y-4 sm:space-y-5 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF8F7_100%)]">
              {/* Red spine accent */}
              <div
                className="absolute left-0 top-8 bottom-8 w-[3px] bg-[#A71728] hidden md:block"
                aria-hidden
              />

              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 bg-[#A71728] text-white text-[10px] font-black tracking-[0.2em] uppercase">
                  {C.event.freeBadge}
                </span>
                <span
                  className="text-[10px] font-bold tracking-[0.2em] text-[#A71728]/70"
                  style={jpFont}
                >
                  無料 · 模擬面接
                </span>
              </div>

              <h2
                className="text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-neutral-950 leading-snug group-hover:text-[#A71728] transition-colors"
                style={lang === "jp" ? jpFont : undefined}
              >
                {I.cardTitle}
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                {I.cardDesc}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-500 border-t border-[#E8D5D5] pt-4">
                <span>{C.event.date}</span>
                <span className="text-[#A71728]/40" aria-hidden>
                  |
                </span>
                <span>{C.event.interviewer}</span>
              </div>

              <span className="inline-flex items-center gap-2 pt-1 text-sm font-bold tracking-[0.15em] uppercase text-[#A71728]">
                {I.cardCta}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          <p
            className="mt-8 text-center text-[11px] tracking-[0.35em] text-neutral-400"
            style={jpFont}
          >
            PREPARED · TRAINED · HIRED · 日本
          </p>
        </div>
      </section>
    </>
  );
}
