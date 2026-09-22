"use client";

import React from "react";
import Link from "next/link";
import DoorButton from "@/components/DoorButton";
import { useLanguage } from "@/i18n/LanguageContext";
import { useApplyModal } from "@/contexts/ApplyModalContext";

export default function CareersPage() {
  const { t } = useLanguage();
  const { openApply } = useApplyModal();
  const page = t.aboutPage;
  const C = page.careers;

  return (
    <>
      <section className="relative overflow-hidden bg-[#F3F4F6] text-neutral-950 border-b border-neutral-200">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(167,23,40,0.14) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 mb-8"
          >
            <Link
              href="/about/"
              className="hover:text-[#A71728] transition-colors"
            >
              {page.leadership.profile.breadcrumbAbout}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-800">{C.h2}</span>
          </nav>
          <div className="max-w-2xl space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              {C.h2}
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {C.body}
            </p>
            <p className="text-xs font-mono tracking-widest uppercase text-neutral-400">
              {C.seoNote}
            </p>
            <DoorButton
              onClick={() => openApply("Japanese Language Academy")}
              className="mt-2 px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              {C.cta}
            </DoorButton>
          </div>
        </div>
      </section>
    </>
  );
}
