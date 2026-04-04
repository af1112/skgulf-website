"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animClass, setAnimClass] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const d = delay > 0 ? ` reveal-d${Math.min(delay, 4)}` : "";
          setAnimClass(`reveal-animate${d}`);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);

    const fallback = setTimeout(() => {
      setAnimClass((prev) => prev || "reveal-animate");
    }, 4000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`${animClass}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
