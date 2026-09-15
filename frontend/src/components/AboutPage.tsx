"use client";

import React, { useState } from "react";
import { Check, MapPin, Plus, Minus, Quote } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import DoorLink from "@/components/DoorLink";
import { useLanguage } from "@/i18n/LanguageContext";
import { useApplyModal } from "@/contexts/ApplyModalContext";

function initials(name: string) {
  return name
    .replace(/^(Md\.?|Captain)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function LeaderCard({
  name,
  title,
  bio,
  featured = false,
}: {
  name: string;
  title: string;
  bio: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex flex-col border border-neutral-200 bg-white ${
        featured ? "lg:col-span-2 lg:flex-row lg:gap-8 p-6 sm:p-8" : "p-5 sm:p-6"
      }`}
    >
      <div
        className={`shrink-0 bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[#A71728] font-black tracking-tight ${
          featured
            ? "w-28 h-28 sm:w-36 sm:h-36 text-3xl sm:text-4xl mb-5 lg:mb-0"
            : "w-full aspect-square max-h-48 mb-4 text-3xl"
        }`}
        role="img"
        aria-label={`${name}, ${title} at Kawaii Tredmig Training Institute (KTTI)`}
      >
        {initials(name)}
      </div>
      <div className="space-y-2 min-w-0">
        <h3 className="text-lg sm:text-xl font-bold text-neutral-950">{name}</h3>
        <p className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-[#A71728]">
          {title}
        </p>
        <p className="text-sm text-neutral-600 leading-relaxed">{bio}</p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();
  const { openApply } = useApplyModal();
  const page = t.aboutPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-end overflow-hidden bg-neutral-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
          alt={page.hero.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/35" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-36 sm:pb-20 sm:pt-44">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-[3px] bg-[#A71728]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-white/80 uppercase font-mono">
              {page.hero.eyebrow}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.02] text-white max-w-4xl">
            {page.hero.h1}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
            {page.hero.subhead}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <DoorLink
              href="#leadership"
              className="px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              {page.hero.ctaLeadership}
            </DoorLink>
            <DoorButton
              onClick={() => openApply()}
              variant="light"
              className="px-8 py-3.5 text-sm font-semibold tracking-wider uppercase"
            >
              {page.hero.ctaAdmissions}
            </DoorButton>
          </div>
        </div>
      </section>

      {/* GEO LEAD + FRESHNESS */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <p className="text-base sm:text-lg text-neutral-800 leading-relaxed max-w-4xl">
            {page.geoLead}
          </p>
          <p className="mt-4 text-xs font-mono font-bold tracking-widest uppercase text-neutral-400">
            {page.freshness}
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section id={page.story.id} className="py-20 lg:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
              {page.story.h2}
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              {page.story.p1}
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {page.story.p2}
            </p>
          </div>

          <div className="mt-14 lg:mt-16 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-4">
              {page.story.charterH3}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
              {page.story.charterIntro}
            </p>
            <ul className="space-y-3">
              {page.story.charterItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#A71728] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
              {page.story.charterOutro}
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 mb-12">
            {page.mission.h2}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
                {page.mission.missionLabel}
              </p>
              <p className="text-lg sm:text-xl font-medium text-neutral-900 leading-relaxed">
                {page.mission.mission}
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
                {page.mission.visionLabel}
              </p>
              <p className="text-lg sm:text-xl font-medium text-neutral-900 leading-relaxed">
                {page.mission.vision}
              </p>
            </div>
          </div>

          <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728] mb-5">
            {page.mission.valuesLabel}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {page.mission.values.map((value) => (
              <li
                key={value.title}
                className="border border-neutral-200 bg-white p-5 space-y-1"
              >
                <p className="font-bold text-neutral-950">{value.title}</p>
                <p className="text-sm text-neutral-600 leading-relaxed">{value.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id={page.leadership.id} className="py-20 lg:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
              {page.leadership.h2}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {page.leadership.subcopy}
            </p>
          </div>

          <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728] mb-6">
            {page.leadership.executivesHeading}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {page.leadership.executives.map((leader) => (
              <LeaderCard
                key={leader.slug}
                name={leader.name}
                title={leader.title}
                bio={leader.bio}
              />
            ))}
          </div>

          <div id={page.leadership.coo.id} className="scroll-mt-28 space-y-6">
            <LeaderCard
              name={page.leadership.coo.name}
              title={page.leadership.coo.title}
              bio={page.leadership.coo.bio}
              featured
            />
            <blockquote className="border-l-4 border-[#A71728] bg-neutral-50 px-6 py-5 sm:px-8 sm:py-6">
              <Quote className="w-6 h-6 text-[#A71728] mb-3" aria-hidden />
              <p className="text-lg sm:text-xl font-medium text-neutral-900 leading-relaxed italic">
                “{page.leadership.coo.pullQuote}”
              </p>
              <cite className="mt-3 block text-sm font-bold text-neutral-600 not-italic">
                — {page.leadership.coo.name}
              </cite>
            </blockquote>
          </div>

          <div className="mt-16 pt-12 border-t border-neutral-200">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3">
              {page.leadership.partners.h3}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-5 max-w-3xl">
              {page.leadership.partners.intro}
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base text-neutral-800">
              {page.leadership.partners.names.map((name) => (
                <li key={name} className="font-medium">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ACCREDITATION */}
      <section
        id={page.accreditation.id}
        className="py-20 lg:py-28 bg-[#F8F9FA] scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 mb-3">
            {page.accreditation.h2}
          </h2>
          <p className="text-sm font-mono text-neutral-500 mb-8">
            {page.accreditation.h2Question}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {page.accreditation.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white border border-neutral-200 p-5 text-sm sm:text-base text-neutral-700"
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

      {/* CAMPUS */}
      <section id={page.campus.id} className="py-20 lg:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 mb-3">
            {page.campus.h2}
          </h2>
          <p className="text-sm font-mono text-neutral-500 mb-10">
            {page.campus.h2Question}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[page.campus.training, page.campus.headOffice].map((loc) => (
              <div key={loc.name} className="border border-neutral-200 overflow-hidden">
                <div className="aspect-[16/10] bg-neutral-100">
                  <iframe
                    title={loc.name}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&z=15&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-neutral-950">{loc.name}</h3>
                      <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                        {loc.desc}
                      </p>
                      <p className="text-sm text-neutral-800 mt-3 leading-relaxed">
                        {loc.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id={page.careers.id} className="py-20 lg:py-24 bg-neutral-950 text-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-5">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {page.careers.h2}
            </h2>
            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              {page.careers.body}
            </p>
            <p className="text-xs font-mono tracking-widest uppercase text-white/40">
              {page.careers.seoNote}
            </p>
            <DoorButton
              onClick={() => openApply("Japanese Language Academy")}
              className="mt-2 px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              {page.careers.cta}
            </DoorButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id={page.faq.id} className="py-20 lg:py-28 bg-[#F8F9FA] scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#A71728] uppercase font-mono">
              {page.faq.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
              {page.faq.h2}
            </h2>
          </div>

          <div className="space-y-4">
            {page.faq.items.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white border border-neutral-200/80 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-neutral-900 hover:text-[#A71728] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#A71728] text-white"
                          : "bg-neutral-100 text-neutral-700"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
