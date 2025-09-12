// src/components/TechStack/TechStack.jsx
import React from 'react';
// import './techstack.css'; // Assuming you have a CSS file for styling

const TechStack = () => {
  return (
    <section id="tech" className="tech-section">
      <div className="tech-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text mono">TECH_STACK</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Tools and technologies I use to build robust systems
          </p>
        </div>
        
        <div className="tech-grid">
          {/* Frontend */}
          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-header">
                <div className="tech-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3 className="tech-title">Frontend</h3>
              </div>
              <ul className="tech-list">
                <li className="tech-item">React</li>
                <li className="tech-item">TypeScript</li>
                <li className="tech-item">Tailwind CSS</li>
                <li className="tech-item">Next.js</li>
              </ul>
            </div>
          </div>
          
          {/* Backend */}
          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-header">
                <div className="tech-icon">
                  <i className="fas fa-server"></i>
                </div>
                <h3 className="tech-title">Backend</h3>
              </div>
              <ul className="tech-list">
                <li className="tech-item">Node.js</li>
                <li className="tech-item">Express</li>
                <li className="tech-item">NestJS</li>
                <li className="tech-item">GraphQL</li>
              </ul>
            </div>
          </div>
          
          {/* Database */}
          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-header">
                <div className="tech-icon">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="tech-title">Database</h3>
              </div>
              <ul className="tech-list">
                <li className="tech-item">MongoDB</li>
                <li className="tech-item">PostgreSQL</li>
                <li className="tech-item">Redis</li>
                <li className="tech-item">Elasticsearch</li>
              </ul>
            </div>
          </div>
          
          {/* DevOps */}
          <div className="tech-card">
            <div className="tech-card-inner">
              <div className="tech-card-header">
                <div className="tech-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h3 className="tech-title">DevOps</h3>
              </div>
              <ul className="tech-list">
                <li className="tech-item">Docker</li>
                <li className="tech-item">Kubernetes</li>
                <li className="tech-item">AWS</li>
                <li className="tech-item">CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;