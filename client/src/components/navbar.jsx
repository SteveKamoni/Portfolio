import React, { useState } from 'react';
import './nav.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">SYSTEM_DEV</span>
        </div>

        <div className="navbar-links-desktop">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#tech" className="nav-link">Tech</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="menu-toggle">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
          >
            <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#hero" className="mobile-link">Home</a>
        <a href="#about" className="mobile-link">About</a>
        <a href="#projects" className="mobile-link">Projects</a>
        <a href="#tech" className="mobile-link">Tech</a>
        <a href="#contact" className="mobile-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
