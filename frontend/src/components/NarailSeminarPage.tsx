"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Send,
  Ticket,
  Users,
  X,
} from "lucide-react";
import DoorButton from "@/components/DoorButton";
import DoorLink from "@/components/DoorLink";
import {
  NARAIL_DISTRICTS,
  submitNarailSeminarRegistration,
} from "@/data/narailSeminar";

const fieldClass =
  "w-full min-h-11 border border-[#E8D5D5] bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#1a1a1a] placeholder:text-neutral-400 outline-none focus:border-[#A71728] transition-colors";
const labelClass =
  "block text-sm sm:text-[0.95rem] font-semibold text-[#2a2a2a] mb-2 leading-snug";
const chipClass = (active: boolean) =>
  `block text-center cursor-pointer border px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors ${
    active
      ? "border-[#A71728] bg-[#A71728] text-white"
      : "border-[#E8D5D5] bg-white text-[#2a2a2a] hover:border-[#A71728]/40 hover:text-[#A71728]"
  }`;

const TOPICS = [
  "Japanese Language Training ও জাপানি ভাষা শেখার প্রস্তুতি",
  "Japan Student Visa-এর যোগ্যতা ও আবেদন প্রক্রিয়া",
  "SSW (Specified Skilled Worker) Visa-এর সুযোগ ও প্রস্তুতি",
  "ESDP-সহ সংশ্লিষ্ট প্রশিক্ষণ ও ক্যারিয়ার সম্ভাবনা",
  "জাপানে যাওয়ার সম্পূর্ণ Step-by-Step Roadmap",
] as const;

const HOTLINE = "+880 1817-047247";

