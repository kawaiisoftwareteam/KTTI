"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getLeaderBySlug, getLeaders, type LeaderProfile } from "@/data/leaders";

function initials(name: string) {
  return name
    .replace(/^(Md\.?|Captain|S\.\s*M\.)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function roleLabel(
  role: LeaderProfile["role"],
  labels: {
    roleExecutive: string;
    roleCoo: string;
    rolePartner: string;
  }
) {
  if (role === "coo") return labels.roleCoo;
  if (role === "partner") return labels.rolePartner;
  return labels.roleExecutive;
}

function Portrait({
  leader,
  className,
  priority = false,
}: {
  leader: LeaderProfile;
  className?: string;
  priority?: boolean;
}) {
  if (leader.image) {
    return (
      <Image
        src={leader.image}
        alt={`${leader.name}, ${leader.title} at Kawaii Tredmig Training Institute`}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 480px"
        className={`object-cover object-top ${className ?? ""}`}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-neutral-800 text-[#A71728] font-black tracking-tight text-5xl sm:text-6xl ${className ?? ""}`}
      role="img"
      aria-label={`${leader.name}, ${leader.title}`}
    >
      {initials(leader.name)}
    </div>
  );
}

export default function LeaderProfilePage({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const page = t.aboutPage;
  const leader = getLeaderBySlug(slug, lang);
  const others = getLeaders(lang).filter((item) => item.slug !== slug);

  if (!leader) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-neutral-950">Leader not found</h1>
          <Link
            href="/leadership/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#A71728] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            {page.leadership.profile.backLabel}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#F3F4F6] text-neutral-950 border-b border-neutral-200">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(167,23,40,0.12) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(0,0,0,0.04) 80px, rgba(0,0,0,0.04) 81px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 mb-10"
          >
            <Link
              href="/about/"
              className="hover:text-[#A71728] transition-colors"
            >
              {page.leadership.profile.breadcrumbAbout}
            </Link>
            <span aria-hidden>/</span>
            <Link
              href="/leadership/"
              className="hover:text-[#A71728] transition-colors"
            >
              {page.leadership.profile.breadcrumbLeadership}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-800">{leader.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728] mb-4">
                {roleLabel(leader.role, page.leadership.profile)}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                {leader.name}
              </h1>
              <p className="mt-4 text-sm sm:text-base font-mono font-bold tracking-wider uppercase text-[#A71728]">
                {leader.title}
              </p>
              <p className="mt-6 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
                {leader.bio}
              </p>
              <Link
                href="/leadership/"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-wide text-neutral-600 hover:text-[#A71728] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {page.leadership.profile.backLabel}
              </Link>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[5/4] max-h-[70vh] w-full overflow-hidden bg-neutral-200 border border-neutral-300">
                <Portrait leader={leader} priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {leader.pullQuote && (
        <section className="bg-white border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <blockquote className="border-l-4 border-[#A71728] pl-6 sm:pl-8">
              <Quote className="w-7 h-7 text-[#A71728] mb-4" aria-hidden />
              <p className="text-xl sm:text-2xl font-medium text-neutral-900 leading-relaxed italic">
                “{leader.pullQuote}”
              </p>
              <cite className="mt-4 block text-sm font-bold text-neutral-500 not-italic">
                — {leader.name}
              </cite>
            </blockquote>
          </div>
        </section>
      )}

      <section className="py-16 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728] mb-8">
            {page.leadership.profile.otherLeaders}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {others.map((person) => (
              <Link
                key={person.slug}
                href={`/leadership/${person.slug}`}
                className="group block bg-white border border-neutral-200 hover:border-[#A71728]/40 transition-colors"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                  <Portrait leader={person} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
                <div className="p-3 sm:p-4 space-y-1">
                  <p className="text-sm sm:text-base font-bold text-neutral-950 leading-snug group-hover:text-[#A71728] transition-colors">
                    {person.name}
                  </p>
                  <p className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-neutral-500 line-clamp-2">
                    {person.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
