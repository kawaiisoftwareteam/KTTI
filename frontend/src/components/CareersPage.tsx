"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CheckCircle,
  HardHat,
  HeartPulse,
  Plane,
  Plus,
  Send,
} from "lucide-react";
import DoorButton from "@/components/DoorButton";
import DoorLink from "@/components/DoorLink";
import FormSelect from "@/components/FormSelect";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  BD_DISTRICTS,
  submitRecruitmentToGoogleForm,
  type CareerCategoryId,
} from "@/data/recruitment";

const CATEGORY_ICONS: Record<
  CareerCategoryId,
  React.ComponentType<{ className?: string }>
> = {
  "building-cleaning": Building2,
  construction: HardHat,
  "nursing-care": HeartPulse,
  aviation: Plane,
  others: Plus,
};

const CATEGORY_TO_FORM: Record<CareerCategoryId, string> = {
  "building-cleaning": "Building Cleaning",
  construction: "Construction",
  "nursing-care": "Caregiver",
  aviation: "Aviation",
  others: "Others",
};

const fieldClass =
  "w-full min-h-11 border border-[#E8D5D5] bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-[#1a1a1a] placeholder:text-neutral-400 outline-none focus:border-[#A71728] transition-colors";
const labelClass =
  "block text-sm sm:text-[0.95rem] font-semibold text-[#2a2a2a] mb-2 leading-snug normal-case tracking-normal";
const chipClass = (active: boolean) =>
  `block text-center cursor-pointer border px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors ${
    active
      ? "border-[#A71728] bg-[#A71728] text-white"
      : "border-[#E8D5D5] bg-white text-[#2a2a2a] hover:border-[#A71728]/40 hover:text-[#A71728]"
  }`;

