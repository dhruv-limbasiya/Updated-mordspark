import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main id="main-content" className="home-root">
      {/* HERO */}
      <section id="hero" className="hero-section">
        <div className="container hero-grid">
          <article className="hero-content">
            <h1>Trusted Digital Solutions for Modern Businesses</h1>
            <p>
              We partner with organizations to design, build, and scale secure
              digital solutions that deliver measurable business outcomes.
            </p>
            <div className="hero-actions">
              <Link to="/get-a-quote" className="btn btn-primary">Get a Quote</Link>
              {/* <a href="/get-a-quote" className="btn btn-primary">
                Get a Quote
              </a> */}
              <a href="#services" className="btn btn-secondary">
                Explore Services
              </a>
            </div>
          </article>

          <figure className="hero-image">
            <img
              src="https://placehold.co/800x500/0A3D62/FFFFFF?text=Strategic+Growth"
              alt="Corporate team analyzing data on a digital dashboard"
              width="800"
              height="500"
            />
          </figure>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-light">
        <div className="container">
          <header className="section-header">
            <span className="subheading">What We Do</span>
            <h2>Our Expertise</h2>
            <p>Capabilities Designed for Enterprise Growth</p>
          </header>

          <div className="grid-3">
            <article className="card service-card">
              <i className="fa-solid fa-chart-line service-icon" />
              <h3>Business Analytics</h3>
              <p>Turning business data into clear, informed decisions.</p>
              <Link to="/portfolio" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </Link>
            </article>

            <article className="card service-card">
              <i className="fa-solid fa-laptop-code service-icon" />
              <h3>IT Consulting</h3>
              <p>
                Practical technology guidance aligned with your business goals.
              </p>
              <Link to="/portfolio" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </Link>
            </article>

            <article className="card service-card">
              <i className="fa-solid fa-shield-halved service-icon" />
              <h3>Cyber Security</h3>
              <p>
                Safeguarding systems, data, and operations across your
                organization.
              </p>
              <Link to="/portfolio" className="service-link">
                Learn More <i className="fa-solid fa-arrow-right" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding">
        <div className="container about-grid">
          <div className="about-text-col">
            <span className="subheading">Who We Are</span>
            <h2>Focused on Long-Term Value</h2>
            <p>
              We help organizations build and manage reliable digital systems.
            </p>
            <ul className="check-list">
              <li>
                <i className="fa-solid fa-check-circle" /> Mission: Deliver
                dependable digital solutions.
              </li>
              <li>
                <i className="fa-solid fa-check-circle" /> Vision: Support
                lasting digital progress.
              </li>
              <li>
                <i className="fa-solid fa-check-circle" /> Values: Trust,
                clarity, consistency.
              </li>
            </ul>
          </div>

          <div className="about-img-col">
            <img
              src="https://placehold.co/600x450/EEE/0A3D62?text=Our+Office+Team"
              alt="CorpSolution team"
            />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose MordSpark</h2>
          </div>

          <div className="grid-3">
            <div className="feature-item">
              <div className="feature-icon-box">
                <i className="fa-solid fa-users" />
              </div>
              <div>
                <h4>Expert Team</h4>
                <p>Skilled professionals with real project experience.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <i className="fa-solid fa-clock" />
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p>Always available</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <i className="fa-solid fa-trophy" />
              </div>
              <div>
                <h4>Proven Results</h4>
                <p>A track record of successful implementations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Our Workflow</h2>
            <p>A clear, structured approach from start to delivery.</p>
          </div>

          <ol className="process-ol">
            <li className="process-li">
              <div className="process-marker">1</div>
              <h4>Consult</h4>
              <p>Understand goals and requirements.</p>
            </li>

            <li className="process-li">
              <div className="process-marker">2</div>
              <h4>Plan</h4>
              <p>Define scope, timeline, and approach.</p>
            </li>

            <li className="process-li">
              <div className="process-marker">3</div>
              <h4>Execute</h4>
              <p>Build, test, and integrate the solution.</p>
            </li>

            <li className="process-li">
              <div className="process-marker">4</div>
              <h4>Deliver</h4>
              <p>Deploy and support.</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="portfolio" className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Recent Case Studies</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <div className="project-img-container">
                <img
                  src="https://placehold.co/400x250/0A3D62/FFF?text=FinTech"
                  alt="FinTech Dashboard Interface"
                />
              </div>
              <div className="card-body" style={{ paddingTop: "20px" }}>
                <h4>FinTech Migration</h4>
                <p>
                  Modernizing legacy systems for a banking giant to improve
                  transaction speed.
                </p>
                <span className="project-metric">+45% Efficiency Increase</span>
              </div>
            </article>

            <article className="card">
              <div className="project-img-container">
                <img
                  src="https://placehold.co/400x250/1E90FF/FFF?text=Logistics+AI"
                  alt="Logistics Map Route Optimization"
                />
              </div>
              <div className="card-body" style={{ paddingTop: "20px" }}>
                <h4>Logistics AI</h4>
                <p>
                  Route optimization software for a shipping firm to reduce fuel
                  consumption.
                </p>
                <span className="project-metric">-30% Operational Costs</span>
              </div>
            </article>

            <article className="card">
              <div className="project-img-container">
                <img
                  src="https://placehold.co/400x250/333/FFF?text=Secure+Health"
                  alt="Healthcare Security Shield"
                />
              </div>
              <div className="card-body" style={{ paddingTop: "20px" }}>
                <h4>HealthData Secure</h4>
                <p>
                  HIPAA compliant cloud storage solution ensuring 100% patient
                  data privacy.
                </p>
                <span className="project-metric">100% Data Security</span>
              </div>
            </article>
          </div>

          <div className="text-center" style={{ marginTop: "40px" }}>
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Client Feedback</h2>
          </div>

          <div className="grid-3">
            <article className="card testimonial-card">
              <div className="rating" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>
                “The team delivered exactly what was outlined. Clear
                communication, strong technical execution, and dependable
                follow-through.”
              </p>
              <div className="client-meta">
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/48x48/ccc/333?text=SJ"
                    alt="Viraj Kale"
                  />
                </div>
                <div>
                  <strong>Viraj Kale</strong>
                  <br />
                  <small>CEO, Aruz</small>
                </div>
              </div>
            </article>

            <article className="card testimonial-card">
              <div className="rating" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p>
                “We saw measurable improvements shortly after implementation.
                The engagement was structured and well managed.”
              </p>
              <div className="client-meta">
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/48x48/ccc/333?text=MR"
                    alt="Raj Gosavi"
                  />
                </div>
                <div>
                  <strong>Raj Gosavi</strong>
                  <br />
                  <small>CEO, Pustak Market</small>
                </div>
              </div>
            </article>

            <article className="card testimonial-card">
              <div className="rating" aria-label="4 out of 5 stars">
                ★★★★☆
              </div>
              <p>
                “A reliable technology partner with a strong focus on security
                and operational stability.”
              </p>
              <div className="client-meta">
                <div className="client-avatar">
                  <img
                    src="https://placehold.co/48x48/ccc/333?text=DC"
                    alt="Satvir Goyal"
                  />
                </div>
                <div>
                  <strong>Satvir Goyal</strong>
                  <br />
                  <small>Director, CardPays</small>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Transparent Pricing</h2>
            <p>Select a plan that fits your scale.</p>
          </div>

          <div className="grid-3">
            <div className="card pricing-card">
              <h4>Consultant</h4>
              <div className="plan-price">
                ₹2000 
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#777",
                    fontWeight: 400,
                  }}
                >
                  /mo
                </span>
              </div>
              <ul className="plan-features">
                <li>Strategy Audit</li>
                <li>Monthly Report</li>
                <li>Email Support</li>
              </ul>
              <button
                className="btn btn-secondary"
                style={{ marginTop: "auto" }}
              >
                Choose Plan
              </button>
            </div>

            <div className="card pricing-card featured">
              <div className="badge-popular">Most Popular</div>
              <h4 style={{ marginTop: "10px" }}>Enterprise</h4>
              <div className="plan-price">
                ₹25,000
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#777",
                    fontWeight: 400,
                  }}
                >
                  /mo
                </span>
              </div>
              <ul className="plan-features">
                <li>Full Strategy Audit</li>
                <li>Weekly Reports</li>
                <li>24/7 Priority Support</li>
                <li>Dedicated Team</li>
              </ul>
              <button className="btn btn-primary" style={{ marginTop: "auto" }}>
                Choose Plan
              </button>
            </div>

            <div className="card pricing-card">
              <h4>Global</h4>
              <div className="plan-price">Custom</div>
              <ul className="plan-features">
                <li>Multi-region Support</li>
                <li>Custom Development</li>
                <li>On-site Training</li>
                <li>SLA Guarantees</li>
              </ul>
              <a
                  className="btn btn-secondary"
                  href="https://wa.me/9096807019"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start Chat
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="blog" className="section-padding bg-light">
        <div className="container">
          <div className="section-header">
            <h2>From Our Blog</h2>
          </div>

          <div className="grid-3">
            <article className="card">
              <div style={{ height: "180px", background: "#ddd" }}>
                <img
                  src="https://placehold.co/400x180/0A3D62/FFF?text=AI+Trends"
                  alt="Abstract AI graphic"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="card-body" style={{ padding: "20px" }}>
                <small style={{ color: "#666" }}>Oct 12, 2023</small>
                <h4 style={{ marginTop: "10px", fontSize: "1.1rem" }}>
                  The Future of Corporate AI
                </h4>
                <p style={{ fontSize: "0.9rem" }}>
                  How artificial intelligence is reshaping the boardroom.
                </p>
                <a
                  href="#"
                  style={{
                    color: "var(--clr-secondary)",
                    fontWeight: 600,
                  }}
                >
                  Read More
                </a>
              </div>
            </article>

            <article className="card">
              <div style={{ height: "180px", background: "#ddd" }}>
                <img
                  src="https://placehold.co/400x180/1E90FF/FFF?text=Sustainability"
                  alt="Green energy concept"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="card-body" style={{ padding: "20px" }}>
                <small style={{ color: "#666" }}>Sep 28, 2023</small>
                <h4 style={{ marginTop: "10px", fontSize: "1.1rem" }}>
                  Sustainable Growth Strategies
                </h4>
                <p style={{ fontSize: "0.9rem" }}>
                  Balancing profit with environmental responsibility.
                </p>
                <a
                  href="#"
                  style={{
                    color: "var(--clr-secondary)",
                    fontWeight: 600,
                  }}
                >
                  Read More
                </a>
              </div>
            </article>

            <article className="card">
              <div style={{ height: "180px", background: "#ddd" }}>
                <img
                  src="https://placehold.co/400x180/333/FFF?text=Security"
                  alt="Cyber lock graphic"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="card-body" style={{ padding: "20px" }}>
                <small style={{ color: "#666" }}>Sep 15, 2023</small>
                <h4 style={{ marginTop: "10px", fontSize: "1.1rem" }}>
                  Cyber Security Trends
                </h4>
                <p style={{ fontSize: "0.9rem" }}>
                  Protecting your organization in a connected world.
                </p>
                <a
                  href="#"
                  style={{
                    color: "var(--clr-secondary)",
                    fontWeight: 600,
                  }}
                >
                  Read More
                </a>
              </div>
            </article>
          </div>
        </div>
      </section> */}

      <section id="contact" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to start your project? Contact us today.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                Reach out to our sales team for inquiries regarding our
                enterprise solutions.
              </p>

              <div className="contact-detail">
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mordspark@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mordspark@gmail.com
              </a>
              </div>

              <div className="contact-detail">
                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                <a href="tel:+15551234567">+91 9096807019</a>
              </div>

              <div className="contact-detail">
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>
                  Pune, Maharastra
                </span>
              </div>
            </div>

            <form
              id="contactForm"
              className="contact-form"
              action="#"
              method="POST"
              noValidate
            >
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
