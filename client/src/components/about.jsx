// src/components/About/About.jsx
import React from 'react';
// import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text mono">ABOUT_ME</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a full-stack developer with a passion for building robust, scalable systems. My approach combines technical precision with creative problem-solving to deliver solutions that stand the test of scale.
            </p>
            <p className="about-paragraph">
              With 5+ years of experience, I've developed a systems-first mindset—focusing not just on features but on architecture, performance, and maintainability. I thrive in complex technical environments where elegant solutions make the difference.
            </p>
            <p className="about-paragraph">
              My philosophy: <span className="highlight">"I force the system to adapt to me."</span> This means understanding the rules deeply enough to know when and how to bend them for optimal results.
            </p>
            
            <div className="skills-section">
              <h3 className="skills-title">Core Skills</h3>
              <div className="skills-container">
                <span className="skill-pill">React</span>
                <span className="skill-pill">Node.js</span>
                <span className="skill-pill">MongoDB</span>
                <span className="skill-pill">TypeScript</span>
                <span className="skill-pill">Linux</span>
                <span className="skill-pill">Performance</span>
                <span className="skill-pill">Git</span>
                <span className="skill-pill">Docker</span>
                <span className="skill-pill">CI/CD</span>
              </div>
            </div>
          </div>
          
          <div className="terminal-container">
            <div className="gradient-border">
              <div className="terminal">
                <div className="terminal-line">$ whoami</div>
                <div className="terminal-response"> Full-stack system architect</div>
                <div className="terminal-line">$ locate expertise</div>
                <div className="terminal-response"> React • Node • MongoDB • TypeScript</div>
                <div className="terminal-line">$ find philosophy</div>
                <div className="terminal-response"> Systems features</div>
                <div className="terminal-line">$ grep mindset</div>
                <div className="terminal-response"> Growth-oriented • Detail-focused</div>
                <div className="terminal-line">$ cat experience</div>
                <div className="terminal-response"> 5+ years building at scale</div>
                <div className="terminal-line">$ tail -f current_projects</div>
                <div className="terminal-response"> Optimizing system performance</div>
                <div className="terminal-response"> Designing scalable architectures</div>
                <div className="blinking-cursor">_</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;