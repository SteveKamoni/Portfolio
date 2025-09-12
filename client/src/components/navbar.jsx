import React, { useState } from "react";
import styles from "../styles/nav.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>SYSTEM_DEV</span>
        </div>

        {/* Desktop Nav */}
        <ul className={styles.linksDesktop}>
          <li><a href="#hero" className={styles.navLink}>Home</a></li>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#projects" className={styles.navLink}>Projects</a></li>
          <li><a href="#tech" className={styles.navLink}>Tech</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>

        {/* Mobile Toggle */}
        <div className={styles.menuToggle}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuButton}
            aria-label="Toggle menu"
          >
            <svg
              className={styles.menuIcon}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <li><a href="#hero" className={styles.mobileLink} onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" className={styles.mobileLink} onClick={handleLinkClick}>About</a></li>
        <li><a href="#projects" className={styles.mobileLink} onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#tech" className={styles.mobileLink} onClick={handleLinkClick}>Tech</a></li>
        <li><a href="#contact" className={styles.mobileLink} onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
