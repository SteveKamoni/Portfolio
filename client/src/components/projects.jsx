// src/components/Projects/Projects.jsx
import React from 'react';
// import './projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text mono">FEATURED_PROJECTS</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Selected projects showcasing system architecture, performance optimization, and clean code principles.
          </p>
        </div>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image">
              <div className="project-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3 className="project-title">System Dashboard</h3>
            </div>
            <div className="project-details">
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">WebSockets</span>
              </div>
              <p className="project-description">
                Real-time monitoring dashboard for distributed systems with custom analytics and alerting.
              </p>
              <div className="project-footer">
                <a href="#" className="project-link">
                  <i className="fas fa-code-branch"></i> View Code
                </a>
                <span className="project-stats">PERFORMANCE: 98%</span>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image">
              <div className="project-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="project-title">API Gateway</h3>
            </div>
            <div className="project-details">
              <div className="project-tags">
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Express</span>
                <span className="project-tag">Redis</span>
                <span className="project-tag">JWT</span>
              </div>
              <p className="project-description">
                High-performance API gateway with rate limiting, caching, and authentication layers.
              </p>
              <div className="project-footer">
                <a href="#" className="project-link">
                  <i className="fas fa-code-branch"></i> View Code
                </a>
                <span className="project-stats">THROUGHPUT: 5K RPS</span>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image">
              <div className="project-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="project-title">Data Pipeline</h3>
            </div>
            <div className="project-details">
              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Kafka</span>
                <span className="project-tag">Airflow</span>
              </div>
              <p className="project-description">
                Scalable ETL pipeline processing 10M+ records daily with custom transformation logic.
              </p>
              <div className="project-footer">
                <a href="#" className="project-link">
                  <i className="fas fa-code-branch"></i> View Code
                </a>
                <span className="project-stats">LATENCY: less than 50ms</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projects-footer">
          <a href="#" className="view-all-button">
            <i className="fas fa-archive"></i> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;