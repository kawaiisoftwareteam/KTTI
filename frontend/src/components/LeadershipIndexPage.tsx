"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LeaderCard, PartnerCard } from "@/components/leadership/LeaderCards";
import { useLanguage } from "@/i18n/LanguageContext";

export default function LeadershipIndexPage() {
  const { t } = useLanguage();
  const page = t.aboutPage;
  const L = page.leadership;
  const preview = [
    ...L.executives.slice(0, 3).map((e) => e.image),
    L.coo.image,
  ].filter(Boolean) as string[];

  return (
    <>
      <section className="relative overflow-hidden bg-[#F3F4F6] text-neutral-950 border-b border-neutral-200">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 90% 10%, rgba(167,23,40,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(167,23,40,0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 72px, rgba(0,0,0,0.04) 72px, rgba(0,0,0,0.04) 73px)",
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
              {L.profile.breadcrumbAbout}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-800">
              {L.profile.breadcrumbLeadership}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
                {L.index.eyebrow}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                {L.index.h1}
              </h1>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                {L.index.subhead}
              </p>
            </div>

            {preview.length > 0 && (
              <div className="lg:col-span-5 flex justify-start lg:justify-end">
                <div className="flex -space-x-4 sm:-space-x-5">
                  {preview.map((src, i) => (
                    <div
                      key={src}
                      className="relative w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border-2 border-white bg-neutral-200 shadow-sm"
                      style={{ zIndex: preview.length - i }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
              {L.executivesHeading}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              {L.subcopy}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {L.executives.map((leader) => (
              <LeaderCard
                key={leader.slug}
                name={leader.name}
                title={leader.title}
                slug={leader.slug}
                image={leader.image}
                viewLabel={L.profile.viewProfile}
              />
            ))}
            <LeaderCard
              name={L.coo.name}
              title={L.coo.title}
              slug={L.coo.slug}
              image={L.coo.image}
              viewLabel={L.profile.viewProfile}
              featured
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 mb-3">
            {L.partners.h3}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8 max-w-3xl">
            {L.partners.intro}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {L.partners.members.map((partner) => (
              <PartnerCard
                key={partner.slug}
                name={partner.name}
                title={partner.title}
                slug={partner.slug}
                image={"image" in partner ? partner.image : undefined}
                viewLabel={L.profile.viewProfile}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
