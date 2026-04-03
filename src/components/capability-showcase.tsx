"use client";

import { useMemo, useState } from "react";

type CapabilityItem = {
  id: string;
  title: string;
  description: string;
  bullet: string;
  image: string;
};

const capabilityItems: CapabilityItem[] = [
  {
    id: "01",
    title: "Energy & Chemicals",
    description: "Integrated contracting and execution support for upstream, downstream, and specialty process environments.",
    bullet: "Brownfield upgrades, construction planning, and zero-compromise safety orchestration.",
    image: "/images/capability-01.jpg",
  },
  {
    id: "02",
    title: "Renewables, Power & Water",
    description: "Utility-scale solar, wind, and power-water infrastructure delivered with schedule and lifecycle focus.",
    bullet: "From site readiness and civil works to handover support and performance optimization.",
    image: "/images/capability-02.jpg",
  },
  {
    id: "03",
    title: "Pipelines & Flow Systems",
    description: "Pipeline integrity, route execution, and mechanical scope delivery for critical transmission assets.",
    bullet: "Execution-grade planning for reliability, safety, and long-term operational confidence.",
    image: "/images/capability-03.jpg",
  },
  {
    id: "04",
    title: "Buildings & Industrial Facilities",
    description: "Civil, MEP, and construction services for high-performance industrial and operational buildings.",
    bullet: "Constructability-led design support and multidisciplinary site delivery.",
    image: "/images/capability-04.jpg",
  },
  {
    id: "05",
    title: "Asset Integrity & HSE",
    description: "Risk-based integrity management with HAZOP, QRA, SIMOPS, and reliability-centered maintenance programs.",
    bullet: "Data-backed interventions that reduce downtime and elevate compliance maturity.",
    image: "/images/capability-05.jpg",
  },
  {
    id: "06",
    title: "Digital & Low Carbon Transition",
    description: "AI-enabled operations, carbon solutions, and practical decarbonization pathways for industrial portfolios.",
    bullet: "Field-ready technology strategies with measurable operational and environmental returns.",
    image: "/images/capability-06.jpg",
  },
];

export default function CapabilityShowcase() {
  const [activeId, setActiveId] = useState("02");

  const activeItem = useMemo(
    () => capabilityItems.find((item) => item.id === activeId) ?? capabilityItems[1],
    [activeId],
  );

  return (
    <section className="cap-showcase" aria-label="Interactive capabilities showcase">
      <article className="cap-showcase-media" style={{ backgroundImage: `url('${activeItem.image}')` }}>
        <div className="cap-showcase-media-overlay" />
        <div className="cap-showcase-triangles" aria-hidden>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="cap-showcase-meta">
          <span>{activeItem.image.replace("/images/", "")}</span>
          <small>Replace this file in /public/images</small>
        </div>
      </article>

      <article className="cap-showcase-content">
        <p className="cap-showcase-label">Categories</p>
        <h3>Our Capabilities</h3>

        <ol>
          {capabilityItems.map((item) => {
            const isActive = item.id === activeItem.id;
            return (
              <li key={item.id} className={isActive ? "active" : undefined}>
                <button type="button" onClick={() => setActiveId(item.id)}>
                  <span className="cap-num">{item.id}</span>
                  <span className="cap-title">{item.title}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="cap-showcase-detail">
          <p>{activeItem.description}</p>
          <p>{activeItem.bullet}</p>
          <a className="btn btn-primary" href="#contact">Learn More</a>
        </div>
      </article>
    </section>
  );
}
