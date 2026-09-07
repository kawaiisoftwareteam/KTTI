"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/content";
import { ChevronLeft, ChevronRight, Quote, Star, MapPin, Building, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  // Photos and ratings are language-independent, so they come from the content source.
  const testimonials = t.testimonials.items.map((item, idx) => ({
    ...item,
    image: TESTIMONIALS[idx].image,
    rating: TESTIMONIALS[idx].rating,
  }));

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 lg:py-36 bg-white text-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER: LARGE & PROMINENT */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[3px] bg-[#A71728]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#A71728] uppercase font-mono">
                {t.testimonials.eyebrow}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-neutral-950 uppercase">
              {t.testimonials.title} <br />
              <span className="text-[#A71728]">{t.testimonials.titleAccent}</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-none border border-neutral-300 hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-black transition-all cursor-pointer"
              aria-label={t.testimonials.prevAria}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-none bg-[#A71728] hover:bg-[#86101E] flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
              aria-label={t.testimonials.nextAria}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ACTIVE TESTIMONIAL CARD: HIGHLY ORGANIZED & DESIGNABLE LIGHT THEME */}
        <div className="bg-neutral-50 text-neutral-900 rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-200/90 shadow-xl relative overflow-hidden">
          <Quote className="absolute right-8 bottom-8 w-44 h-44 text-neutral-900/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Student Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-xl border-2 border-[#A71728]/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-xl text-xs font-bold text-white border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#A71728]" />
                  <span>{current.location}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Quote & Info */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-[#A71728]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-mono font-bold text-neutral-500 ml-2">
                  {t.testimonials.verifiedBadge}
                </span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-800 leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-2xl font-black text-neutral-950">
                    {current.name}
                  </h4>
                  <p className="text-sm text-[#A71728] font-bold mt-0.5">
                    {current.role}
                  </p>
                </div>

                <div className="text-left sm:text-right bg-white px-4 py-2.5 rounded-xl border border-neutral-200/90 shadow-sm">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                    {t.testimonials.programCompleted}
                  </span>
                  <span className="text-xs font-bold text-neutral-900">
                    {current.program}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
