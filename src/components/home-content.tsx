"use client";

import Image from "next/image";
import CapabilityShowcase from "@/components/capability-showcase";
import ScrollReveal from "@/components/scroll-reveal";
import NavBar from "@/components/nav-bar";
import ProjectGallery from "@/components/project-gallery";
import { useLanguage } from "@/lib/language-context";

const projectImages = [
  "/images/project-01.webp",
  "/images/project-02.webp",
  "/images/project-03.webp",
  "/images/project-04.webp",
  "/images/project-05.webp",
  "/images/project-06.webp",
];

const marketImages = [
  "/images/market-oil-gas.webp",
  "/images/market-renewable.webp",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
];

const statNumbers = ["15+", "200+", "50+", "99%"];

export default function HomeContent() {
  const { t } = useLanguage();

  const statLabels = [t.stats.years, t.stats.projects, t.stats.engineers, t.stats.satisfaction];

  const projects = t.projectsSection.items.map((item, i) => ({
    image: projectImages[i],
    title: item.title,
    description: item.description,
  }));

  return (
    <>
      <NavBar />

      <main>
        {/* ===== HERO ===== */}
        <section className="hero" id="top">
          <div className="hero-bg-pattern" aria-hidden="true" />
          <div className="hero-grid-dots" aria-hidden="true" />

          <div className="container">
            <div className="hero-content">
              <div>
                <div className="hero-enter hero-enter-1">
                  <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    {t.hero.badge}
                  </div>
                </div>

                <div className="hero-enter hero-enter-2">
                  <h1 className="hero-title">
                    {t.hero.titleLine1}
                    <br />
                    <span className="gradient-text">{t.hero.titleLine2}</span>
                  </h1>
                </div>

                <div className="hero-enter hero-enter-3">
                  <p className="hero-description">{t.hero.description}</p>
                </div>

                <div className="hero-enter hero-enter-4">
                  <div className="hero-actions">
                    <a href="#capabilities" className="btn btn-primary btn-lg">
                      {t.hero.cta1}
                    </a>
                    <a href="#contact" className="btn btn-secondary btn-lg">
                      {t.hero.cta2}
                    </a>
                  </div>
                </div>

                <div className="hero-enter hero-enter-5">
                  <div className="hero-stats-row">
                    {statNumbers.slice(0, 3).map((num, i) => (
                      <div className="hero-stat" key={statLabels[i]}>
                        <span className="hero-stat-number">{num}</span>
                        <span className="hero-stat-label">{statLabels[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hero-enter hero-enter-3">
                <div className="hero-visual">
                  <div className="hero-image-main">
                    <Image
                      src="/images/hero.webp"
                      alt="Modern energy infrastructure — SK-GULF engineering projects"
                      width={800}
                      height={1000}
                      priority
                    />
                  </div>
                  <div className="hero-image-float">
                    <div className="hero-float-number">99%</div>
                    <div className="hero-float-label">{t.hero.successRate}</div>
                  </div>
                  <div className="hero-image-badge">
                    <div className="hero-image-badge-icon" />
                    <p>{t.hero.isoCertified}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MARKETS ===== */}
        <section className="section" id="markets">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="section-label">{t.markets.label}</span>
                <h2 className="section-heading">{t.markets.heading}</h2>
                <p className="section-description">{t.markets.description}</p>
              </div>
            </ScrollReveal>

            <div className="markets-grid">
              {t.markets.items.map((market, i) => (
                <ScrollReveal key={market.title} delay={i + 1}>
                  <div className="market-card">
                    <Image
                      src={marketImages[i]}
                      alt={market.title}
                      width={800}
                      height={1067}
                    />
                    <div className="market-card-overlay" />
                    <div className="market-card-content">
                      <span className="market-card-number">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="market-card-title">{market.title}</h3>
                      <p className="market-card-desc">{market.desc}</p>
                      <span className="market-card-arrow">{t.markets.learnMore}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="section section-dark" id="stats">
          <div className="stats-bg-pattern" aria-hidden="true" />
          <div className="container">
            <div className="stats-grid">
              {statNumbers.map((num, i) => (
                <ScrollReveal key={statLabels[i]} delay={i + 1}>
                  <div className="stat-item">
                    <div className="stat-number">{num}</div>
                    <div className="stat-label">{statLabels[i]}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CAPABILITIES ===== */}
        <section className="section section-gray" id="capabilities">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="section-label">{t.capabilities.label}</span>
                <h2 className="section-heading">{t.capabilities.heading}</h2>
                <p className="section-description">{t.capabilities.description}</p>
              </div>
            </ScrollReveal>
            <CapabilityShowcase />
          </div>
        </section>

        {/* ===== PARTNERS ===== */}
        <section className="section" id="partners">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="section-label">{t.partners.label}</span>
                <h2 className="section-heading">{t.partners.heading}</h2>
                <p className="section-description">{t.partners.description}</p>
              </div>
            </ScrollReveal>

            <div className="partners-grid">
              {["AKAF_Logo.png", "asfar_logo.png"].map((logo, i) => (
                <ScrollReveal key={logo} delay={i + 1}>
                  <div className="partner-logo">
                    <Image
                  src={`/images/partners/${logo}`}
                  alt={`Partner ${i + 1}`}
                  width={200}
                  height={100}
                  style={{ objectFit: "contain" }}
                  className="hover:scale-110 transition-transform duration-300"
                />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CLIENTS (Experience) ===== */}
        <section className="section section-gray" id="clients">
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <span className="section-label">{t.clients.label}</span>
                <h2 className="section-heading">{t.clients.heading}</h2>
                <p className="section-description">{t.clients.description}</p>
              </div>
            </ScrollReveal>

            <div className="partners-grid">
              {["GPS.webp", "L&T.webp"].map((logo, i) => (
                <ScrollReveal key={logo} delay={i + 1}>
                  <div className="partner-logo">
                    <Image
                      src={`/images/clients/${logo}`}
                      alt={`Client ${i + 1}`}
                      width={200}
                      height={100}
                      style={{ objectFit: "contain" }}
                      className="hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TECHNOLOGIES ===== */}
        <section className="section" id="technologies">
          <div className="container">
            <div className="tech-grid">
              <div>
                <ScrollReveal>
                  <span className="section-label">{t.technologies.label}</span>
                  <h2 className="section-heading">{t.technologies.heading}</h2>
                  <p className="section-description">{t.technologies.description}</p>
                </ScrollReveal>

                <div className="tech-features">
                  {t.technologies.features.map((feature, i) => (
                    <ScrollReveal key={feature.title} delay={i + 1}>
                      <div className="tech-feature">
                        <div className="tech-feature-icon">{feature.icon}</div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal delay={2}>
                <div className="tech-image">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="AI and robotics in industrial engineering"
                    width={800}
                    height={600}
                  />
                  <div className="tech-image-overlay" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== ASSET INTEGRITY ===== */}
        <section className="section section-gray" id="integrity">
          <div className="container">
            <div className="vision-grid">
              <ScrollReveal>
                <div className="vision-image">
                  <Image
                    src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80"
                    alt="Smart monitoring and asset inspection systems"
                    width={800}
                    height={600}
                  />
                </div>
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <span className="section-label">{t.integrity.label}</span>
                  <h2 className="section-heading">{t.integrity.heading}</h2>
                  <p className="section-description">{t.integrity.description}</p>
                </ScrollReveal>

                <ScrollReveal delay={1}>
                  <a href="#contact" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
                    {t.integrity.cta}
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROJECTS GALLERY ===== */}
        <section className="section" id="projects">
          <div className="container">
            <ScrollReveal>
              <div className="section-header section-header-center">
                <span className="section-label">{t.projectsSection.label}</span>
                <h2 className="section-heading">{t.projectsSection.heading}</h2>
                <p className="section-description">{t.projectsSection.description}</p>
              </div>
            </ScrollReveal>

            <ProjectGallery projects={projects} />
          </div>
        </section>

        {/* ===== VISION ===== */}
        <section className="section section-gray" id="vision">
          <div className="container">
            <div className="vision-grid">
              <div>
                <ScrollReveal>
                  <span className="section-label">{t.vision.label}</span>
                  <h2 className="section-heading">{t.vision.heading}</h2>
                  <p className="section-description">{t.vision.description}</p>
                </ScrollReveal>

                <div className="vision-values">
                  {t.vision.values.map((value, i) => (
                    <ScrollReveal key={value.title} delay={i + 1}>
                      <div className="vision-value">
                        <div className="vision-value-icon">{value.icon}</div>
                        <div>
                          <h4>{value.title}</h4>
                          <p>{value.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal delay={2}>
                <div className="vision-image">
                  <Image
                    src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80"
                    alt="Sustainable energy landscape"
                    width={800}
                    height={600}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-section" id="contact">
          <div className="container">
            <ScrollReveal>
              <div className="cta-inner">
                <div className="cta-glow" aria-hidden="true" />
                <h2>{t.cta.heading}</h2>
                <p>{t.cta.description}</p>
                <div className="cta-actions">
                  <a href="mailto:info@sk-gulf.com" className="cta-btn-white">
                    {t.cta.contactUs}
                  </a>
                  <a href="tel:+96899505099" className="cta-btn-outline">
                    +968 9950 5099
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-text">
                SK-<span>GULF</span>
              </div>
              <p>{t.footer.brand}</p>
            </div>

            <div className="footer-col">
              <h4>{t.footer.services}</h4>
              <a href="#markets">Oil &amp; Gas</a>
              <a href="#markets">Renewable Energy</a>
              <a href="#markets">AI Solutions</a>
              <a href="#integrity">Asset Integrity</a>
            </div>

            <div className="footer-col">
              <h4>{t.footer.company}</h4>
              <a href="#top">{t.footer.aboutUs}</a>
              <a href="#capabilities">{t.nav.capabilities}</a>
              <a href="#projects">{t.nav.projects}</a>
              <a href="#vision">{t.footer.sustainability}</a>
            </div>

            <div className="footer-col">
              <h4>{t.footer.contactTitle}</h4>
              <a href="mailto:info@sk-gulf.com">info@sk-gulf.com</a>
              <a href="tel:+96899505099">+968 9950 5099</a>
              <a href="#contact">{t.nav.getInTouch}</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/skgulf/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:info@sk-gulf.com" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
