import "./home.css";

const Home = () => {
    return (
    <>
        <main id="main-content">
            <section id="hero" className="hero-section">
                <div className="container hero-grid">
                    <article className="hero-content">
                        <h1>We Build Reliable Digital Solutions</h1>
                        <p>
                            Empowering enterprises with scalable technology, data-driven
                            strategies, and world-class support to drive sustainable growth in
                            a complex digital landscape.
                        </p>
                        <div className="hero-actions">
                            <a href="#contact" className="btn btn-primary">
                                Get a Quote
                            </a>
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

            <section id="services" className="section-padding bg-light">
                <div className="container">
                    <header className="section-header">
                        <span className="subheading">What We Do</span>
                        <h2>Our Expertise</h2>
                        <p>
                            Comprehensive business solutions tailored to your specific
                            industry needs.
                        </p>
                    </header>

                    <div className="grid-3">
                        <article className="card service-card">
                            <i
                                className="fa-solid fa-chart-line service-icon"
                                aria-hidden="true"
                            ></i>
                            <h3>Business Analytics</h3>
                            <p>
                                Unlock actionable insights from your raw data to make informed
                                decisions and drive operational efficiency.
                            </p>
                            <a
                                href="#"
                                className="service-link"
                                aria-label="Learn more about Business Analytics"
                            >
                                Learn More{" "}
                                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </article>

                        <article className="card service-card">
                            <i
                                className="fa-solid fa-laptop-code service-icon"
                                aria-hidden="true"
                            ></i>
                            <h3>IT Consulting</h3>
                            <p>
                                Strategic technology planning to modernize your legacy systems
                                and optimize digital infrastructure.
                            </p>
                            <a
                                href="#"
                                className="service-link"
                                aria-label="Learn more about IT Consulting"
                            >
                                Learn More{" "}
                                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </article>

                        <article className="card service-card">
                            <i
                                className="fa-solid fa-shield-halved service-icon"
                                aria-hidden="true"
                            ></i>
                            <h3>Cyber Security</h3>
                            <p>
                                Protecting your enterprise assets and customer data with
                                state-of-the-art security protocols.
                            </p>
                            <a
                                href="#"
                                className="service-link"
                                aria-label="Learn more about Cyber Security"
                            >
                                Learn More{" "}
                                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            <section id="about" className="section-padding">
                <div className="container about-grid">
                    <div className="about-text-col">
                        <span className="subheading">Who We Are</span>
                        <h2>Driving Innovation Since 2010</h2>
                        <p>
                            CorpSolution is a global leader in business transformation. We
                            partner with Fortune 500 companies to solve their most complex
                            challenges through technology and innovation.
                        </p>
                        <ul className="check-list">
                            <li>
                                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>{" "}
                                <strong>Mission:</strong> To accelerate digital adoption.
                            </li>
                            <li>
                                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>{" "}
                                <strong>Vision:</strong> A connected, efficient global economy.
                            </li>
                            <li>
                                <i className="fa-solid fa-check-circle" aria-hidden="true"></i>{" "}
                                <strong>Values:</strong> Integrity, Excellence, Innovation.
                            </li>
                        </ul>
                    </div>

                    <div className="about-img-col">
                        <img
                            src="https://placehold.co/600x450/EEE/0A3D62?text=Our+Office+Team"
                            alt="CorpSolution team collaborating in a modern office"
                            width="600"
                            height="450"
                        />
                    </div>
                </div>
            </section>

            <section id="why-us" className="section-padding bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Choose CorpSolution</h2>
                    </div>

                    <div className="grid-3">
                        <div className="feature-item">
                            <div className="feature-icon-box">
                                <i className="fa-solid fa-users" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h4>Expert Team</h4>
                                <p>50+ Certified professionals dedicated to your success.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon-box">
                                <i className="fa-solid fa-clock" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h4>24/7 Support</h4>
                                <p>Always here when you need us, across all time zones.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="feature-icon-box">
                                <i className="fa-solid fa-trophy" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h4>Proven Results</h4>
                                <p>Award-winning strategies delivering high ROI.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="process" className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Workflow</h2>
                        <p>A streamlined, transparent process designed for efficiency.</p>
                    </div>

                    <ol className="process-ol">
                        <li className="process-li">
                            <div className="process-marker">1</div>
                            <h4>Consult</h4>
                            <p>We analyze your needs.</p>
                        </li>

                        <li className="process-li">
                            <div className="process-marker">2</div>
                            <h4>Plan</h4>
                            <p>Blueprint for success.</p>
                        </li>

                        <li className="process-li">
                            <div className="process-marker">3</div>
                            <h4>Execute</h4>
                            <p>Building the solution.</p>
                        </li>

                        <li className="process-li">
                            <div className="process-marker">4</div>
                            <h4>Deliver</h4>
                            <p>Launch and support.</p>
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
                        <a href="#" className="btn btn-primary">
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2>Trusted by Leaders</h2>
                    </div>

                    <div className="grid-3">
                        <article className="card testimonial-card">
                            <div className="rating" aria-label="5 out of 5 stars">
                                ★★★★★
                            </div>
                            <p>
                                "CorpSolution transformed our digital landscape. Their
                                professionalism and technical depth are unmatched in the
                                industry."
                            </p>
                            <div className="client-meta">
                                <div className="client-avatar">
                                    <img
                                        src="https://placehold.co/48x48/ccc/333?text=SJ"
                                        alt="Sarah Jenkins"
                                    />
                                </div>
                                <div>
                                    <strong>Sarah Jenkins</strong>
                                    <br />
                                    <small>CEO, TechWave</small>
                                </div>
                            </div>
                        </article>

                        <article className="card testimonial-card">
                            <div className="rating" aria-label="5 out of 5 stars">
                                ★★★★★
                            </div>
                            <p>
                                "The ROI we achieved with their strategy was visible within the
                                first quarter. Highly recommended for scaling companies."
                            </p>
                            <div className="client-meta">
                                <div className="client-avatar">
                                    <img
                                        src="https://placehold.co/48x48/ccc/333?text=MR"
                                        alt="Michael Ross"
                                    />
                                </div>
                                <div>
                                    <strong>Michael Ross</strong>
                                    <br />
                                    <small>Director, Ross Global</small>
                                </div>
                            </div>
                        </article>

                        <article className="card testimonial-card">
                            <div className="rating" aria-label="4 out of 5 stars">
                                ★★★★☆
                            </div>
                            <p>
                                "Reliable, secure, and efficient. Exactly what a corporate
                                partner should be. Their support team is fantastic."
                            </p>
                            <div className="client-meta">
                                <div className="client-avatar">
                                    <img
                                        src="https://placehold.co/48x48/ccc/333?text=DC"
                                        alt="David Chen"
                                    />
                                </div>
                                <div>
                                    <strong>David Chen</strong>
                                    <br />
                                    <small>CTO, BuildCo</small>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container text-center">
                    <span className="subheading">Our Partners</span>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "40px",
                            flexWrap: "wrap",
                            opacity: 0.6,
                            marginTop: "20px",
                        }}
                    >
                        <span
                            style={{ fontWeight: 700, fontSize: "1.5rem", color: "#999" }}
                        >
                            LOGOIPSUM
                        </span>
                        <span
                            style={{ fontWeight: 700, fontSize: "1.5rem", color: "#999" }}
                        >
                            BRANDCORP
                        </span>
                        <span
                            style={{ fontWeight: 700, fontSize: "1.5rem", color: "#999" }}
                        >
                            ENTERPRISE
                        </span>
                        <span
                            style={{ fontWeight: 700, fontSize: "1.5rem", color: "#999" }}
                        >
                            PARTNER
                        </span>
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
                                $999
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
                                $2,499
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
                                <li>Dedicated Manager</li>
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
                            <button
                                className="btn btn-secondary"
                                style={{ marginTop: "auto" }}
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="blog" className="section-padding bg-light">
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
                                    style={{ color: "var(--clr-secondary)", fontWeight: 600 }}
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
                                    style={{ color: "var(--clr-secondary)", fontWeight: 600 }}
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
                                    style={{ color: "var(--clr-secondary)", fontWeight: 600 }}
                                >
                                    Read More
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

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
                                <a href="mailto:contact@corpsolution.com">
                                    contact@corpsolution.com
                                </a>
                            </div>

                            <div className="contact-detail">
                                <i className="fa-solid fa-phone" aria-hidden="true"></i>
                                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                            </div>

                            <div className="contact-detail">
                                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                <span>
                                    123 Business Blvd, Suite 400
                                    <br />
                                    New York, NY 10001
                                </span>
                            </div>

                            <div
                                role="img"
                                aria-label="Map showing office location in New York"
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    background: "#f4f4f4",
                                    marginTop: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#666",
                                    border: "1px solid #ddd",
                                }}
                            >
                                Interactive Map Placeholder
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
                                    rows="5"
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
    </>    
    );
};

export default Home;
