import "./AboutUs.css";

export default function AboutUs() {
  return (
    <main id="main-content" className="about-root">
      {/* HERO */}
      <section
        className="page-hero"
        style={{
          paddingTop: "170px",
          paddingBottom: "120px",
          height: "550px",
          background: "linear-gradient(135deg, #0a3d62 0%, #072d4a 100%)",
          position: "relative",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontWeight: "500",
          }}
        >
          <span
            style={{
              color: "#60a5fa",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              display: "block",
              marginBottom: "16px",
            }}
          >
            ABOUT CORPSOLUTION
          </span>

          <h1
            style={{
              fontSize: "3.5rem",
              lineHeight: "1.2",
              marginBottom: "24px",
              fontWeight: 800,
              color: "#fff",
            }}
          >
            Pioneering Digital Excellence for Enterprises.
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#e2e8f0",
              maxWidth: "900px",
            }}
          >
            We are a strategy-led technology firm partnering with Fortune 500
            leaders to build resilient, scalable digital ecosystems.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-padding story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img
                src="https://placehold.co/600x700/F0F4F8/0A3D62?text=Strategic+Meeting"
                alt="Strategic Meeting"
              />
            </div>

            <div className="story-text">
              <span className="section-label">Who We Are</span>
              <h2>A Legacy of Innovation & Integrity</h2>

              <p>
                Founded in 2010, CorpSolution began with a singular vision: to
                bridge the gap between complex enterprise technology and
                human-centric design.
              </p>

              <div className="story-highlight">
                "We don't just deliver code; we deliver business outcomes. Our
                success is measured by the tangible growth and efficiency we
                unlock for our partners."
              </div>

              <p>
                Today, we operate at the intersection of business strategy and
                engineering, helping organizations navigate uncertainty and
                scale confidently.
              </p>

              <img
                src="https://placehold.co/200x60/FFFFFF/000000?text=Signature"
                alt="Signature"
                className="signature"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="subheading">Our Foundation</span>
            <h2>Purpose-Driven Performance</h2>
            <p>The core principles that guide our decisions.</p>
          </div>

          <div className="mvv-grid">
            <div
              className="mvv-card"
              style={{
                position: "relative",
                padding: "40px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderTop = "4px solid #1e90ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderTop = "4px solid transparent";
              }}
            >
              <div className="mvv-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                Empower enterprises with resilient, scalable digital
                infrastructure.
              </p>
            </div>

            <div
              className="mvv-card"
              style={{
                position: "relative",
                padding: "40px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderTop = "4px solid #1e90ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderTop = "4px solid transparent";
              }}
            >
              <div className="mvv-icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                Be the world's most trusted partner for digital transformation.
              </p>
            </div>

            <div
              className="mvv-card"
              style={{
                position: "relative",
                padding: "40px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderTop = "4px solid #1e90ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderTop = "4px solid transparent";
              }}
            >
              <div className="mvv-icon">
                <i className="fa-regular fa-gem"></i>
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, excellence, and relentless focus on client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">$2B+</span>
              <span className="stat-label">Client Revenue</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12</span>
              <span className="stat-label">Global Offices</span>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="section-padding">
        <div className="container">
          <div className="hero-split">
            <div className="hero-text">
              <span className="subheading">Our Culture</span>
              <h2>Principles That Drive Us</h2>

              <div className="culture-grid single-column">
                <div className="culture-item">
                  <i className="fa-solid fa-check-circle culture-icon"></i>
                  <div>
                    <h4 >Client-Centricity</h4>
                    <p style={{color:"black"}}>We align decisions with business outcomes.</p>
                  </div>
                </div>

                <div className="culture-item">
                  <i className="fa-solid fa-check-circle culture-icon"></i>
                  <div>
                    <h4>Radical Transparency</h4>
                    <p style={{color:"black"}}>Clear communication at every step.</p>
                  </div>
                </div>

                <div className="culture-item">
                  <i className="fa-solid fa-check-circle culture-icon"></i>
                  <div>
                    <h4>Agile Innovation</h4>
                    <p style={{color:"black"}}>Iterative development to adapt fast.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="https://placehold.co/600x700/F0F4F8/0A3D62?text=Work+Culture"
                alt="Work Culture"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
