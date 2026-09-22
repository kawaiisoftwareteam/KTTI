"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONES,
  MAILTO_URL,
  WHATSAPP_URL,
} from "@/data/contact";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const campus = t.aboutPage.campus;

  return (
    <>
      <section className="relative overflow-hidden bg-[#F3F4F6] text-neutral-950 border-b border-neutral-200">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 30% 70%, rgba(167,23,40,0.12) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-14 sm:pb-16">
          <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728] mb-4">
            {t.footer.contactHeading}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            {t.nav.contact}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl">
            {t.footer.blurb}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
                <Phone className="w-4 h-4" />
                {t.nav.hotline}
              </div>
              <div className="flex flex-col gap-2">
                {CONTACT_PHONES.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="text-lg sm:text-xl font-bold text-neutral-950 hover:text-[#A71728] transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
                <Mail className="w-4 h-4" />
                Email
              </div>
              <a
                href={MAILTO_URL}
                className="text-lg sm:text-xl font-bold text-neutral-950 hover:text-[#A71728] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 bg-[#25D366] text-white text-sm font-bold tracking-wider uppercase hover:brightness-95 transition"
            >
              WhatsApp
            </a>
          </div>

          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-[#A71728]">
              {t.footer.locationsHeading}
            </h2>
            {[campus.training, campus.headOffice].map((loc) => (
              <div
                key={loc.name}
                className="border border-neutral-200 p-5 sm:p-6 space-y-2"
              >
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#A71728] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-neutral-950">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                      {loc.desc}
                    </p>
                    <p className="text-sm text-neutral-800 mt-3 leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Link
              href="/about/"
              className="inline-block text-sm font-bold text-[#A71728] hover:underline"
            >
              {t.about.learnMore}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
