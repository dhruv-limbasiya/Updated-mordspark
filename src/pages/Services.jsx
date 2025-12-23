import "./services.css";

const Services = () => {
    return (
        <main id="main-content">
            {/* ================= PAGE HERO ================= */}
            <section className="page-hero">
                <div className="container">
                    <div className="hero-split">
                        <div className="hero-text">
                            <span
                                className="subheading"
                                style={{ color: "#64b5f6" }}
                            >
                                Our Capabilities
                            </span>
                            <h1>World-Class Digital Services</h1>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "15px",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <p>
                                    We combine strategic thinking with technical excellence to
                                    deliver solutions that drive real business value. From data
                                    analytics to custom software, we have you covered.
                                </p>

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "15px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <a href="#contact" className="btn btn-secondary btn-quote" style={{borderColor: "white",color: "white"}}>
                                        Get a Quote
                                    </a>
                                    <a
                                        href="#core-services"
                                        className="btn btn-white"
                                    >
                                        View Services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CORE SERVICES ================= */}
            <section id="core-services" className="section-padding bg-light">
                <div className="container">
                    <header className="section-header">
                        <span className="subheading">What We Offer</span>
                        <h2>Core Services</h2>
                        <p>
                            Our multidisciplinary team provides end-to-end solutions for
                            modern enterprises.
                        </p>
                    </header>

                    <div className="grid-3">
                        <article className="card">
                            <i className="fa-solid fa-chart-pie service-icon" />
                            <h3>Data Analytics</h3>
                            <p>
                                Transform raw data into actionable intelligence with our
                                advanced BI solutions and predictive modeling.
                            </p>
                            <a href="#analytics-detail" className="service-link">
                                Learn More <i className="fa-solid fa-arrow-right" />
                            </a>
                        </article>

                        <article className="card">
                            <i className="fa-solid fa-code service-icon" />
                            <h3>Software Dev</h3>
                            <p>
                                Custom enterprise software, web applications, and mobile
                                solutions built for scale and security.
                            </p>
                            <a href="#software-detail" className="service-link">
                                Learn More <i className="fa-solid fa-arrow-right" />
                            </a>
                        </article>

                        <article className="card">
                            <i className="fa-solid fa-cloud service-icon" />
                            <h3>Cloud Solutions</h3>
                            <p>
                                Migration strategy, architecture design, and management for
                                AWS, Azure, and Google Cloud.
                            </p>
                            <a href="#cloud-detail" className="service-link">
                                Learn More <i className="fa-solid fa-arrow-right" />
                            </a>
                        </article>

                        <article className="card">
                            <i className="fa-solid fa-shield-halved service-icon" />
                            <h3>Cyber Security</h3>
                            <p>
                                Comprehensive security audits, penetration testing, and
                                compliance management (HIPAA/GDPR).
                            </p>
                            <a href="#security-detail" className="service-link">
                                Learn More <i className="fa-solid fa-arrow-right" />
                            </a>
                        </article>

                        <article className="card">
                            <i className="fa-solid fa-lightbulb service-icon" />
                            <h3>IT Consulting</h3>
                            <p>
                                Strategic roadmaps to modernize legacy systems and align
                                technology with business goals.
                            </p>
                            <a href="#consulting-detail" className="service-link">
                                Learn More <i className="fa-solid fa-arrow-right" />
                            </a>
                        </article>

                        <article className="card">
                            <i className="fa-solid fa-mobile-screen service-icon" />
                            <h3>Mobile Apps</h3>
                            <p>
                                Native and cross-platform mobile applications designed for
                                user engagement and performance.
                            </p>
                            <a href="#mobile-detail" className="service-link">
                                Learn More <i className="fa-solid fa-arrow-right" />
                            </a>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================= SERVICE DETAILS ================= */}
            <section className="section-padding">
                <div className="container">
                    {/* Analytics */}
                    <div id="analytics-detail" className="service-row">
                        <div className="service-row-content">
                            <span className="subheading">Data & Intelligence</span>
                            <h2>Business Analytics</h2>
                            <p>
                                In today's economy, data is your most valuable asset. We help
                                you unlock its potential through advanced visualization,
                                warehousing, and machine learning models.
                            </p>
                            <ul className="service-features">
                                <li><i className="fa-solid fa-check-circle" /> Predictive Modeling</li>
                                <li><i className="fa-solid fa-check-circle" /> KPI Dashboards (PowerBI / Tableau)</li>
                                <li><i className="fa-solid fa-check-circle" /> Data Warehousing</li>
                                <li><i className="fa-solid fa-check-circle" /> Big Data Processing</li>
                            </ul>
                            <a href="#contact" className="btn btn-primary">
                                Request Consultation
                            </a>
                        </div>

                        <div className="service-row-image">
                            <img
                                src="https://placehold.co/600x400/F0F4F8/0A3D62?text=Data+Analytics+Dashboard"
                                alt="Data analytics dashboard"
                                width="600"
                                height="400"
                            />
                        </div>
                    </div>

                    {/* Software */}
                    <div id="software-detail" className="service-row">
                        <div className="service-row-content">
                            <span className="subheading">Engineering</span>
                            <h2>Custom Software Development</h2>
                            <p>
                                Off-the-shelf software rarely fits unique enterprise needs.
                                We build robust, scalable custom solutions.
                            </p>
                            <ul className="service-features">
                                <li><i className="fa-solid fa-check-circle" /> Full-Stack Web Development</li>
                                <li><i className="fa-solid fa-check-circle" /> API Design & Integration</li>
                                <li><i className="fa-solid fa-check-circle" /> Legacy System Modernization</li>
                                <li><i className="fa-solid fa-check-circle" /> Microservices Architecture</li>
                            </ul>
                            <a href="#contact" className="btn btn-primary">
                                Start a Project
                            </a>
                        </div>

                        <div className="service-row-image">
                            <img
                                src="https://placehold.co/600x400/F0F4F8/1E90FF?text=Code+Architecture"
                                alt="Software development code on screen"
                                width="600"
                                height="400"
                            />
                        </div>
                    </div>

                    {/* Consulting */}
                    <div id="consulting-detail" className="service-row">
                        <div className="service-row-content">
                            <span className="subheading">Strategy</span>
                            <h2>IT Consulting & Strategy</h2>
                            <p>
                                Our consultants assess your current digital maturity and
                                define a clear roadmap for transformation.
                            </p>
                            <ul className="service-features">
                                <li><i className="fa-solid fa-check-circle" /> Digital Transformation Roadmaps</li>
                                <li><i className="fa-solid fa-check-circle" /> Tech Stack Selection</li>
                                <li><i className="fa-solid fa-check-circle" /> Vendor Management</li>
                                <li><i className="fa-solid fa-check-circle" /> Cost Optimization Audit</li>
                            </ul>
                            <a href="#contact" className="btn btn-primary">
                                Speak to an Expert
                            </a>
                        </div>

                        <div className="service-row-image">
                            <img
                                src="https://placehold.co/600x400/F0F4F8/333333?text=Strategic+Planning"
                                alt="Consultants meeting in office"
                                width="600"
                                height="400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= INDUSTRIES ================= */}
            <section className="section-padding">
                <div className="container text-center">
                    <div className="section-header">
                        <h2>Industries We Serve</h2>
                        <p>Deep domain expertise across key sectors.</p>
                    </div>

                    <div className="industry-grid">
                        <div className="industry-tag"><i className="fa-solid fa-building-columns" /> FinTech & Banking</div>
                        <div className="industry-tag"><i className="fa-solid fa-stethoscope" /> Healthcare</div>
                        <div className="industry-tag"><i className="fa-solid fa-cart-shopping" /> Retail & E-Commerce</div>
                        <div className="industry-tag"><i className="fa-solid fa-truck-fast" /> Logistics</div>
                        <div className="industry-tag"><i className="fa-solid fa-graduation-cap" /> EdTech</div>
                        <div className="industry-tag"><i className="fa-solid fa-industry" /> Manufacturing</div>
                        <div className="industry-tag"><i className="fa-solid fa-house-chimney" /> Real Estate</div>
                    </div>
                </div>
            </section>

            {/* ================= ENGAGEMENT MODELS ================= */}
            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header">
                        <h2>Engagement Models</h2>
                        <p>Flexible ways to work with our team.</p>
                    </div>

                    <div className="grid-3">
                        <div className="card engagement-card">
                            <i className="fa-solid fa-file-contract engagement-icon"></i>
                            <h4>Fixed Price</h4>
                            <p>
                                Best for well-defined projects with clear scopes and timelines.
                                No surprises on budget.
                            </p>
                            <ul className="engagement-list">
                                <li>Clear deliverables</li>
                                <li>Set deadline</li>
                                <li>Low risk for client</li>
                            </ul>
                            <button
                                className="btn btn-secondary"
                                style={{ marginTop: "auto" }}
                            >
                                Select Model
                            </button>
                        </div>

                        <div className="card engagement-card">
                            <i className="fa-solid fa-hourglass-half engagement-icon"></i>
                            <h4>Time &amp; Material</h4>
                            <p>
                                Ideal for evolving projects where flexibility is required.
                                Pay only for the hours worked.
                            </p>
                            <ul className="engagement-list">
                                <li>Agile flexibility</li>
                                <li>Change requirements anytime</li>
                                <li>Continuous delivery</li>
                            </ul>
                            <button
                                className="btn btn-secondary"
                                style={{ marginTop: "auto" }}
                            >
                                Select Model
                            </button>
                        </div>

                        <div className="card engagement-card">
                            <i className="fa-solid fa-users-gear engagement-icon"></i>
                            <h4>Dedicated Team</h4>
                            <p>
                                An extension of your in-house team. Full-time experts dedicated
                                solely to your project.
                            </p>
                            <ul className="engagement-list">
                                <li>Full control over team</li>
                                <li>Long-term collaboration</li>
                                <li>Knowledge retention</li>
                            </ul>
                            <button
                                className="btn btn-secondary"
                                style={{ marginTop: "auto" }}
                            >
                                Select Model
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Services;
