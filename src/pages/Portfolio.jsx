import { useState } from "react";
import "./Portfolio.css";

const FILTERS = [
  { label: "All Projects", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Enterprise", value: "enterprise" },
  { label: "Consulting", value: "consulting" },
];

const PROJECTS = [
  {
    id: 1,
    category: "web",
    label: "Web Development",
    title: "FinTech Global Dashboard",
    desc: "A comprehensive banking dashboard for managing international assets.",
    img: "https://placehold.co/400x300/1E90FF/FFFFFF?text=FinTech+Platform",
  },
  {
    id: 2,
    category: "mobile",
    label: "Mobile Apps",
    title: "MediCare Connect",
    desc: "Patient portal mobile application with HIPAA compliant video conferencing.",
    img: "https://placehold.co/400x300/0A3D62/FFFFFF?text=Health+App",
  },
  {
    id: 3,
    category: "enterprise",
    label: "Enterprise",
    title: "Logistics ERP Suite",
    desc: "Supply chain management system for a global shipping firm.",
    img: "https://placehold.co/400x300/333333/FFFFFF?text=ERP+System",
  },
  {
    id: 4,
    category: "consulting",
    label: "Consulting",
    title: "Legacy Cloud Migration",
    desc: "Transitioning on-premise infrastructure to AWS for a retail giant.",
    img: "https://placehold.co/400x300/666666/FFFFFF?text=Cloud+Migration",
  },
  {
    id: 5,
    category: "web",
    label: "Web Development",
    title: "ShopScale E-Commerce",
    desc: "Headless e-commerce solution handling 50k+ daily transactions.",
    img: "https://placehold.co/400x300/1E90FF/FFFFFF?text=E-Commerce",
  },
  {
    id: 6,
    category: "mobile",
    label: "Mobile Apps",
    title: "FitPulse Tracker",
    desc: "Real-time biometric tracking app integrated with wearable IoT devices.",
    img: "https://placehold.co/400x300/0A3D62/FFFFFF?text=Fitness+Tracker",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>Our Portfolio</h1>
            <p>
              We partner with Fortune 500 companies and ambitious startups to
              deliver scalable, secure, and impactful digital solutions.
            </p>
            <a href="#projects" className="btn btn-primary btn-light">
              View Projects
            </a>
          </div>

          <div className="hero-visual">
            <img
              src="https://placehold.co/800x500/0A3D62/FFFFFF?text=Project+Showcase"
              alt="Portfolio showcase"
            />
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="filter-section" id="projects">
        <div className="container">
          <div className="filter-container">
            {FILTERS.map(f => (
              <button
                key={f.value}
                className={`filter-btn ${
                  activeFilter === f.value ? "active" : ""
                }`}
                aria-pressed={activeFilter === f.value}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="portfolio-grid">
            {visibleProjects.map(project => (
              <article className="project-card" key={project.id}>
                <div className="card-thumb">
                  <img src={project.img} alt={project.title} />
                </div>

                <div className="card-body">
                  <span className="cat-badge">{project.label}</span>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>
                  <a className="card-link">
                    View Case Study{" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      

      {/* CONTACT STRIP */}
      <div className="contact-strip">
        <div className="container strip-flex">
          <div className="strip-item">
            <i className="fa-solid fa-envelope"></i> contact@corpsolution.com
          </div>
          <div className="strip-item">
            <i className="fa-solid fa-phone"></i> +1 (555) 123-4567
          </div>
          <div className="strip-item">
            <i className="fa-solid fa-location-dot"></i> New York • London •
            Singapore
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
