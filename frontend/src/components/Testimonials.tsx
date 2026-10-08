"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/data/content";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AUTO_MS = 4000;

export default function Testimonials() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const testimonials = t.testimonials.items.map((item, idx) => ({
    ...item,
    image: TESTIMONIALS[idx].image,
    rating: TESTIMONIALS[idx].rating,
  }));

  const goTo = (nextIndex: number, dir: number) => {
    setDirection(dir);
    setCurrentIndex(nextIndex);
  };

  const next = () => goTo((currentIndex + 1) % testimonials.length, 1);
  const prev = () =>
    goTo((currentIndex - 1 + testimonials.length) % testimonials.length, -1);

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((i) => (i + 1) % testimonials.length);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, testimonials.length, currentIndex]);

  const current = testimonials[currentIndex];
  const offset = reduceMotion ? 0 : 40;

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir * offset,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir * -offset,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-28 bg-neutral-50 text-neutral-900 overflow-hidden border-y border-neutral-200"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -left-24 top-1/3 w-72 h-72 bg-[#A71728]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <motion.span
                className="h-[3px] bg-[#A71728]"
                initial={reduceMotion ? false : { width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#A71728] uppercase font-mono">
                {t.testimonials.eyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-neutral-950 uppercase">
              {t.testimonials.title}{" "}
              <span className="text-[#A71728]">{t.testimonials.titleAccent}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-neutral-400 tabular-nums mr-2">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={prev}
              className="w-11 h-11 border border-neutral-300 bg-white hover:border-neutral-900 flex items-center justify-center text-neutral-700 hover:text-black transition-colors cursor-pointer"
              aria-label={t.testimonials.prevAria}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-11 h-11 bg-[#A71728] hover:bg-[#86101E] flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label={t.testimonials.nextAria}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#A71728]/35 bg-white overflow-hidden"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] bg-neutral-100 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.image}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.image}
                  alt={current.name}
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
                <p className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase text-white">
                  {current.location}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-14 border-t lg:border-t-0 lg:border-l border-neutral-200 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: reduceMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between flex-1 min-h-0"
              >
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5" aria-hidden>
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 h-1.5 bg-[#A71728]"
                          initial={reduceMotion ? false : { scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.12 + i * 0.05, duration: 0.2 }}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-neutral-500">
                      {t.testimonials.verifiedBadge}
                    </span>
                  </div>

                  <blockquote className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-neutral-800 leading-relaxed tracking-tight">
                    <span className="text-[#A71728] font-serif text-3xl leading-none mr-1">
                      “
                    </span>
                    {current.quote}
                  </blockquote>
                </div>

                <div className="mt-10 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
                      {current.name}
                    </h3>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
                      {t.testimonials.programCompleted}
                    </p>
                    <p className="mt-1 text-sm font-bold text-neutral-800">
                      {current.program}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex gap-2" role="tablist" aria-label="Reviews">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={item.name}
                  onClick={() => goTo(idx, idx > currentIndex ? 1 : -1)}
                  className="relative h-1 flex-1 max-w-16 bg-neutral-200 hover:bg-neutral-300 transition-colors cursor-pointer overflow-hidden"
                >
                  {idx === currentIndex && (
                    <motion.span
                      layoutId="review-progress"
                      className="absolute inset-0 bg-[#A71728]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
