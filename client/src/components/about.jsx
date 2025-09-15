import React from "react";
import styles from "../styles/about.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={`${styles.gradientText} mono`}>ABOUT_ME</span>
          </h2>
          <div className={styles.sectionDivider}></div>
        </div>

        <div className={styles.aboutContent}>
          {/* Left Side */}
          <div className={styles.aboutText}>
            <p className={styles.aboutParagraph}>
              I'm a full-stack developer with a passion for building robust,
              scalable systems. My approach combines technical precision with
              creative problem-solving to deliver solutions that stand the test
              of scale.
            </p>
            <p className={styles.aboutParagraph}>
              With 5+ years of experience, I've developed a systems-first
              mindset—focusing not just on features but on architecture,
              performance, and maintainability. I thrive in complex technical
              environments where elegant solutions make the difference.
            </p>
            <p className={styles.aboutParagraph}>
              My philosophy:{" "}
              <span className={styles.highlight}>
                "I force the system to adapt to me."
              </span>{" "}
              This means understanding the rules deeply enough to know when and
              how to bend them for optimal results.
            </p>

            <div className={styles.skillsSection}>
              <h3 className={styles.skillsTitle}>Core Skills</h3>
              <div className={styles.skillsContainer}>
                <span className={styles.skillPill}>React</span>
                <span className={styles.skillPill}>Node.js</span>
                <span className={styles.skillPill}>MongoDB</span>
                <span className={styles.skillPill}>TypeScript</span>
                <span className={styles.skillPill}>Linux</span>
                <span className={styles.skillPill}>Performance</span>
                <span className={styles.skillPill}>Git</span>
                <span className={styles.skillPill}>Docker</span>
                <span className={styles.skillPill}>CI/CD</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className={styles.terminalContainer}>
            <div className={styles.gradientBorder}>
              <div className={styles.terminal}>
                <div className={styles.terminalLine}>$ whoami</div>
                <div className={styles.terminalResponse}>
                  Full-stack system architect
                </div>
                <div className={styles.terminalLine}>$ locate expertise</div>
                <div className={styles.terminalResponse}>
                  React • Node • MongoDB • TypeScript
                </div>
                <div className={styles.terminalLine}>$ find philosophy</div>
                <div className={styles.terminalResponse}>Systems features</div>
                <div className={styles.terminalLine}>$ grep mindset</div>
                <div className={styles.terminalResponse}>
                  Growth-oriented • Detail-focused
                </div>
                <div className={styles.terminalLine}>$ cat experience</div>
                <div className={styles.terminalResponse}>
                  5+ years building at scale
                </div>
                <div className={styles.terminalLine}>
                  $ tail -f current_projects
                </div>
                <div className={styles.terminalResponse}>
                  Optimizing system performance
                </div>
                <div className={styles.terminalResponse}>
                  Designing scalable architectures
                </div>
                <div className={styles.blinkingCursor}>_</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
