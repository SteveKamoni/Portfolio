// src/components/Contact/Contact.jsx
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text mono">GET_IN_TOUCH</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Have a project in mind or want to discuss potential opportunities?
          </p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Your Message" 
              className="form-input form-textarea" 
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;