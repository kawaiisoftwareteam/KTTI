"use client";

import React from "react";
import Link from "next/link";
import { Clock, Wallet } from "lucide-react";
import {
  JAPANESE_COURSE_BENEFITS,
  JAPANESE_COURSE_PACKAGES,
  japaneseCoursePath,
  type JapaneseCoursePackage,
} from "@/data/japaneseCourseRegistrations";

function highlightRows(pkg: JapaneseCoursePackage) {
  const time =
    pkg.details.find(
      (r) => r.label.includes("সময়") || r.label.includes("মেয়াদ")
    ) ?? pkg.details[0];
  const fee =
    pkg.details.find(
      (r) =>
        r.label.includes("মোট") ||
        r.label.includes("মাসিক") ||
        r.label.includes("ফি")
    ) ?? pkg.details[1];
  return { time, fee };
}

export default function JapaneseCoursesRegisterPage() {
  return (
    <div
      className="pt-14 min-[400px]:pt-16 sm:pt-[4.25rem] lg:pt-[6.75rem] pb-14 sm:pb-20 overflow-x-hidden"
      style={{ fontFamily: "var(--font-bengali), sans-serif" }}
    >
      <section
        id="intro"
        className="scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-36 bg-[#FAF7F5] border-b border-[#E8D5D5]"
      >
        <div className="max-w-6xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-8 min-[400px]:py-10 sm:py-14">
          <p className="text-[0.65rem] min-[400px]:text-xs font-bold tracking-[0.16em] min-[400px]:tracking-[0.2em] uppercase text-[#A71728] mb-2.5 sm:mb-3">
            KTTI · Kawaii Group
          </p>
          <h1 className="text-[1.35rem] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-[1.3] max-w-3xl break-words text-neutral-950">
            <span className="block">জাপানিজ ভাষা কোর্স</span>
            <span className="mt-1 block text-[0.95rem] min-[400px]:text-lg sm:text-2xl lg:text-3xl font-bold text-neutral-700">
              Kawaii Tredmig Training Institute
            </span>
          </h1>
          <p className="mt-4 sm:mt-5 text-[0.9rem] sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
            Kawaii Group বাংলাদেশ ও জাপানের একটি যৌথ কোম্পানি। আমাদের প্রশিক্ষণ
            প্রতিষ্ঠান Kawaii Tredmig Training Institute (KTTI)। এখানে দক্ষ
            শিক্ষকদের মাধ্যমে জাপানিজ ভাষা কোর্স করানো হয়।
          </p>
          <p className="mt-3 text-[0.9rem] sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
            দুপুর, সন্ধ্যা, অনলাইন ও ৫ ঘণ্টার কোর্স আছে। যারা চাকরি করেন,
            তাঁদের জন্যও বিশেষ সুবিধাজনক সময়ের কোর্স আছে।
          </p>
          <a
            href="#packages"
            className="mt-5 sm:mt-6 inline-flex min-h-11 w-full min-[400px]:w-auto items-center justify-center bg-[#A71728] px-5 text-sm font-bold text-white hover:bg-[#86101E]"
          >
            কোর্স দেখুন
          </a>
        </div>
      </section>

      <section
        id="benefits"
        className="scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-36 bg-[#FAF7F5] border-b border-[#E8D5D5]"
      >
        <div className="max-w-6xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-8 min-[400px]:py-10 sm:py-14">
          <h2 className="text-lg min-[400px]:text-xl sm:text-2xl font-black text-neutral-950 tracking-tight leading-snug">
            কোর্সে যেসব সুবিধা থাকছে
          </h2>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl">
            আমাদের যেকোনো কোর্সে ভর্তি হলে এই সুবিধাগুলো পাওয়া যাবে।
          </p>
          <ul className="mt-5 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {JAPANESE_COURSE_BENEFITS.map((item, i) => (
              <li
                key={item.title}
                className="border border-[#E8D5D5] bg-white p-4 sm:p-5"
              >
                <span className="text-xs font-bold text-[#A71728] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[0.95rem] sm:text-base font-black text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="packages"
        className="scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-36 bg-white border-b border-[#E8D5D5]"
      >
        <div className="max-w-6xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-8 min-[400px]:py-10 sm:py-14">
          <h2 className="text-lg min-[400px]:text-xl sm:text-2xl font-black text-neutral-950 tracking-tight leading-snug">
            আমাদের জাপানিজ ভাষা কোর্সসমূহ
          </h2>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-2xl">
            আপনার সময় ও প্রয়োজন অনুযায়ী কোর্স বেছে নিন। প্রতিটি কোর্সের আলাদা
            পেজে বিস্তারিত ও রেজিস্ট্রেশন ফর্ম পাবেন।
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-5">
            {JAPANESE_COURSE_PACKAGES.map((pkg, index) => {
              const { time, fee } = highlightRows(pkg);
              const href = japaneseCoursePath(pkg.id);
              return (
                <article
                  key={pkg.id}
                  className="flex flex-col border border-[#E8D5D5] bg-white transition-all duration-200 min-w-0 hover:border-[#A71728]/60 hover:shadow-md"
                >
                  <div className="h-1.5 bg-[#A71728]" aria-hidden />
                  <div className="flex flex-1 flex-col p-4 min-[400px]:p-5 sm:p-6">
                    <div className="mb-3">
                      <span className="text-[11px] font-bold tracking-widest uppercase text-[#A71728]">
                        কোর্স {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-base min-[400px]:text-lg sm:text-xl font-black text-neutral-950 leading-snug">
                      <Link href={href} className="hover:text-[#A71728]">
                        {pkg.title}
                      </Link>
                    </h3>
                    <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed line-clamp-3 flex-grow">
                      {pkg.intro}
                    </p>

                    <div className="mt-4 space-y-2 border-t border-[#E8D5D5] pt-4">
                      {time && (
                        <p className="flex items-start gap-2 text-sm text-neutral-800 break-words">
                          <Clock
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#A71728]"
                            aria-hidden
                          />
                          <span className="min-w-0">
                            <span className="font-bold">{time.label}: </span>
                            {time.value}
                          </span>
                        </p>
                      )}
                      {fee && (
                        <p className="flex items-start gap-2 text-sm text-neutral-800 break-words">
                          <Wallet
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#A71728]"
                            aria-hidden
                          />
                          <span className="min-w-0">
                            <span className="font-bold">{fee.label}: </span>
                            {fee.value}
                          </span>
                        </p>
                      )}
                    </div>

                    <Link
                      href={href}
                      className="mt-5 inline-flex min-h-11 w-full items-center justify-center bg-[#A71728] px-3 min-[400px]:px-4 text-[0.8rem] min-[400px]:text-sm font-bold text-white hover:bg-[#86101E]"
                    >
                      বিস্তারিত ও রেজিস্ট্রেশন
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
