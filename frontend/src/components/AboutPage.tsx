"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, Plus, Minus } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import DoorLink from "@/components/DoorLink";
import { useLanguage } from "@/i18n/LanguageContext";
import { useApplyModal } from "@/contexts/ApplyModalContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const { openApply } = useApplyModal();
  const page = t.aboutPage;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const leadershipPreview = [
    ...page.leadership.executives.slice(0, 4).map((e) => ({
      name: e.name,
      image: e.image,
      slug: e.slug,
    })),
    {
      name: page.leadership.coo.name,
      image: page.leadership.coo.image,
      slug: page.leadership.coo.slug,
    },
  ];

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
              href="/leadership/"
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

      {/* LEADERSHIP TEASER → dedicated /leadership page */}
      <section id={page.leadership.id} className="py-20 lg:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950">
                {page.leadership.h2}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                {page.leadership.index.aboutTeaser}
              </p>
              <DoorLink
                href="/leadership/"
                className="inline-flex px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
              >
                {page.leadership.index.aboutCta}
              </DoorLink>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {leadershipPreview.map((person) => (
                  <Link
                    key={person.slug}
                    href={`/leadership/${person.slug}`}
                    className="relative aspect-[3/4] overflow-hidden bg-neutral-100 border border-neutral-200 hover:border-[#A71728]/50 transition-colors"
                    aria-label={person.name}
                  >
                    {person.image && (
                      <Image
                        src={person.image}
                        alt=""
                        fill
                        sizes="120px"
                        className="object-cover object-top"
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
