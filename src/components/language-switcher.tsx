"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageSwitcher() {
  const { locale, toggle } = useLanguage();

  return (
    <button
      type="button"
      className="lang-switcher"
      onClick={toggle}
      aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
    >
      <span className={`lang-option${locale === "en" ? " active" : ""}`}>EN</span>
      <span className="lang-divider" />
      <span className={`lang-option${locale === "ar" ? " active" : ""}`}>عربي</span>
    </button>
  );
}
