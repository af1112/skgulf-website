"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ScrollReveal from "./scroll-reveal";
import { useLanguage } from "@/lib/language-context";

const capImages = [
  "/images/caps/construction.jpg",
  "/images/caps/interior.jpg",
  "/images/furniture work.webp",
  "/images/caps/ideation.jpg",
  "/images/design.webp",
  "/images/caps/automation.jpg",
  "/images/caps/software.jpg",
  "/images/energy.webp",
  "/images/caps/renewables.jpg",
  "/images/caps/pipelines.jpg",
  "/images/caps/integrity.jpg",
];

export default function CapabilityShowcase() {
  const { t } = useLanguage();
  const [activeIdx, setActiveIdx] = useState(0);

  const items = t.capabilities.items.map((item, i) => ({
    id: String(i + 1).padStart(2, "0"),
    title: item.title,
    description: item.description,
    bullet: item.bullet,
    image: capImages[i % capImages.length],
    projects: [
      {
        name: `${item.title} Project Alpha`,
        location: "Muscat, Oman",
        images: [
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
        ]
      }
    ]
  }));

  const activeItem = items[activeIdx];

  return (
    <div className="cap-container">
      <div className="cap-section-grid">
        <ScrollReveal>
          <div className="cap-tabs">
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`cap-tab${i === activeIdx ? " active" : ""}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className="cap-tab-num">{item.id}</span>
                <div className="cap-tab-info">
                  <h4>{item.title}</h4>
                  <p>{item.bullet}</p>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="cap-visual-wrapper">
          <ScrollReveal delay={2}>
            <div className="cap-visual">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                style={{ objectFit: "cover" }}
                key={activeItem.id}
                priority
              />
              <div className="cap-visual-overlay" />
              <div className="cap-visual-content">
                <h3>{activeItem.title}</h3>
                <p>{activeItem.description}</p>
                <a href="#contact" className="cap-visual-cta">
                  {t.capabilities.learnMore} →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {activeItem.projects && activeItem.projects.length > 0 && (
        <div className="cap-projects-section">
          <ScrollReveal>
            <div className="cap-projects-header">
              <span className="section-label">Executed Projects</span>
              <h3>Successful Delivery in {activeItem.title}</h3>
            </div>
          </ScrollReveal>

          <div className="cap-projects-grid">
            {activeItem.projects.map((project, pi) => (
              <ScrollReveal key={pi} delay={pi + 1}>
                <div className="cap-project-card">
                  <div className="cap-project-info">
                    <h4>{project.name}</h4>
                    <p className="cap-project-location">📍 {project.location}</p>
                  </div>
                  <div className="cap-project-gallery">
                    {project.images.map((img, imgI) => (
                      <div key={imgI} className="cap-project-img-wrapper">
                        <Image
                          src={img}
                          alt={`${project.name} gallery ${imgI + 1}`}
                          width={400}
                          height={300}
                          className="cap-project-img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
