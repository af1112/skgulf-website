"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/lib/language-context";

export default function NavBar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#top", label: t.nav.about },
    { href: "#markets", label: t.nav.markets },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#technologies", label: t.nav.technologies },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="nav-logo">
            <Image src="/images/logo.png" alt="SK-GULF" width={140} height={42} priority />
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav-cta">
            <LanguageSwitcher />
            <a href="#contact" className="btn btn-primary">
              {t.nav.getInTouch}
            </a>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-overlay${mobileOpen ? " open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
        <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
          <button
            className="mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            ✕
          </button>

          <div className="mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-cta">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="btn btn-primary btn-lg"
              style={{ width: "100%" }}
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