export default function CareersPage() {
  const { t } = useLanguage();
  const page = t.aboutPage;
  const C = page.careers;
  const F = C.form;
  const successRef = useRef<HTMLDivElement>(null);

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [district, setDistrict] = useState("");
  const [jpCourse, setJpCourse] = useState("");
  const [jpLevel, setJpLevel] = useState("");
  const [skillAssessment, setSkillAssessment] = useState("");
  const [interviewInterest, setInterviewInterest] = useState("");
  const [category, setCategory] = useState("");
  const [practicalReady, setPracticalReady] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isSubmitted) return;
    // Wait a tick so success UI is painted, then pin viewport to it
    const id = window.requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(id);
  }, [isSubmitted]);

  const selectCategory = (id: CareerCategoryId) => {
    setCategory(CATEGORY_TO_FORM[id]);
    document
      .getElementById(F.id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitRecruitmentToGoogleForm({
        fullName,
        mobile,
        district,
        jpCourse,
        jpLevel,
        skillAssessment,
        interviewInterest,
        category,
        practicalReady,
      });
      setIsSubmitted(true);
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-36 pb-10 sm:pb-16 lg:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 mb-6 sm:mb-8"
          >
            <Link
              href="/careers/"
              className="hover:text-[#A71728] transition-colors"
            >
              {C.index.h1}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-800">{C.h2}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 order-2 lg:order-1">
              <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
                {C.eyebrow}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                {C.h2}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                {C.body}
              </p>
              <p className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-neutral-400 leading-relaxed">
                {C.seoNote}
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
                <DoorLink
                  href={`#${F.id}`}
                  className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase"
                >
                  {C.cta}
                </DoorLink>
                <span className="inline-flex items-center justify-center px-4 py-2.5 border border-[#A71728] text-[#A71728] text-[10px] sm:text-xs font-black tracking-widest uppercase">
                  {C.event.freeBadge}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative w-full overflow-hidden border-2 border-[#A71728]/30 bg-[#FAF7F5] order-1 lg:order-2">
              <Image
                src={C.index.cardImage}
                alt={C.index.cardImageAlt}
                width={1469}
                height={1232}
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-neutral-200 bg-[#F8F9FA] p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <p className="text-neutral-400 text-[10px] sm:text-xs uppercase tracking-wider font-mono mb-1">
                Interviewer
              </p>
              <p className="font-bold text-neutral-950 text-sm sm:text-base">
                {C.event.interviewer}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600">
                {C.event.interviewerOrg}
              </p>
            </div>
            <div>
              <p className="text-neutral-400 text-[10px] sm:text-xs uppercase tracking-wider font-mono mb-1">
                Date
              </p>
              <p className="font-bold text-neutral-950 text-sm sm:text-base">
                {C.event.date}
              </p>
            </div>
            <div>
              <p className="text-neutral-400 text-[10px] sm:text-xs uppercase tracking-wider font-mono mb-1">
                Place
              </p>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {C.event.place}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#A71728] mb-2">
            {C.event.title}
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 mb-6 sm:mb-8">
            {C.event.subtitle}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
            {C.event.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm sm:text-base text-neutral-700"
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#A71728] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-10 space-y-3">
            <h2 className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
              {C.categoriesHeading}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed">
              {C.categoriesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {C.categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.id as CareerCategoryId];
              const selected =
                category === CATEGORY_TO_FORM[cat.id as CareerCategoryId];
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => selectCategory(cat.id as CareerCategoryId)}
                  className={`group text-left border bg-white p-4 sm:p-5 lg:p-6 transition-colors ${
                    selected
                      ? "border-[#A71728] ring-1 ring-[#A71728]"
                      : "border-neutral-200 hover:border-[#A71728]/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                    <span className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-neutral-200 bg-[#F8F9FA] text-[#A71728] group-hover:bg-[#A71728] group-hover:text-white group-hover:border-[#A71728] transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#A71728]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id={F.id}
        className="py-12 sm:py-16 lg:py-24 bg-white scroll-mt-24 sm:scroll-mt-28 border-t border-neutral-200"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 space-y-3">
            <p className="text-sm font-semibold tracking-wide text-[#A71728]">
              {F.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#1a1a1a]">
              {F.h2}
            </h2>
            <p className="text-sm sm:text-base text-[#3a3a3a] leading-relaxed">
              {F.subhead}
            </p>
          </div>

          {isSubmitted ? (
            <div
              ref={successRef}
              tabIndex={-1}
              className="border-2 border-[#A71728]/25 bg-[#FAF7F5] p-5 sm:p-8 lg:p-10 space-y-5 sm:space-y-6 scroll-mt-24 sm:scroll-mt-28 outline-none"
            >
              <div className="text-center space-y-3">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[#A71728] mx-auto" />
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">
                  {F.successTitle}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
                  {F.successBody.replace("{name}", fullName)}
                </p>
              </div>
              <ul className="space-y-3 max-w-lg mx-auto">
                {F.successNext.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700"
                  >
                    <CheckCircle className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
              <p
                className="text-center text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-[#A71728]/70 pt-2 px-2"
                style={{ fontFamily: "var(--font-japanese), sans-serif" }}
              >
                {F.successFooter}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  {F.fullName} *
                </label>
                <input
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={fieldClass}
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="mobile" className={labelClass}>
                  {F.mobile} *
                </label>
                <input
                  id="mobile"
                  required
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className={fieldClass}
                  autoComplete="tel"
                />
              </div>

              <FormSelect
                id="district"
                label={F.district}
                required
                searchable
                value={district}
                onChange={setDistrict}
                placeholder={F.districtPlaceholder}
                options={BD_DISTRICTS.map((d) => ({ value: d, label: d }))}
              />

              <fieldset>
                <legend className={labelClass}>{F.jpCourse} *</legend>
                <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-2">
                  {(
                    [
                      [F.yes, F.yesLabel],
                      [F.currentlyStudying, F.currentlyStudyingLabel],
                      [F.no, F.noLabel],
                    ] as const
                  ).map(([value, label]) => (
                    <label key={value} className={chipClass(jpCourse === value)}>
                      <input
                        type="radio"
                        name="jpCourse"
                        required
                        className="sr-only"
                        checked={jpCourse === value}
                        onChange={() => setJpCourse(value)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <FormSelect
                id="jpLevel"
                label={F.jpLevel}
                required
                value={jpLevel}
                onChange={setJpLevel}
                options={F.levels.map((level) => ({
                  value: level,
                  label: level,
                }))}
              />

              <fieldset>
                <legend className={labelClass}>{F.skillAssessment} *</legend>
                <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-2">
                  {(
                    [
                      [F.yes, F.yesLabel],
                      [F.currentlyStudying, F.currentlyStudyingLabel],
                      [F.no, F.noLabel],
                    ] as const
                  ).map(([value, label]) => (
                    <label
                      key={value}
                      className={chipClass(skillAssessment === value)}
                    >
                      <input
                        type="radio"
                        name="skillAssessment"
                        required
                        className="sr-only"
                        checked={skillAssessment === value}
                        onChange={() => setSkillAssessment(value)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className={labelClass}>{F.interviewInterest} *</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(
                    [
                      [F.yes, F.yesLabel],
                      [F.needInfo, F.needInfoLabel],
                    ] as const
                  ).map(([value, label]) => (
                    <label
                      key={value}
                      className={chipClass(interviewInterest === value)}
                    >
                      <input
                        type="radio"
                        name="interviewInterest"
                        required
                        className="sr-only"
                        checked={interviewInterest === value}
                        onChange={() => setInterviewInterest(value)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <FormSelect
                id="category"
                label={F.category}
                required
                value={category}
                onChange={setCategory}
                options={F.categoryOptions.map((opt) => ({
                  value: opt,
                  label: opt,
                }))}
              />

              <fieldset>
                <legend className={labelClass}>{F.practicalReady} *</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {F.practicalOptions.map((opt, i) => (
                    <label
                      key={opt}
                      className={chipClass(practicalReady === opt)}
                    >
                      <input
                        type="radio"
                        name="practicalReady"
                        required
                        className="sr-only"
                        checked={practicalReady === opt}
                        onChange={() => setPracticalReady(opt)}
                      />
                      {F.practicalLabels[i] ?? opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              <DoorButton
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
              >
                {isSubmitting ? (
                  F.submitting
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {F.submit}
                  </>
                )}
              </DoorButton>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
