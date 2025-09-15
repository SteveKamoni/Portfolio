// src/components/Footer/Footer.jsx
import React from 'react';
import styles from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <a href="#hero" className={`${styles.footerLogo} ${styles.gradientText} ${styles.mono}`}>
            SYSTEM_DEV
          </a>
          <p className={styles.footerSubtitle}>Building systems, not just websites.</p>
        </div>

        <nav className={styles.footerNav}>
          <a href="#hero" className={styles.footerNavLink}>Home</a>
          <a href="#about" className={styles.footerNavLink}>About</a>
          <a href="#projects" className={styles.footerNavLink}>Projects</a>
          <a href="#tech" className={styles.footerNavLink}>Tech</a>
          <a href="#contact" className={styles.footerNavLink}>Contact</a>
        </nav>

        <div className={styles.footerSocial}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.footerSocialLink}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:contact@systemdev.com" className={styles.footerSocialLink}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <p className={styles.footerCopyright}>© 2025 SYSTEM_DEV. All rights reserved.</p>
    </footer>
  );
};

export default Footer;