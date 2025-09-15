// src/components/Projects/Projects.jsx
import React from 'react';
import styles from '../styles/projects.module.scss';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={`${styles.gradientText} ${styles.mono}`}>
              FEATURED_PROJECTS
            </span>
          </h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Selected projects showcasing system architecture, performance optimization, and clean code principles.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.projectIcon}>
                <i className="fas fa-server"></i>
              </div>
              <h3 className={styles.projectTitle}>System Dashboard</h3>
            </div>
            <div className={styles.projectDetails}>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>React</span>
                <span className={styles.projectTag}>Node.js</span>
                <span className={styles.projectTag}>MongoDB</span>
                <span className={styles.projectTag}>WebSockets</span>
              </div>
              <p className={styles.projectDescription}>
                Real-time monitoring dashboard for distributed systems with custom analytics and alerting.
              </p>
              <div className={styles.projectFooter}>
                <a href="#" className={styles.projectLink}>
                  <i className="fas fa-code-branch"></i> View Code
                </a>
                <span className={styles.projectStats}>PERFORMANCE: 98%</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.projectIcon}>
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className={styles.projectTitle}>API Gateway</h3>
            </div>
            <div className={styles.projectDetails}>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>Node.js</span>
                <span className={styles.projectTag}>Express</span>
                <span className={styles.projectTag}>Redis</span>
                <span className={styles.projectTag}>JWT</span>
              </div>
              <p className={styles.projectDescription}>
                High-performance API gateway with rate limiting, caching, and authentication layers.
              </p>
              <div className={styles.projectFooter}>
                <a href="#" className={styles.projectLink}>
                  <i className="fas fa-code-branch"></i> View Code
                </a>
                <span className={styles.projectStats}>THROUGHPUT: 5K RPS</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.projectIcon}>
                <i className="fas fa-database"></i>
              </div>
              <h3 className={styles.projectTitle}>Data Pipeline</h3>
            </div>
            <div className={styles.projectDetails}>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>Python</span>
                <span className={styles.projectTag}>MongoDB</span>
                <span className={styles.projectTag}>Kafka</span>
                <span className={styles.projectTag}>Airflow</span>
              </div>
              <p className={styles.projectDescription}>
                Scalable ETL pipeline processing 10M+ records daily with custom transformation logic.
              </p>
              <div className={styles.projectFooter}>
                <a href="#" className={styles.projectLink}>
                  <i className="fas fa-code-branch"></i> View Code
                </a>
                <span className={styles.projectStats}>LATENCY: less than 50ms</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projectsFooter}>
          <a href="#" className={styles.viewAllButton}>
            <i className="fas fa-archive"></i> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
