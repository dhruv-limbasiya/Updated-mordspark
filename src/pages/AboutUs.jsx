import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
    <main id="main-content" className="about-page">
      {/* ================= PAGE HERO ================= */}
      <section className="page-hero" style={{ textAlign: "center" }}>
        <div className="container">
          <div
            className="hero-split"
            style={{ display: "block", maxWidth: "800px", margin: "0 auto" }}
          >
            <div className="hero-text">
              <span
                className="subheading"
                style={{
                  color: "#60a5fa",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginBottom: "16px",
                  display: "block",
                }}
              >
                About CorpSolution
              </span>
              <h1>Pioneering Digital Excellence for Enterprises.</h1>
              <p
                className="lead"
                style={{
                  borderLeft: "none",
                  paddingLeft: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                We are a strategy-led technology firm partnering with Fortune
                500 leaders to build resilient, scalable digital ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section id="story" className="section-padding story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <img
                src="https://placehold.co/600x700/F0F4F8/0A3D62?text=Strategic+Meeting"
                alt="Executives in a strategic meeting"
                style={{ borderRadius: "12px", width: "100%" }}
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
                "We don't just deliver code; we deliver business outcomes."
              </div>
              <p>
                Today, we operate at the intersection of business strategy and
                engineering with industry veterans from Big Tech and consulting.
              </p>
              <img
                src="https://placehold.co/200x60/FFFFFF/000000?text=Signature"
                alt="CEO Signature"
                style={{ opacity: 0.6, marginTop: "20px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION VISION VALUES ================= */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="subheading">Our Foundation</span>
            <h2>Purpose-Driven Performance</h2>
            <p>The core principles that guide our decisions.</p>
          </div>

          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower enterprises with resilient, scalable digital
                infrastructure.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the world’s most trusted partner for digital
                transformation.
              </p>
            </div>

            <div className="mvv-card">
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

      {/* ================= STATS ================= */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">$2B+</span>
              <span className="stat-label">Client Revenue Generated</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">12</span>
              <span className="stat-label">Global Offices</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <span className="subheading">Leadership</span>
            <h2>Meet the Executives</h2>
          </div>

          <div className="team-grid">
            {["Aditya Pande", "Harshal Mahajan", "Dhruv Limbasiya", "Rishi Patel", "Smit Gadhiya", "MD Sadab", "Fenil Dhanani", "Jatin Dhokiya"].map(
              (name, index) => (
                <div className="team-card" key={index}>
                  <div className="team-img-box">
                    <img
                      src="https://placehold.co/400x500/ccc/333?text=CEO"
                      alt={name}
                    />
                  </div>
                  <div className="team-info">
                    <h4 className="team-name">{name}</h4>
                    <span className="team-role">Executive Leader</span>
                    <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
                      Industry veteran with deep strategic expertise.
                    </p>
                    <div className="team-social" style={{gap: "12px",display: "flex", marginTop: "15px"}}>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= CULTURE ================= */}
      <section className="section-padding">
        <div className="container">
          <div className="hero-split">
            <div className="hero-text">
              <span className="subheading">Our Culture</span>
              <h2>Principles That Drive Us</h2>
              <p>
                Our culture is built on transparency, improvement, and
                engineering excellence.
              </p>

              <div
                className="culture-grid"
                style={{ gridTemplateColumns: "1fr", gap: "20px", marginTop: "30px" }}
              >
                {["Client-Centricity", "Radical Transparency", "Agile Innovation"].map(
                  (title, i) => (
                    <div className="culture-item" key={i}>
                      <i className="fa-solid fa-check-circle culture-icon"></i>
                      <div>
                        <h4>{title}</h4>
                        <p style={{ marginBottom: 0, fontSize: "0.95rem" }}>
                          Built into everything we do.
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="hero-visual">
              <img
                src="https://placehold.co/600x700/F0F4F8/0A3D62?text=Work+Culture"
                alt="Collaborative workspace"
                style={{ borderRadius: "12px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT STRIP ================= */}
      <div className="contact-strip">
        <div className="container">
          <div className="strip-flex">
            <div className="strip-item">
              <i className="fa-solid fa-envelope"></i> contact@corpsolution.com
            </div>
            <div className="strip-item">
              <i className="fa-solid fa-phone"></i> +1 (555) 123-4567
            </div>
            <div className="strip-item">
              <i className="fa-solid fa-location-dot"></i> New York • London • Singapore
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default AboutUs;
