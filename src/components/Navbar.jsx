import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link to="/" className="brand-logo" aria-label="MordSpark Home">
          Mord<span>Spark</span>
        </Link>

        <button
          className="hamburger-btn"
          aria-label="Toggle navigation m enu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" className="nav-item" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" className="nav-item" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/about" className="nav-item" onClick={() => setOpen(false)}>About</Link>
          <Link to="/portfolio" className="nav-item" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link to="/pricing" className="nav-item" onClick={() => setOpen(false)}>Pricing</Link>
          <Link to="/contact" className="nav-item" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/quote" className="btn btn-primary" onClick={() => setOpen(false)}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
