import { useState } from "react";
import "./ContactUs.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSending(true);

    setTimeout(() => {
      alert("Thank you! Your message has been sent successfully.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setSending(false);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="contact-root">

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Let’s Talk Business</h1>
            <p>
              Have a question or a project in mind? Our team is ready to help you
              elevate your business to the next level.
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-shape"></div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CARDS ================= */}
      <section className="contact-cards">
        <div className="container">
          <div className="cards-grid">
            <div className="info-card">
              <div className="icon-box">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:info@mordspark.com">info@mordspark.com</a>
              </p>
              <p>
                <a href="mailto:support@mordspark.com">support@mordspark.com</a>
              </p>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Call Us</h3>
              <p>
                <a href="tel:+911234567890">+91 9322465522</a>
              </p>
              <p>Mon-Fri, 9am - 6pm</p>
            </div>

            <div className="info-card">
              <div className="icon-box">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>WhatsApp</h3>
              <p>Chat with Support</p>
              <p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start Chat
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="section-header">
              <h2>Send us a Message</h2>
              <p style={{ color: "var(--clr-text-muted)" }}>
                We usually reply within 24 hours.
              </p>
            </div>

            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    borderColor: errors.name ? "#d32f2f" : "#ccc",
                  }}
                />
                {errors.name && (
                  <span className="error-message" style={{ display: "block" }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    borderColor: errors.email ? "#d32f2f" : "#ccc",
                  }}
                />
                {errors.email && (
                  <span className="error-message" style={{ display: "block" }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91..."
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    borderColor: errors.message ? "#d32f2f" : "#ccc",
                  }}
                ></textarea>
                {errors.message && (
                  <span className="error-message" style={{ display: "block" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="form-group full-width" style={{ marginTop: "10px" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    backgroundColor: sending ? "#28a745" : "",
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
