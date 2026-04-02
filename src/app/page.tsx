export default function Home() {
  const capabilities = [
    {
      title: "Energy & Chemicals",
      description: "Full-scope contracting support for upstream, midstream, and downstream operations.",
    },
    {
      title: "Renewables",
      description: "Utility solar and wind execution from site development to commissioning support.",
    },
    {
      title: "Power & Water",
      description: "Design and delivery support for power systems, water assets, and industrial utilities.",
    },
    {
      title: "Asset Integrity",
      description: "Reliability engineering, corrosion control, and risk-based integrity frameworks.",
    },
    {
      title: "HSE & Process Safety",
      description: "HAZID, HAZOP, QRA, SIMOPS, and COMAH studies for safer operations.",
    },
    {
      title: "Workforce & Sourcing",
      description: "Talent deployment, procurement, and supply chain orchestration for complex projects.",
    },
    {
      title: "Digital & AI",
      description: "Automation and predictive analytics for energy assets and industrial performance.",
    },
    {
      title: "Low Carbon Solutions",
      description: "Carbon capture, flare gas utilization, and sustainability technologies with real field impact.",
    },
  ];

  const priorities = [
    {
      title: "Oman Vision 2040 Alignment",
      description: "Programs focused on sustainable growth, local capability development, and industrial innovation.",
    },
    {
      title: "Strategic Partnerships",
      description: "Cross-border collaborations that accelerate technology transfer and delivery capacity.",
    },
    {
      title: "Innovation Leadership",
      description: "XPRIZE ambassador positioning that translates innovation into measurable outcomes.",
    },
  ];

  const partners = [
    "XPRIZE (USA)",
    "CROFT Production Systems (USA)",
    "Techno-Safe Consultants (India)",
    "PureGas Carbonics Projects & Engg (India)",
    "Elile AI (USA)",
    "Engineers Integrity GmbH (Germany)",
  ];

  const mediaSlots = [
    { name: "hero-industrial.jpg", label: "Main hero image (1920x1080)" },
    { name: "capability-energy.jpg", label: "Energy & chemicals image" },
    { name: "capability-renewables.jpg", label: "Renewables image" },
    { name: "capability-integrity.jpg", label: "Asset integrity image" },
    { name: "sustainability-lab.jpg", label: "Sustainability section image" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SK Gulf Integrated LLC",
    url: "https://sk-gulf.com",
    logo: "https://sk-gulf.com/logo.png",
    description:
      "SK Gulf Integrated LLC is a 100% Omani company established in 2020, delivering contracting, consulting, and technology-led solutions across energy and industrial sectors.",
    email: "info@sk-gulf.com",
    telephone: "+96899505099",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al-Udhaybah",
      addressCountry: "OM",
      postalCode: "130",
    },
    sameAs: [],
  };

  return (
    <>
      <main id="top">
        <header className="hero">
          <div className="hero-overlay" />
          <div className="container">
            <nav className="site-nav">
              <a href="#top" className="logo-mark">SK GULF</a>
              <div className="nav-links">
                <a href="#about">About</a>
                <a href="#capabilities">Capabilities</a>
                <a href="#sustainability">Sustainability</a>
                <a href="#news">Insights</a>
                <a href="#contact">Contact</a>
              </div>
              <a className="btn btn-ghost nav-cta" href="#contact">Start a Project</a>
            </nav>

            <div className="hero-grid">
              <div className="hero-copy">
                <p className="hero-kicker">Integrated Contracting & Innovation | Oman</p>
                <h1 className="hero-title">
                  Delivering complex industrial and energy projects with precision, speed, and responsibility.
                </h1>
                <p className="hero-subtitle">
                  SK Gulf Integrated LLC combines contracting excellence, specialized engineering, and sustainability-driven technology to support critical infrastructure across Oman and the region.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#capabilities">Explore Capabilities</a>
                  <a className="btn btn-ghost" href="#about">Our Journey</a>
                </div>
              </div>

              <div className="hero-media media-slot" style={{ backgroundImage: "url('/images/hero-industrial.jpg')" }}>
                <div className="media-slot-meta">
                  <span>{mediaSlots[0].name}</span>
                  <small>{mediaSlots[0].label}</small>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="stats-strip" aria-label="Company highlights">
          <div className="container stats-grid">
            <article>
              <span className="stat-number">2020</span>
              <p>Established in Oman</p>
            </article>
            <article>
              <span className="stat-number">100%</span>
              <p>Omani-owned enterprise</p>
            </article>
            <article>
              <span className="stat-number">8+</span>
              <p>Core capability domains</p>
            </article>
            <article>
              <span className="stat-number">XPRIZE</span>
              <p>Ambassador positioning</p>
            </article>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">Our 5+ year journey</span>
              <h2 className="section-title">A focused Omani company scaling with ambition and execution discipline.</h2>
            </div>
            <p className="lead">
              Our mission is to deliver contracting, consulting, and technology-enabled services that meet today&apos;s industrial needs while supporting long-term environmental and economic resilience. We align each program with safety, local value creation, and Oman Vision 2040 priorities.
            </p>
          </div>
        </section>

        <section className="section section-soft" id="capabilities">
          <div className="container">
            <span className="eyebrow">Our capabilities</span>
            <h2 className="section-title">Multi-sector capabilities across energy, infrastructure, and emerging technologies.</h2>
            <div className="visual-row">
              <article className="media-slot" style={{ backgroundImage: "url('/images/capability-energy.jpg')" }}>
                <div className="media-slot-meta">
                  <span>{mediaSlots[1].name}</span>
                  <small>{mediaSlots[1].label}</small>
                </div>
              </article>
              <article className="media-slot" style={{ backgroundImage: "url('/images/capability-renewables.jpg')" }}>
                <div className="media-slot-meta">
                  <span>{mediaSlots[2].name}</span>
                  <small>{mediaSlots[2].label}</small>
                </div>
              </article>
              <article className="media-slot" style={{ backgroundImage: "url('/images/capability-integrity.jpg')" }}>
                <div className="media-slot-meta">
                  <span>{mediaSlots[3].name}</span>
                  <small>{mediaSlots[3].label}</small>
                </div>
              </article>
            </div>
            <div className="cap-grid">
              {capabilities.map((item) => (
                <article className="cap-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="sustainability">
          <div className="container sustainability-grid">
            <div className="sustainability-panel">
              <span className="eyebrow eyebrow-light">Sustainability</span>
              <h2 className="section-title section-title-light">Executing practical transition pathways for lower-carbon operations.</h2>
              <p>
                From carbon capture and flare gas solutions to AI-enabled energy optimization, our sustainability portfolio is designed for real environments, not slide decks.
              </p>
            </div>
            <div className="priority-list">
              {priorities.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="container sustainability-media-wrap">
            <article className="media-slot media-slot-wide" style={{ backgroundImage: "url('/images/sustainability-lab.jpg')" }}>
              <div className="media-slot-meta">
                <span>{mediaSlots[4].name}</span>
                <small>{mediaSlots[4].label}</small>
              </div>
            </article>
          </div>
        </section>

        <section className="section section-soft" id="news">
          <div className="container">
            <span className="eyebrow">Global network</span>
            <h2 className="section-title">Partnership ecosystem supporting delivery excellence.</h2>
            <div className="partner-grid">
              {partners.map((partner) => (
                <article className="partner-card" key={partner}>
                  <p>{partner}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-cta">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="section-title">Let&apos;s build your next critical project.</h2>
              <p className="lead">SK Gulf Integrated LLC, PO# 3118, PC# 130, Al-Udhaybah, Sultanate of Oman.</p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:info@sk-gulf.com">info@sk-gulf.com</a>
              <a className="btn btn-ghost" href="tel:+96899505099">+968 9950 5099</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <span>© {new Date().getFullYear()} SK Gulf Integrated LLC. All rights reserved.</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
