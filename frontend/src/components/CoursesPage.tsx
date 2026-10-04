"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle, Clock, Phone, Send, Shield } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import {
  BASIC_JP_COURSES,
  BASIC_JP_PHONES,
  submitBasicJapaneseCourse,
} from "@/data/basicJapaneseCourse";

const fieldClass =
  "w-full min-h-12 border border-[#E8D5D5] bg-white px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1a1a1a] placeholder:text-neutral-400 outline-none focus:border-[#A71728] transition-colors";
const labelClass =
  "block text-sm font-semibold text-[#2a2a2a] mb-2 leading-snug";

const FEATURES = [
  { icon: Shield, label: "নিরাপদ আবাসন" },
  { icon: BookOpen, label: "নিবিড় ও একাগ্র শিক্ষা" },
  { icon: CheckCircle, label: "নিয়মিত চর্চা সহায়ক পরিবেশ" },
  { icon: Clock, label: "শৃঙ্খলাবদ্ধ সময় ব্যবস্থাপনা" },
] as const;

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
      style={{ fontFamily: "var(--font-bengali), var(--font-outfit), sans-serif" }}
    >
      <div className="bg-neutral-950 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Form%20Bannner%20S.png"
          alt="মাত্র ১৫ দিনে জাপানি ভাষার বেসিক শিখুন — KTTI"
          className="w-full h-40 min-[400px]:h-48 sm:h-64 md:h-auto object-cover object-[center_20%] md:object-contain"
        />
      </div>

      <section className="bg-[#FAF7F5] border-t border-[#E8D5D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="space-y-5 sm:space-y-6 min-w-0">
            <p className="text-xs font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#A71728] uppercase">
              15 Day Basic Japanese
            </p>
            <h1 className="text-[1.65rem] min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 leading-[1.2]">
              মাত্র ১৫ দিনে জাপানি ভাষার বেসিক শিখুন
            </h1>
            <p className="text-base sm:text-lg text-neutral-800 font-semibold leading-snug">
              জাপান আর স্বপ্ন নয়, এবার হবে বাস্তব!
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Japan যাওয়ার প্রস্তুতি শুরু করতে চান? KTTI-এর 15 Days Basic Japanese
              Language Course-এ ভর্তির আগ্রহ জানান। কোর্স শেষে নিজের শেখার দক্ষতা
              যাচাই করতে পারবেন।
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              JLPT · JFT-Basic · SSW · Student Visa — প্রস্তুতির শক্ত ভিত্তি
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 border border-[#E8D5D5] bg-white px-3.5 py-3.5 text-sm sm:text-[15px] font-semibold text-neutral-800 leading-snug"
                >
                  <Icon className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                  {label}
                </li>
              ))}
            </ul>

            <p className="text-sm text-neutral-600">
              শিক্ষিত আপনার দায়িত্ব আমাদের · ৩ যুগ+ অভিজ্ঞ ম্যানেজমেন্ট
            </p>

            <div className="flex flex-col min-[400px]:flex-row min-[400px]:flex-wrap gap-2 min-[400px]:gap-4">
              {BASIC_JP_PHONES.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+88${phone}`}
                  className="inline-flex items-center gap-2 min-h-11 text-base font-bold text-[#A71728]"
                >
                  <Phone className="w-4 h-4" />
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <div
            id="register"
            className="bg-white border border-[#E8D5D5] p-4 min-[400px]:p-5 sm:p-8 scroll-mt-28 min-w-0"
          >
            {isSubmitted ? (
              <div className="text-center space-y-3 py-8">
                <CheckCircle className="w-12 h-12 text-[#A71728] mx-auto" />
                <h2 className="text-2xl font-black text-neutral-950">
                  রেজিস্ট্রেশন জমা হয়েছে
                </h2>
                <p className="text-sm text-neutral-600">
                  ধন্যবাদ, {name}। আমরা হোয়াটসঅ্যাপে যোগাযোগ করব।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-950">
                    এখনই রেজিস্ট্রেশন করুন
                  </h2>
                  <p className="text-sm text-neutral-600 mt-1">
                    আপনার স্বপ্নের জাপান, শুরু হোক KTTI থেকে।
                  </p>
                </div>

                <fieldset>
                  <legend className={labelClass}>
                    আপনি কোন কোর্সের জন্য আগ্রহী *
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BASIC_JP_COURSES.map((opt) => {
                      const active = course === opt.value;
                      return (
                        <label
                          key={opt.value}
                          className={`cursor-pointer border p-4 transition-colors ${
                            active
                              ? "border-[#A71728] bg-[#A71728] text-white"
                              : "border-[#E8D5D5] bg-white text-neutral-900 hover:border-[#A71728]/40"
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
                          <span className="block text-xs font-bold uppercase tracking-wide opacity-80">
                            {opt.title}
                          </span>
                          <span className="block text-2xl font-black mt-1">
                            ৳{opt.price}
                          </span>
                          <span className={`block text-xs mt-1 ${active ? "text-white/80" : "text-neutral-500"}`}>
                            {opt.detail}
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
