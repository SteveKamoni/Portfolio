// src/components/Footer/Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#hero" className="footer-logo gradient-text mono">SYSTEM_DEV</a>
          <p className="footer-subtitle">Building systems, not just websites.</p>
        </div>

        <nav className="footer-nav">
          <a href="#hero" className="footer-nav-link">Home</a>
          <a href="#about" className="footer-nav-link">About</a>
          <a href="#projects" className="footer-nav-link">Projects</a>
          <a href="#tech" className="footer-nav-link">Tech</a>
          <a href="#contact" className="footer-nav-link">Contact</a>
        </nav>

        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:contact@systemdev.com" className="footer-social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <p className="footer-copyright">© 2025 SYSTEM_DEV. All rights reserved.</p>
    </footer>
  );
};

export default Footer;