// src/components/Contact/Contact.jsx
import React, { useState } from 'react';
import styles from "../styles/contact.module.scss"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  React.useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'fail');
      }

    } catch (err) {
      console.error(err);
      setStatus('fail');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={`${styles.gradientText} ${styles.mono}`}>GET_IN_TOUCH</span>
          </h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Have a project in mind or want to discuss potential opportunities?
          </p>
        </div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              className={styles.formInput} 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              className={styles.formInput} 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <textarea 
              name="message"
              placeholder="Your Message" 
              className={`${styles.formInput} ${styles.formTextarea}`} 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        {status === 'success' && (
          <p className={styles.successMsg}>Message sent successfully!</p>
        )}
        {status === 'fail' && <p className={styles.errorMsg}>Failed to send message. Try again.</p>}
      </div>
    </section>
  );
};

export default Contact;