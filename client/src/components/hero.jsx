import React from "react";
import styles from "../styles/hero.module.scss";
import { smoothScroll } from "../utils/smoothScroll";


const Hero = () => {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    smoothScroll(targetId, 80); // 80px offset to account for fixed header if you have one
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}></div>

      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span className={`${styles.badgeText} mono`}>SYSTEM_DEV v2.0.0</span>
        </div>

        <h1 className={styles.heroTitle}>
          <span
            className={`${styles.gradientText} ${styles.fadeInUp}`}
            style={{ animationDelay: "0.2s" }}
          >
            System-focused
          </span>
          <br />
          <span
            className={`${styles.typewriter} ${styles.fadeInUp}`}
            style={{ animationDelay: "0.5s" }}
          >
            Full-Stack Developer
          </span>
        </h1>

        <p className={styles.heroSubtitle}>
          I don't just build websites—I architect{" "}
          <span className={styles.highlight}>systems</span>.
        </p>

        <div className={styles.heroButtons}>
          <a href="#projects" className={styles.primaryButton}>
            Explore Projects
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Contact Me
          </a>
        </div>

        <div className={styles.heroScroll}>
          <div className={`${styles.scrollCircle} ${styles.floating}`}>
            <a href="#about" className={styles.scrollLink} aria-label="Scroll to about"
            onClick={(e)=> handleClick(e,'about')}
            >
              {/* keep FontAwesome classes, add module animation class */}
              <i className={`fas fa-chevron-down ${styles.animateBounce}`} aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
