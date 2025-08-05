// src/components/Hero/Hero.jsx
import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-text mono">SYSTEM_DEV v2.0.0</span>
        </div>
        <h1 className="hero-title">
          <span className="gradient-text">System-focused</span><br />
          <span className="typewriter">Full-Stack Developer</span>
        </h1>
        <p className="hero-subtitle">
          I don't just build websites—I architect <span className="highlight">systems</span>.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            Explore Projects
          </a>
          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
        
        <div className="hero-scroll">
          <div className="scroll-circle floating">
            <a href="#about" className="scroll-link">
              <i className="fas fa-chevron-down animate-bounce"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;