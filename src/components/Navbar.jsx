import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link to="/" className="brand-logo">
          Mord<span>Spark</span>
        </Link>

        <button
          className="hamburger-btn"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        
        <nav className={`nav-links nav-primary ${open ? "active" : ""}`}>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/services" className="nav-item">Services</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/portfolio" className="nav-item">Portfolio</Link>
          <Link to="/pricing" className="nav-item">Pricing</Link>
          <Link to="/contact" className="nav-item">Contact</Link>

          <Link to="/quote" className="btn btn-primary mobile-cta">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>

  );
};

export default Navbar;
