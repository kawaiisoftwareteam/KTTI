"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Lang, type Translations } from "./translations";
import { bnTranslations } from "./bnTranslations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ktti-lang";

function getTranslations(lang: Lang): Translations {
  if (lang === "bn") return bnTranslations;
  if (lang === "jp") return translations.jp as unknown as Translations;
  return translations.en;
}

function htmlLang(lang: Lang) {
  if (lang === "jp") return "ja";
  if (lang === "bn") return "bn";
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "bn" || saved === "jp") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang(lang);
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: getTranslations(lang),
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
