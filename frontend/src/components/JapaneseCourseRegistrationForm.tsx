"use client";

import React, { useState } from "react";
import { CheckCircle, Send } from "lucide-react";
import DoorButton from "@/components/DoorButton";
import {
  COURSE_INTEREST_OPTIONS,
  type CourseInterest,
  type JapaneseCourseId,
  type JapaneseCoursePackage,
  submitJapaneseCourseRegistration,
} from "@/data/japaneseCourseRegistrations";

const fieldClass =
  "w-full min-h-12 border border-[#E8D5D5] bg-white px-3.5 sm:px-4 py-3 text-base sm:text-sm text-[#1a1a1a] placeholder:text-neutral-400 outline-none focus:border-[#A71728] transition-colors";
const labelClass =
  "block text-sm font-semibold text-[#2a2a2a] mb-2 leading-snug";

type Props = {
  course: JapaneseCoursePackage;
};

export default function JapaneseCourseRegistrationForm({ course }: Props) {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [priorJapanese, setPriorJapanese] = useState<"yes" | "no" | "">("");
  const [interest, setInterest] = useState<CourseInterest | "">("");
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const idPrefix = `jp-${course.id}`;

  const reset = () => {
    setFullName("");
    setMobile("");
    setEmail("");
    setAddress("");
    setPriorJapanese("");
    setInterest("");
    setComments("");
    setIsSubmitted(false);
    setSubmitError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!priorJapanese) return;
    if (course.showInterest && !interest) return;

    setIsSubmitting(true);
    setSubmitError(false);
    try {
      await submitJapaneseCourseRegistration({
        courseId: course.id as JapaneseCourseId,
        fullName,
        mobile,
        email: email.trim() || undefined,
        address,
        priorJapanese,
        interest: course.showInterest
          ? (interest as CourseInterest)
          : undefined,
        comments: comments.trim() || undefined,
      });
      setIsSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4 py-6">
        <CheckCircle className="w-12 h-12 text-[#A71728] mx-auto" aria-hidden />
        <h3 className="text-xl sm:text-2xl font-black text-neutral-950">
          ধন্যবাদ!
        </h3>
        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-md mx-auto">
          আমাদের প্রতিনিধি শীঘ্রই আপনার সঙ্গে যোগাযোগ করবেন।
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center justify-center border border-[#A71728] px-5 text-sm font-bold text-[#A71728] hover:bg-[#A71728] hover:text-white"
        >
          আবার ফর্ম পূরণ করুন
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="course_id" value={course.id} readOnly />
      <input type="hidden" name="course_name" value={course.title} readOnly />

      <div>
        <label htmlFor={`${idPrefix}-name`} className={labelClass}>
          পূর্ণ নাম *
        </label>
        <input
          id={`${idPrefix}-name`}
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={fieldClass}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-mobile`} className={labelClass}>
          মোবাইল নম্বর *
        </label>
        <input
          id={`${idPrefix}-mobile`}
          required
          type="tel"
          inputMode="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className={fieldClass}
          autoComplete="tel"
          placeholder="01XXXXXXXXX"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className={labelClass}>
          ইমেইল (ঐচ্ছিক)
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-address`} className={labelClass}>
          বর্তমান ঠিকানা *
        </label>
        <textarea
          id={`${idPrefix}-address`}
          required
          rows={2}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={`${fieldClass} min-h-[4.5rem] resize-y`}
          autoComplete="street-address"
        />
      </div>

      <fieldset>
        <legend className={labelClass}>
          আগে জাপানিজ ভাষা শিখেছেন কি না *
        </legend>
        <div className="flex flex-wrap gap-3">
          {(
            [
              { value: "yes", label: "হ্যাঁ" },
              { value: "no", label: "না" },
            ] as const
          ).map((opt) => {
            const active = priorJapanese === opt.value;
            return (
              <label
                key={opt.value}
                className={`inline-flex min-h-11 cursor-pointer items-center border px-4 text-sm font-bold ${
                  active
                    ? "border-[#A71728] bg-[#A71728] text-white"
                    : "border-neutral-200 bg-white text-neutral-900 hover:bg-[#FAF7F5]"
                }`}
              >
                <input
                  type="radio"
                  name={`${idPrefix}-prior`}
                  required
                  className="sr-only"
                  checked={active}
                  onChange={() => setPriorJapanese(opt.value)}
                />
                {opt.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      {course.showInterest && (
        <fieldset>
          <legend className={labelClass}>কোন কোর্স করতে চান *</legend>
          <div className="flex flex-col gap-2.5">
            {COURSE_INTEREST_OPTIONS.map((opt) => {
              const active = interest === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex min-h-11 cursor-pointer items-center border px-4 py-3 text-sm font-bold ${
                    active
                      ? "border-[#A71728] bg-[#A71728] text-white"
                      : "border-neutral-200 bg-white text-neutral-900 hover:bg-[#FAF7F5]"
                  }`}
                >
                  <input
                    type="radio"
                    name={`${idPrefix}-interest`}
                    required
                    className="sr-only"
                    checked={active}
                    onChange={() => setInterest(opt.value)}
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      <div>
        <label htmlFor={`${idPrefix}-comments`} className={labelClass}>
          মন্তব্য (ঐচ্ছিক)
        </label>
        <textarea
          id={`${idPrefix}-comments`}
          rows={3}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className={`${fieldClass} min-h-[5rem] resize-y`}
        />
      </div>

      {submitError && (
        <p className="text-sm font-semibold text-[#A71728]" role="alert">
          জমা দিতে সমস্যা হয়েছে। আবার চেষ্টা করুন।
        </p>
      )}

      <DoorButton
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-3.5 text-sm font-bold tracking-wider"
      >
        {isSubmitting ? (
          "জমা হচ্ছে..."
        ) : (
          <>
            <Send className="w-4 h-4" />
            জমা দিন
          </>
        )}
      </DoorButton>
    </form>
  );
}
