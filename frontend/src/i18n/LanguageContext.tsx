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

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ktti-lang";

function htmlLang(lang: Lang) {
  if (lang === "jp") return "ja";
  if (lang === "bn") return "bn";
  return "en";
}

async function loadTranslations(lang: Lang): Promise<Translations> {
  if (lang === "bn") {
    const { bnTranslations } = await import("./bnTranslations");
    return bnTranslations;
  }
  if (lang === "jp") {
    return translations.jp as unknown as Translations;
  }
  return translations.en;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [t, setT] = useState<Translations>(translations.en);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "bn" || saved === "jp") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = htmlLang(lang);
    document.documentElement.dataset.lang = lang;
    let cancelled = false;
    void loadTranslations(lang).then((pack) => {
      if (!cancelled) setT(pack);
    });
    return () => {
      cancelled = true;
    };
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
    }),
    [lang, setLang, t]
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
