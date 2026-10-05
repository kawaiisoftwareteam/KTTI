"use client";

import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getStub, type StubKey } from "@/i18n/stubPages";

export default function LocalizedPageIntro({
  page,
  tone = "white",
  compact = false,
}: {
  page: StubKey;
  tone?: "white" | "warm";
  compact?: boolean;
}) {
  const { lang } = useLanguage();
  const copy = getStub(lang, page);
  const bg = tone === "warm" ? "bg-[#FAF7F5]" : "bg-white";

  return (
    <div className={`pt-28 pb-16 ${compact ? "" : "min-h-screen"} ${bg}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-black text-[#A71728] mb-6">{copy.title}</h1>
        {copy.card ? (
          <div className="bg-white p-8 shadow-sm border border-neutral-200">
            <p className="text-neutral-700 mb-8">{copy.card}</p>
          </div>
        ) : (
          copy.body && <p className="text-neutral-700 mb-8">{copy.body}</p>
        )}
      </div>
    </div>
  );
}
