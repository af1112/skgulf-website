"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, translations } from "./translations";

type TranslationSet = (typeof translations)[Locale];

type LanguageContextType = {
  locale: Locale;
  t: TranslationSet;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggle }}>
      <div dir={t.dir} lang={locale}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
