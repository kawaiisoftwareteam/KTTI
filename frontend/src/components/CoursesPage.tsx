"use client";

import React, { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import {
  BASIC_JP_COURSES,
  submitBasicJapaneseCourse,
} from "@/data/basicJapaneseCourse";

const fieldClass =
  "w-full min-h-12 border border-[#E8D5D5] bg-white px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1a1a1a] placeholder:text-neutral-400 outline-none focus:border-[#A71728] transition-colors";
const labelClass =
  "block text-sm font-semibold text-[#2a2a2a] mb-2 leading-snug";

export default function CoursesPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [area, setArea] = useState("");
  const [course, setCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitBasicJapaneseCourse({ name, mobile, area, course });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="pt-28"
      style={{ fontFamily: "var(--font-bengali), sans-serif" }}
    >
      <div className="bg-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/courses/basic-japanese.webp"
          alt="আগে নিজেকে যাচাই করুন, তারপর Japanese Language শেখা শুরু করুন — KTTI"
          width={1600}
          height={640}
          fetchPriority="high"
          decoding="async"
          className="mx-auto block h-auto w-full max-w-5xl"
        />
      </div>

      <section className="bg-[#FAF7F5] border-t border-[#E8D5D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="relative space-y-4 sm:space-y-5 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/courses/50-off.png"
              alt="৫০% ডিসকাউন্ট — স্পেশাল অফার"
              width={420}
              height={320}
              decoding="async"
              className="discount-badge pointer-events-none absolute right-0 -top-3 z-10 w-28 min-[400px]:w-32 sm:w-40 lg:w-44 h-auto"
            />
            <h1 className="text-[1.45rem] min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950 leading-[1.25] pr-28 min-[400px]:pr-36 sm:pr-44">
              আগে নিজেকে যাচাই করুন, তারপর Japanese Language শেখা শুরু করুন
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              বাংলাদেশে Japanese Language শেখার ক্ষেত্রে অনেকেই আগে টাকা খরচ করে
              Course শুরু করেন—কিন্তু পরে বুঝতে পারেন, Japanese Language শেখা তাদের
              জন্য কতটা suitable বা challenging।
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Kawaii Tredmig Training Institute (KTTI) এই জায়গায় নিয়ে এসেছে একটি
              নতুন ধরনের practical learning opportunity।
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              কোর্সে ভর্তি হওয়ার আগে Basic Japanese Language-এর সঙ্গে নিজেকে
              পরিচিত করুন এবং বুঝে নিন—আপনি সত্যিই Japanese Language শেখার জন্য
              প্রস্তুত কি না।
            </p>
            <p className="text-sm sm:text-base font-bold text-neutral-900 leading-snug">
              মাত্র ১৫ দিনে Basic Japanese Language শেখার সুযোগ।
            </p>
            <div className="border border-[#E8D5D5] bg-white px-3.5 py-3.5 sm:px-4 sm:py-4">
              <p className="text-sm sm:text-base font-black text-[#A71728]">
                বিশেষ 50% Offer
              </p>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mt-1.5">
                প্রথমবার basic Japanese Language শেখার এই opportunity নিতে আগ্রহীদের
                জন্য নির্বাচিত Course Fee-তে 50% ছাড়ের বিশেষ সুযোগ থাকছে।
              </p>
            </div>
            <p className="text-sm sm:text-base font-semibold text-neutral-800 leading-snug">
              আগে জানুন, আগে শিখুন, তারপর সিদ্ধান্ত নিন।
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-snug">
              Start Your Basic Japanese Language Journey with KTTI.
            </p>
            <a
              href="#register"
              className="inline-flex min-h-11 items-center text-sm sm:text-base font-bold text-[#A71728]"
            >
              50% Offer পেতে নিচের Registration Form পূরণ করুন।
            </a>
          </div>

          <div
            id="register"
            className="bg-white border border-[#E8D5D5] p-4 min-[400px]:p-5 sm:p-8 scroll-mt-28 min-w-0 self-start"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h2 className="text-xl sm:text-2xl font-black text-neutral-950">
                  এখনই রেজিস্ট্রেশন করুন
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  ফোন দিয়ে স্ক্যান করেও রেজিস্ট্রেশন করা যায়।
                </p>
              </div>
              <img
                src="/courses/register-qr.svg"
                alt="রেজিস্ট্রেশন QR কোড"
                width={112}
                height={112}
                className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 border border-neutral-200 bg-white p-1"
              />
            </div>
            {isSubmitted ? (
              <div className="text-center space-y-4 py-6">
                <CheckCircle className="w-12 h-12 text-[#A71728] mx-auto" />
                <h2 className="text-2xl font-black text-neutral-950">
                  রেজিস্ট্রেশন জমা হয়েছে
                </h2>
                <p className="text-sm text-neutral-600">
                  ধন্যবাদ, {name}। আমরা হোয়াটসঅ্যাপে যোগাযোগ করব।
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setName("");
                    setMobile("");
                    setArea("");
                    setCourse("");
                    setIsSubmitted(false);
                  }}
                  className="inline-flex min-h-11 items-center justify-center border border-[#A71728] px-5 text-sm font-bold text-[#A71728] hover:bg-[#A71728] hover:text-white"
                >
                  আবার রেজিস্ট্রেশন করুন
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <fieldset>
                  <legend className={labelClass}>
                    আপনি কোন কোর্সের জন্য আগ্রহী *
                  </legend>
                  <div className="flex flex-col gap-3">
                    {BASIC_JP_COURSES.map((opt) => {
                      const active = course === opt.value;
                      return (
                        <label
                          key={opt.value}
                          className={`flex cursor-pointer items-stretch border ${
                            active
                              ? "border-[#A71728] bg-[#A71728] text-white"
                              : "border-neutral-200 bg-white text-neutral-950 hover:bg-[#FAF7F5]"
                          }`}
                        >
                          <input
                            type="radio"
                            name="course"
                            required
                            className="sr-only"
                            checked={active}
                            onChange={() => setCourse(opt.value)}
                          />
                          <span className="flex min-w-0 flex-1 items-center justify-between gap-4 px-4 py-3.5">
                            <span className="min-w-0">
                              <span className="block text-sm font-bold">{opt.title}</span>
                              <span className={`block text-xs mt-0.5 ${active ? "text-white/75" : "text-neutral-500"}`}>
                                {opt.detail}
                              </span>
                            </span>
                            <span className="shrink-0 text-xl sm:text-2xl font-black tabular-nums">
                              ৳{opt.price}
                            </span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="course-name" className={labelClass}>
                    নাম *
                  </label>
                  <input
                    id="course-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClass}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="course-mobile" className={labelClass}>
                    মোবাইল নম্বর (হোয়াটস অ্যাপ) *
                  </label>
                  <input
                    id="course-mobile"
                    required
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className={fieldClass}
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="course-area" className={labelClass}>
                    বর্তমান এলাকা বা জেলা *
                  </label>
                  <input
                    id="course-area"
                    required
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Example: Uttara, Mirpur, Badda, Narayanganj, Chattogram etc."
                    className={fieldClass}
                  />
                </div>

                <DoorButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3.5 text-sm font-bold tracking-wider"
                >
                  {isSubmitting ? (
                    "জমা হচ্ছে..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      রেজিস্ট্রেশন করুন
                    </>
                  )}
                </DoorButton>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
