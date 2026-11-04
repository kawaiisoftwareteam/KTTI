"use client";

import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const FONT_HREFS: Record<Lang, string> = {
  en: "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700;900&display=swap",
  bn: "https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;600;700&family=Jost:wght@400;500;700;900&display=swap",
  jp: "https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700;900&family=Noto+Sans+JP:wght@400;500;700&display=swap",
};

const loaded = new Set<string>();

function ensureStylesheet(href: string) {
  if (loaded.has(href) || typeof document === "undefined") return;
  if (document.querySelector(`link[data-ktti-font="${href}"]`)) {
    loaded.add(href);
    return;
  }
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.kttiFont = href;
  document.head.appendChild(link);
  loaded.add(href);
}

/** Loads only the active language font pack (non-blocking). */
export default function FontLoader() {
  const { lang } = useLanguage();

  useEffect(() => {
    ensureStylesheet(FONT_HREFS.en);
  }, []);

  useEffect(() => {
    ensureStylesheet(FONT_HREFS[lang]);
  }, [lang]);

  return null;
}
