"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./scroll-reveal";

export type ProjectItem = {
  image: string;
  title: string;
  description: string;
};

interface ProjectGalleryProps {
  projects: ProjectItem[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="gallery-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={`proj-${index}`} delay={(index % 3) + 1}>
            <div
              className="gallery-item"
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveIndex(index);
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={600}
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-icon">↗</div>
                <h4 className="gallery-item-title">{project.title}</h4>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="project-modal-backdrop"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
            <div className="project-modal-image">
              <Image
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                width={800}
                height={500}
              />
            </div>
            <div className="project-modal-content">
              <h3>{projects[activeIndex].title}</h3>
              <p>{projects[activeIndex].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