export default function NarailSeminarPage() {
  const formTopRef = useRef<HTMLDivElement>(null);
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [district, setDistrict] = useState<(typeof NARAIL_DISTRICTS)[number] | "other" | "">("");
  const [otherDistrict, setOtherDistrict] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  useEffect(() => {
    // Seminar copy is Bangla — ensure Anek Bangla is available even if UI lang is EN.
    const href =
      "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;600;700&display=swap";
    if (!document.querySelector(`link[data-ktti-font="${href}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.kttiFont = href;
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    if (!showSuccess) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showSuccess]);

  const resetForm = () => {
    setFullName("");
    setMobile("");
    setDistrict("");
    setOtherDistrict("");
    setShowSuccess(false);
    setSubmittedName("");
    window.requestAnimationFrame(() => {
      formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!district) return;
    if (district === "other" && !otherDistrict.trim()) return;

    setIsSubmitting(true);
    try {
      await submitNarailSeminarRegistration({
        fullName,
        mobile,
        district: district === "other" ? otherDistrict : district,
        isOtherDistrict: district === "other",
      });
      setSubmittedName(fullName.trim());
      setShowSuccess(true);
    } catch {
      window.alert("সাবমিশন ব্যর্থ হয়েছে। ইন্টারনেট চেক করে আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF7F5] text-neutral-950 border-b border-[#E8D5D5]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(circle at 100% 150%, transparent 24%, rgba(167,23,40,0.07) 25%, rgba(167,23,40,0.07) 28%, transparent 29%), radial-gradient(circle at 0 150%, transparent 24%, rgba(167,23,40,0.07) 25%, rgba(167,23,40,0.07) 28%, transparent 29%)",
            backgroundSize: "48px 32px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 pb-10 sm:pb-16">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 mb-6 sm:mb-8"
          >
            <Link href="/careers/" className="hover:text-[#A71728] transition-colors">
              Careers
            </Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-800">Narail Seminar 2026</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3 py-1 bg-[#A71728] text-white text-[10px] font-black tracking-[0.18em] uppercase">
              Free Entry
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#A71728]">
              নড়াইল · যশোর · মাগুরা · খুলনা
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] max-w-4xl">
                Japan Education & Career Roadmap Seminar{" "}
                <span className="text-[#A71728]">2026</span>
              </h1>
              <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
                জাপানে যাওয়ার স্বপ্ন পূরণের প্রস্তুতি শুরু হোক সঠিক দিকনির্দেশনা
                থেকে! নড়াইলের মানুষের জন্য বিশেষ সুযোগ।
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    icon: CalendarDays,
                    label: "তারিখ",
                    value: "১১ নভেম্বর ২০২৬, বুধবার",
                  },
                  { icon: Clock, label: "সময়", value: "সকাল ১০:০০ টা" },
                  {
                    icon: MapPin,
                    label: "স্থান",
                    value: "জেলা শিল্পকলা একাডেমি, নড়াইল",
                  },
                  { icon: Ticket, label: "প্রবেশ", value: "সম্পূর্ণ বিনামূল্যে" },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white border border-[#E8D5D5] p-4 sm:p-5 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-[#A71728]">
                      <Icon className="w-4 h-4" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">
                        {label}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-neutral-900 leading-snug">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
                <DoorLink
                  href="#register"
                  className="w-full sm:w-auto px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold tracking-wider uppercase"
                >
                  Registration করুন
                </DoorLink>
                <p className="text-xs sm:text-sm text-neutral-500 self-center">
                  আগে Registration করতে হবে · আসন সীমিত
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <a
                href="#register"
                className="block overflow-hidden border border-[#E8D5D5] bg-white shadow-[0_12px_40px_rgba(167,23,40,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A71728]"
                aria-label="Registration করুন — নিচের ফর্মে যান"
              >
                <Image
                  src="/career/narail-seminar-ad.webp"
                  alt="Japan Education & Career Roadmap Seminar 2026 — নড়াইল পোস্টার"
                  width={1080}
                  height={1080}
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#A71728]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#A71728]">
                  সেমিনারে যা জানতে পারবেন
                </span>
              </div>
              <ul className="space-y-3">
                {TOPICS.map((topic) => (
                  <li key={topic} className="flex gap-3 text-sm sm:text-base text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#E8D5D5] bg-[#FAF7F5] p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#A71728]">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  বিশেষ আকর্ষণ
                </span>
              </div>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed">
                উপস্থিত থাকবেন{" "}
                <strong>জনাব বিশ্বাস জাহাঙ্গীর আলম</strong>, Chairman, KTTI — এবং
                জাপান থেকে সরাসরি যুক্ত থাকবেন{" "}
                <strong>Mr. Hajime Saito</strong>।
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                আসনসংখ্যা সীমিত। নড়াইল, যশোর, মাগুরা বা খুলনার বাসিন্দা হলে এখনই
                রেজিস্ট্রেশন সম্পন্ন করুন।
              </p>
              <a
                href={`tel:${HOTLINE.replace(/\s|-/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#A71728] hover:underline"
              >
                <Phone className="w-4 h-4" />
                {HOTLINE}
              </a>
            </div>
          </div>

          <div
            className="lg:col-span-6 scroll-mt-28 sm:scroll-mt-32"
            id="register"
            ref={formTopRef}
          >
            <div className="border border-[#E8D5D5] bg-[#FAF7F5] p-5 sm:p-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#A71728] mb-2">
                Registration · নিবন্ধন
              </p>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
                সেমিনারে রেজিস্ট্রেশন করুন
              </h2>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                নিচের ফর্মটি পূরণ করুন — তথ্য সরাসরি KTTI seminar sheet-এ জমা
                হবে।
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="seminar-name" className={labelClass}>
                    আপনার নাম (Full Name)
                  </label>
                  <input
                    id="seminar-name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={fieldClass}
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="seminar-mobile" className={labelClass}>
                    মোবাইল নম্বর
                  </label>
                  <input
                    id="seminar-mobile"
                    required
                    type="tel"
                    inputMode="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className={fieldClass}
                    placeholder="01XXXXXXXXX"
                    autoComplete="tel"
                  />
                </div>

                <fieldset>
                  <legend className={labelClass}>
                    আপনার বর্তমান ঠিকানা / জেলা
                  </legend>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {NARAIL_DISTRICTS.map((d, i) => (
                      <label key={d} className={chipClass(district === d)}>
                        <input
                          type="radio"
                          name="district"
                          value={d}
                          checked={district === d}
                          onChange={() => setDistrict(d)}
                          className="sr-only"
                          required={i === 0}
                        />
                        {d}
                      </label>
                    ))}
                    <label className={chipClass(district === "other")}>
                      <input
                        type="radio"
                        name="district"
                        value="other"
                        checked={district === "other"}
                        onChange={() => setDistrict("other")}
                        className="sr-only"
                      />
                      অন্যান্য
                    </label>
                  </div>
                  {district === "other" && (
                    <input
                      required
                      value={otherDistrict}
                      onChange={(e) => setOtherDistrict(e.target.value)}
                      className={`${fieldClass} mt-3`}
                      placeholder="জেলার নাম লিখুন"
                    />
                  )}
                </fieldset>

                <DoorButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "জমা হচ্ছে…" : "Submit · জমা দিন"}
                </DoorButton>
              </form>
            </div>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="seminar-success-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/55"
            aria-label="বন্ধ করুন"
            onClick={resetForm}
          />
          <div
            className="relative w-full sm:max-w-md bg-white border border-[#E8D5D5] shadow-[0_24px_80px_rgba(0,0,0,0.28)] p-6 sm:p-8 space-y-6"
            style={{ fontFamily: '"Anek Bangla", "Jost", sans-serif' }}
          >
            <button
              type="button"
              onClick={resetForm}
              className="absolute top-3 right-3 p-2 text-neutral-400 hover:text-neutral-800"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-14 h-14 bg-[#A71728]/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-[#A71728]" />
            </div>
            <div className="space-y-3 pr-6">
              <h2
                id="seminar-success-title"
                className="text-xl sm:text-2xl font-bold text-neutral-950 leading-snug"
              >
                ধন্যবাদ! রেজিস্ট্রেশন সম্পন্ন হয়েছে
              </h2>
              <p className="text-[0.95rem] sm:text-base text-neutral-700 leading-[1.7]">
                {submittedName ? (
                  <>
                    <span className="font-semibold text-neutral-950">
                      {submittedName}
                    </span>
                    , আপনার নড়াইল সেমিনারের রেজিস্ট্রেশন সফলভাবে জমা হয়েছে।
                  </>
                ) : (
                  <>আপনার নড়াইল সেমিনারের রেজিস্ট্রেশন সফলভাবে জমা হয়েছে।</>
                )}
              </p>
              <p className="text-[0.95rem] sm:text-base text-neutral-700 leading-[1.7]">
                নিশ্চিতকরণের জন্য আমরা ফোন করতে পারি — অনুগ্রহ করে মোবাইল নম্বর
                চালু রাখুন।
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed pt-1">
                হটলাইন: {HOTLINE}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <DoorButton
                type="button"
                onClick={resetForm}
                className="w-full px-5 py-3.5 text-sm font-bold tracking-wide"
              >
                আরেকজন রেজিস্টার করুন
              </DoorButton>
              <DoorLink
                href="/"
                variant="outline"
                className="w-full px-5 py-3.5 text-sm font-bold tracking-wide text-center"
              >
                হোমে যান
              </DoorLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
