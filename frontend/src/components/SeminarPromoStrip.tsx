"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Time-sensitive homepage CTA for Narail seminar (remove after 11 Nov 2026). */
export default function SeminarPromoStrip() {
  return (
    <aside className="relative border-y border-[#A71728]/20 bg-[#A71728] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm sm:text-base font-medium leading-snug">
          <span className="font-black tracking-wide">নড়াইল সেমিনার · ১১ নভেম্বর</span>
          <span className="opacity-90">
            {" "}
            — Japan Education & Career Roadmap · Free Entry
          </span>
        </p>
        <Link
          href="/careers/narail-seminar/#register"
          className="inline-flex items-center gap-2 self-start sm:self-auto text-xs sm:text-sm font-bold tracking-[0.12em] uppercase bg-white text-[#A71728] px-4 py-2.5 hover:bg-neutral-100 transition-colors"
        >
          Register
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
