export default function Home() {
  const capabilities = [
    {
      title: "Oil & Gas Contracting",
      description:
        "Civil, mechanical, electrical, and instrumentation execution for upstream, midstream, and downstream operations.",
    },
    {
      title: "Utility Scale Solar",
      description:
        "Site development, foundation works, tracker structure installation, and PV module deployment for utility solar projects.",
    },
    {
      title: "Wind Power Plants",
      description:
        "End-to-end support for wind project civil works, turbine installation support, and grid integration systems.",
    },
    {
      title: "Asset Integrity Management",
      description:
        "Risk-based inspections, corrosion management, reliability assessments, and smart monitoring for critical assets.",
    },
    {
      title: "HSE Studies & Corporate Safety",
      description:
        "HAZID, HAZOP, QRA, SIMOPS, COMAH, PSM, and related frameworks to improve process safety and compliance.",
    },
    {
      title: "Specialized Sourcing & Workforce",
      description:
        "Procurement, logistics, vendor management, and workforce solutions tailored for complex energy and industrial programs.",
    },
    {
      title: "RPA & AI for Energy",
      description:
        "Automation, predictive diagnostics, and data engineering for gas turbines, solar plants, wind assets, and desalination systems.",
    },
    {
      title: "CCU, Flare Gas & Sustainable Farming",
      description:
        "Low-carbon innovation portfolio spanning carbon capture, flare gas utilization, and precision agriculture technologies.",
    },
  ];

  const priorities = [
    {
      title: "Alignment with Oman Vision 2040",
      description:
        "Strategic initiatives focused on sustainability, innovation, and socio-economic value creation in Oman.",
    },
    {
      title: "Global Partnerships",
      description:
        "Collaboration with international partners across the United States, Germany, and India to accelerate technology transfer.",
    },
    {
      title: "XPRIZE Ambassador Positioning",
      description:
        "Driving local and global impact through practical innovation in energy transition and environmental stewardship.",
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
      <main>
        <header className="hero" id="top">
          <div className="container">
            <nav className="card top-nav">
              <strong style={{ letterSpacing: "0.06em" }}>SK GULF</strong>
              <div className="nav-links">
                <a href="#about">About</a>
                <a href="#capabilities">Capabilities</a>
                <a href="#sustainability">Sustainability</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
              </div>
            </nav>

            <div className="hero-grid">
              <div className="hero-panel">
                <span className="eyebrow" style={{ color: "#99bfdc" }}>
                  100% Omani company | Established 2020
                </span>
                <h1 className="title" style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", marginTop: "1.2rem" }}>
                  Contracting, consulting, and innovation for a sustainable energy future.
                </h1>
                <p className="lead" style={{ color: "#d7e5f0", maxWidth: "58ch", marginTop: "1.1rem" }}>
                  SK Gulf Integrated LLC delivers integrated services across oil and gas, renewables, AI technologies, and carbon solutions with safety, precision, and sustainability at the core.
                </p>
                <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
                  <a className="btn btn-primary" href="#contact">Start a project discussion</a>
                  <a className="btn btn-ghost" href="#capabilities" style={{ color: "#fff", borderColor: "#3f627d", background: "rgba(255,255,255,0.08)" }}>
                    Explore capabilities
                  </a>
                </div>
              </div>

              <div className="hero-side">
                <article className="card">
                  <div className="metric">2020</div>
                  <p className="lead" style={{ margin: 0 }}>
                    Established to drive innovation in Oman&apos;s contracting and energy sectors.
                  </p>
                </article>
                <article className="card">
                  <div className="metric">100% Omani</div>
                  <p className="lead" style={{ margin: 0 }}>
                    Nationally rooted SME with commitment to community and long-term capability building.
                  </p>
                </article>
                <article className="card">
                  <div className="metric">XPRIZE</div>
                  <p className="lead" style={{ margin: 0 }}>
                    Ambassador-level engagement bridging global innovation and local impact.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </header>

        <section className="section" id="about">
          <div className="container">
            <span className="eyebrow">Who we are</span>
            <h2 className="title" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)", maxWidth: "24ch" }}>
              Building a legacy of innovation, resilience, and sustainable growth.
            </h2>
            <p className="lead" style={{ maxWidth: "78ch" }}>
              Our vision is to be a pioneering contracting company in Oman, transforming the industry through advanced technology, research and development, and sustainability-led execution. Our mission is to meet energy needs without compromising the environment and to contribute to Oman Vision 2040 through practical innovation.
            </p>
          </div>
        </section>

        <section className="section" id="capabilities" style={{ paddingTop: 0 }}>
          <div className="container">
            <span className="eyebrow">Capabilities</span>
            <h2 className="title" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)", maxWidth: "24ch" }}>
              Multi-domain capabilities across contracting, specialized services, and technology.
            </h2>
            <div className="cap-grid">
              {capabilities.map((item) => (
                <article className="cap-card" key={item.title}>
                  <span className="eyebrow" style={{ fontSize: "0.65rem" }}>SK Gulf Service</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="sustainability" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta">
              <span className="eyebrow" style={{ color: "#b8d6ed" }}>Sustainability & responsibility</span>
              <h2 className="title" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)", marginTop: "1rem" }}>
                We combine energy transition ambition with field-ready execution.
              </h2>
              <p className="lead" style={{ color: "#dce9f3", maxWidth: "70ch" }}>
                From carbon capture and flare gas utilization to precision farming and AI-enabled operations, SK Gulf develops practical solutions that reduce emissions, improve efficiency, and support sustainable development in Oman and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="news" style={{ paddingTop: 0 }}>
          <div className="container">
            <span className="eyebrow">Strategic priorities</span>
            <h2 className="title" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)" }}>
              Focus areas shaping our next phase of growth
            </h2>
            <div className="news-grid">
              {priorities.map((item) => (
                <article className="news-card" key={item.title}>
                  <div className="news-date">SK Gulf Direction</div>
                  <h3 style={{ margin: "0.6rem 0", fontSize: "1.02rem" }}>{item.title}</h3>
                  <p style={{ margin: 0, color: "var(--muted)", fontWeight: 600 }}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <span className="eyebrow">Partners</span>
            <h2 className="title" style={{ fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)", marginBottom: "1.25rem" }}>
              Trusted collaborations across global innovation ecosystems
            </h2>
            <div className="card">
              <ul style={{ margin: 0, paddingInlineStart: "1.15rem", lineHeight: 1.9, color: "var(--muted)", fontWeight: 600 }}>
                {partners.map((partner) => (
                  <li key={partner}>{partner}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="contact" style={{ paddingTop: 0, paddingBottom: "4.5rem" }}>
          <div className="container">
            <div className="card contact-grid">
              <div>
                <span className="eyebrow">Connect with us</span>
                <h2 className="title" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)" }}>
                  Let&apos;s discuss your next project.
                </h2>
                <p className="lead" style={{ maxWidth: "65ch" }}>
                  SK Gulf Integrated LLC, PO# 3118, PC# 130, Al-Udhaybah, Sultanate of Oman.
                </p>
              </div>
              <div style={{ display: "grid", alignContent: "center", gap: "0.8rem" }}>
                <a className="btn btn-primary" href="mailto:info@sk-gulf.com">info@sk-gulf.com</a>
                <a className="btn btn-ghost" href="tel:+96899505099">+968 9950 5099</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "1.2rem 0 2.4rem" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", color: "var(--muted)", fontSize: "0.92rem" }}>
          <span>© {new Date().getFullYear()} SK Gulf. All rights reserved.</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
