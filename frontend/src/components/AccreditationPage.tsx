"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AccreditationPage() {
  const { t } = useLanguage();
  const page = t.aboutPage;
  const A = page.accreditation;

  return (
    <>
      <section className="relative overflow-hidden bg-[#F3F4F6] text-neutral-950 border-b border-neutral-200">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 20% 80%, rgba(167,23,40,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-14 sm:pb-16">
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
            <span className="text-neutral-800">{A.h2}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            {A.h2}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl">
            {A.h2Question}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {A.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-[#F8F9FA] border border-neutral-200 p-5 text-sm sm:text-base text-neutral-700"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#A71728] text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
