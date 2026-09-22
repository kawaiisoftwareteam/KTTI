"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function initials(name: string) {
  return name
    .replace(/^(Md\.?|Captain|S\.\s*M\.)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function LeaderCard({
  name,
  title,
  slug,
  image,
  featured = false,
  viewLabel,
}: {
  name: string;
  title: string;
  slug: string;
  image?: string;
  featured?: boolean;
  viewLabel: string;
}) {
  const href = `/leadership/${slug}`;

  return (
    <Link
      href={href}
      className={`group flex flex-col border border-neutral-200 bg-white transition-colors hover:border-[#A71728]/40 ${
        featured ? "lg:col-span-2 lg:flex-row lg:gap-8 p-6 sm:p-8" : "p-5 sm:p-6"
      }`}
      aria-label={`${name}, ${title} at Kawaii Tredmig Training Institute (KTTI)`}
    >
      <div
        className={`relative shrink-0 overflow-hidden bg-neutral-100 border border-neutral-200 ${
          featured
            ? "w-full sm:w-40 lg:w-48 aspect-[3/4] mb-5 lg:mb-0"
            : "w-full aspect-[3/4] max-h-56 mb-4"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes={featured ? "192px" : "(max-width: 640px) 100vw, 280px"}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#A71728] font-black tracking-tight text-3xl sm:text-4xl">
            {initials(name)}
          </div>
        )}
      </div>
      <div className="space-y-2 min-w-0 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-neutral-950 group-hover:text-[#A71728] transition-colors">
          {name}
        </h3>
        <p className="text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-[#A71728]">
          {title}
        </p>
        <p className="inline-flex items-center gap-1.5 pt-2 text-xs font-bold tracking-wider uppercase text-neutral-800 group-hover:text-[#A71728] transition-colors mt-auto">
          {viewLabel}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </p>
      </div>
    </Link>
  );
}

export function PartnerCard({
  name,
  title,
  slug,
  image,
  viewLabel,
}: {
  name: string;
  title: string;
  slug: string;
  image?: string;
  viewLabel: string;
}) {
  const href = `/leadership/${slug}`;

  return (
    <Link
      href={href}
      className="group block border border-neutral-200 bg-white hover:border-[#A71728]/40 transition-colors"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, 220px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[#A71728] font-black tracking-tight text-3xl">
            {initials(name)}
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4 space-y-1">
        <p className="text-sm sm:text-base font-bold text-neutral-950 leading-snug group-hover:text-[#A71728] transition-colors">
          {name}
        </p>
        <p className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase text-neutral-500">
          {title}
        </p>
        <p className="inline-flex items-center gap-1 pt-1 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-neutral-700 group-hover:text-[#A71728] transition-colors">
          {viewLabel}
          <ArrowUpRight className="w-3 h-3" />
        </p>
      </div>
    </Link>
  );
}
