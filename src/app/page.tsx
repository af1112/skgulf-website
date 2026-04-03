import CapabilityShowcase from "@/components/capability-showcase";

export default function Home() {
  const markets = [
    {
      title: "Oil & Gas Contracting",
      description: "Field execution, brownfield upgrades, and industrial EPC support for critical assets.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Renewable Energy Projects",
      description: "Utility-scale solar and wind deployment with grid-integration and reliability focus.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "AI & Automation Solutions",
      description: "Predictive analytics, autonomous inspection workflows, and operational intelligence systems.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const projects = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <>
      <main id="top" className="homepage">
        <header className="topbar fade-in">
          <div className="container topbar-inner">
            <a href="#top" className="brand">SK GULF</a>
            <nav className="menu" aria-label="Primary">
              <a href="#about">About</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#services">Services</a>
              <a href="#technologies">Technologies</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </header>

        <section className="hero-light fade-in" id="about">
          <div className="container hero-light-grid">
            <div>
              <p className="kicker">Engineering & Technology Leadership</p>
              <h1>Engineering the Future of Energy with Intelligence and Innovation</h1>
              <p className="lead">
                We deliver integrated solutions across Oil & Gas, Renewable Energy, AI-driven operations, and sustainable asset integrity to build resilient energy infrastructure.
              </p>
              <div className="hero-buttons">
                <a href="#capabilities" className="btn btn-primary">Our Capabilities</a>
                <a href="#contact" className="btn btn-ghost">Contact Us</a>
              </div>
            </div>

            <article className="image-shell ratio-16-10">
              <img
                src="https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?auto=format&fit=crop&w=1600&q=80"
                alt="Modern energy infrastructure"
                className="image-media"
              />
              <div className="image-overlay" />
            </article>
          </div>
        </section>

        <section className="section fade-in" id="services">
          <div className="container">
            <p className="kicker">Markets Overview</p>
            <h2 className="section-title">Core sectors where we engineer, execute, and optimize performance.</h2>
            <div className="market-grid">
              {markets.map((market) => (
                <article className="market-card" key={market.title}>
                  <div className="image-shell ratio-4-3">
                    <img src={market.image} alt={market.title} className="image-media" />
                    <div className="image-overlay" />
                  </div>
                  <h3>{market.title}</h3>
                  <p>{market.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft fade-in" id="capabilities">
          <div className="container">
            <p className="kicker">Capabilities Snapshot</p>
            <h2 className="section-title">Deep multidisciplinary engineering capabilities for critical projects.</h2>
            <CapabilityShowcase />
          </div>
        </section>

        <section className="section section-tech fade-in" id="technologies">
          <div className="container two-col">
            <div>
              <p className="kicker">Technologies & Innovation</p>
              <h2 className="section-title">Applying AI, robotics, and digital engineering to amplify industrial decisions.</h2>
              <p className="lead">
                Our technology teams design intelligent workflows for inspection, predictive maintenance, and performance optimization across complex energy and industrial assets.
              </p>
            </div>
            <article className="image-shell ratio-4-3">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80"
                alt="AI and robotics in engineering"
                className="image-media"
              />
              <div className="image-overlay" />
            </article>
          </div>
        </section>

        <section className="section fade-in" id="integrity">
          <div className="container two-col">
            <article className="image-shell ratio-4-3">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=80"
                alt="Smart monitoring and asset inspection"
                className="image-media"
              />
              <div className="image-overlay" />
            </article>
            <div>
              <p className="kicker">Sustainable Asset Integrity</p>
              <h2 className="section-title">Smart monitoring, intelligent inspection, and reliability-led operations.</h2>
              <p className="lead">
                We combine inspection engineering, real-time monitoring, and AI diagnostics to reduce risk, extend asset life, and support low-carbon operational performance.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-soft fade-in" id="projects">
          <div className="container">
            <p className="kicker">Projects Gallery</p>
            <h2 className="section-title">Selected project environments and execution contexts.</h2>
            <div className="gallery-grid">
              {projects.map((image, index) => (
                <article key={`${image}-${index}`} className="gallery-item image-shell ratio-1-1">
                  <img src={image} alt={`Project ${index + 1}`} className="image-media" />
                  <div className="image-overlay" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fade-in" id="vision">
          <div className="container vision-wrap">
            <div>
              <p className="kicker">Vision & Sustainability</p>
              <h2 className="section-title">Building an intelligent energy future aligned with sustainability and trust.</h2>
              <p className="lead">
                Our long-term strategy blends engineering discipline with innovation to deliver measurable value for clients, communities, and the environment.
              </p>
            </div>
            <article className="vision-image image-shell ratio-4-3">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1400&q=80"
                alt="Sustainable landscape"
                className="image-media image-faded"
              />
              <div className="image-overlay" />
            </article>
          </div>
        </section>

        <section className="cta-band fade-in" id="contact">
          <div className="container cta-band-inner">
            <h2>Let&apos;s Build the Future of Energy Together</h2>
            <a href="mailto:info@sk-gulf.com" className="btn btn-primary">Contact</a>
          </div>
        </section>
      </main>

      <footer className="footer-pro">
        <div className="container footer-pro-inner">
          <div>
            <strong>SK Gulf Integrated LLC</strong>
            <p>Oil & Gas · Renewables · AI · Smart Asset Integrity</p>
          </div>
          <div>
            <p>info@sk-gulf.com</p>
            <p>+968 9950 5099</p>
          </div>
          <span>© {new Date().getFullYear()} SK Gulf. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
