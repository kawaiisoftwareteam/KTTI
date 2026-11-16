"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import JapaneseCourseRegistrationForm from "@/components/JapaneseCourseRegistrationForm";
import {
  JAPANESE_COURSE_PACKAGES,
  japaneseCoursePath,
  type JapaneseCoursePackage,
} from "@/data/japaneseCourseRegistrations";

function FeeTable({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <dl className="divide-y divide-[#E8D5D5] border border-[#E8D5D5] bg-[#FAF7F5]">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-1 sm:grid-cols-[minmax(0,10rem)_1fr] gap-1 sm:gap-3 px-3.5 py-2.5 sm:px-4"
        >
          <dt className="text-xs sm:text-sm font-bold text-[#A71728]">
            {row.label}
          </dt>
          <dd className="text-sm text-neutral-800 leading-relaxed">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

type Props = {
  course: JapaneseCoursePackage;
  courseIndex: number;
};

export default function JapaneseCourseDetailPage({
  course,
  courseIndex,
}: Props) {
  return (
    <div
      className="pt-14 min-[400px]:pt-16 sm:pt-[4.25rem] lg:pt-[6.75rem] pb-14 sm:pb-20 overflow-x-hidden"
      style={{ fontFamily: "var(--font-bengali), sans-serif" }}
    >
      <section className="bg-[#FAF7F5] border-b border-[#E8D5D5]">
        <div className="max-w-6xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-8 min-[400px]:py-10 sm:py-12">
          <Link
            href="/courses/japanese-language-courses/"
            className="inline-flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-[#A71728] mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            সব কোর্স
          </Link>
          <p className="text-xs font-bold tracking-widest uppercase text-[#A71728] mb-2">
            কোর্স {String(courseIndex + 1).padStart(2, "0")} · KTTI
          </p>
          <h1 className="text-xl min-[400px]:text-2xl sm:text-3xl font-black tracking-tight leading-snug max-w-3xl text-neutral-950">
            {course.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
            {course.intro}
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-[#E8D5D5]">
        <div className="max-w-6xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 py-8 min-[400px]:py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div className="min-w-0 space-y-5 order-2 lg:order-1">
              <div>
                <h2 className="text-sm font-black text-neutral-950 mb-2">
                  কোর্সের বিস্তারিত
                </h2>
                <FeeTable rows={course.details} />
              </div>

              {course.payment && (
                <div>
                  <h2 className="text-sm font-black text-neutral-950 mb-2">
                    পেমেন্ট পদ্ধতি
                  </h2>
                  <FeeTable rows={course.payment} />
                </div>
              )}

              {course.skillBlock && (
                <div>
                  <h2 className="text-sm font-black text-neutral-950 mb-2">
                    {course.skillBlock.title}
                  </h2>
                  <FeeTable rows={course.skillBlock.rows} />
                </div>
              )}

              <p className="text-sm text-neutral-700 leading-relaxed border-l-2 border-[#A71728] pl-3">
                {course.cta}
              </p>
              <p className="text-xs text-neutral-500">
                সব কোর্স ফি নন-রিফান্ডেবল।
              </p>

              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  অন্যান্য কোর্স
                </p>
                <div className="flex flex-wrap gap-2">
                  {JAPANESE_COURSE_PACKAGES.filter((p) => p.id !== course.id).map(
                    (pkg) => (
                      <Link
                        key={pkg.id}
                        href={japaneseCoursePath(pkg.id)}
                        className="inline-flex min-h-9 items-center border border-[#E8D5D5] bg-white px-3 text-xs font-bold text-neutral-700 hover:border-[#A71728] hover:text-[#A71728]"
                      >
                        {pkg.shortTitle}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>

            <div
              id="register"
              className="bg-white border border-[#E8D5D5] p-4 min-[400px]:p-5 sm:p-7 min-w-0 self-start order-1 lg:order-2 lg:sticky lg:top-28 scroll-mt-28"
            >
              <h2 className="text-lg sm:text-xl font-black text-neutral-950 mb-1">
                রেজিস্ট্রেশন ফর্ম
              </h2>
              <p className="text-sm text-neutral-600 mb-5">{course.shortTitle}</p>
              <JapaneseCourseRegistrationForm course={course} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
