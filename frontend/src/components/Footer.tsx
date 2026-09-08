"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  CONTACT_EMAIL,
  CONTACT_PHONES,
  MAILTO_URL,
  WHATSAPP_URL,
} from "@/data/contact";

export default function Footer() {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-white text-neutral-800 border-t border-neutral-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: BRAND & COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-200">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#home" className="inline-block" aria-label="KTTI home">
              <Image
                src="/ktti-logo.png"
                alt="KTTI — Kawaii Tredmig Training Institute"
                width={200}
                height={66}
                className="h-12 w-auto"
                style={{ width: "auto" }}
              />
            </Link>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {t.footer.blurb}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-none bg-neutral-100 hover:bg-[#A71728] border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-none bg-neutral-100 hover:bg-[#A71728] border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-none bg-neutral-100 hover:bg-[#A71728] border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-none bg-neutral-100 hover:bg-[#A71728] border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#A71728] uppercase">
              {t.footer.quickNav}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              {t.footer.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#A71728] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#A71728] uppercase">
              {t.footer.sswDisciplines}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              {t.footer.disciplines.map((discipline) => (
                <li key={discipline}>{discipline}</li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#A71728] uppercase">
              {t.footer.contactHeading}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {CONTACT_PHONES.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="hover:text-[#A71728] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A71728] shrink-0" />
                <a href={MAILTO_URL} className="hover:text-[#A71728] transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-[#A71728] font-semibold hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* LOCATIONS */}
        <div className="py-12 border-b border-neutral-200">
          <h4 className="text-xs font-mono font-bold tracking-widest text-[#A71728] uppercase mb-6">
            {t.footer.locationsHeading}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.footer.locations.map((location) => (
              <div key={location.name} className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A71728] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-neutral-900">{location.name}</p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    {location.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW: COPYRIGHT & SCROLL TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            {t.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-500">
              {t.footer.authorized}
            </span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-none bg-neutral-100 hover:bg-[#A71728] border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-white transition-all cursor-pointer shadow-sm"
              aria-label={t.footer.scrollTopAria}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
