// src/components/TechStack/TechStack.jsx
import React from 'react';
import styles from '../styles/techstack.module.scss';

const TechStack = () => {
  return (
    <section id="tech" className={styles.techSection}>
      <div className={styles.techContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={`${styles.gradientText} ${styles.mono}`}>TECH_STACK</span>
          </h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Tools and technologies I use to build robust systems
          </p>
        </div>
        
        <div className={styles.techGrid}>
          {/* Frontend */}
          <div className={styles.techCard}>
            <div className={styles.techCardInner}>
              <div className={styles.techCardHeader}>
                <div className={styles.techIcon}>
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className={styles.techTitle}>Frontend</h3>
              </div>
              <ul className={styles.techList}>
                <li className={styles.techItem}>React</li>
                <li className={styles.techItem}>TypeScript</li>
                <li className={styles.techItem}>Tailwind CSS</li>
                <li className={styles.techItem}>Next.js</li>
              </ul>
            </div>
          </div>
          
          {/* Backend */}
          <div className={styles.techCard}>
            <div className={styles.techCardInner}>
              <div className={styles.techCardHeader}>
                <div className={styles.techIcon}>
                  <i className="fas fa-server"></i>
                </div>
                <h3 className={styles.techTitle}>Backend</h3>
              </div>
              <ul className={styles.techList}>
                <li className={styles.techItem}>Node.js</li>
                <li className={styles.techItem}>Express</li>
                <li className={styles.techItem}>NestJS</li>
                <li className={styles.techItem}>GraphQL</li>
              </ul>
            </div>
          </div>
          
          {/* Database */}
          <div className={styles.techCard}>
            <div className={styles.techCardInner}>
              <div className={styles.techCardHeader}>
                <div className={styles.techIcon}>
                  <i className="fas fa-database"></i>
                </div>
                <h3 className={styles.techTitle}>Database</h3>
              </div>
              <ul className={styles.techList}>
                <li className={styles.techItem}>MongoDB</li>
                <li className={styles.techItem}>PostgreSQL</li>
                <li className={styles.techItem}>Redis</li>
                <li className={styles.techItem}>Elasticsearch</li>
              </ul>
            </div>
          </div>
          
          {/* DevOps */}
          <div className={styles.techCard}>
            <div className={styles.techCardInner}>
              <div className={styles.techCardHeader}>
                <div className={styles.techIcon}>
                  <i className="fas fa-cloud"></i>
                </div>
                <h3 className={styles.techTitle}>DevOps</h3>
              </div>
              <ul className={styles.techList}>
                <li className={styles.techItem}>Docker</li>
                <li className={styles.techItem}>Kubernetes</li>
                <li className={styles.techItem}>AWS</li>
                <li className={styles.techItem}>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;