import React, { useState, useEffect } from "react";
import styles from "../styles/contact.module.scss";
import { submitForm } from "../utils/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | 'success' | 'fail' | 'sending'
  const [errorMessage, setErrorMessage] = useState("");

  // Auto-clear success/fail message after 3s
  useEffect(() => {
    if (status === "success" || status === "fail") {
      const timer = setTimeout(() => {
        setStatus(null);
        setErrorMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Handle input updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    console.log("Submitting form data:", formData);

    try {
      const data = await submitForm(formData);
      console.log("Response data:", data);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setErrorMessage(err.message);
      setStatus("fail");
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={`${styles.gradientText} ${styles.mono}`}>GET_IN_TOUCH</span>
          </h2>
          <div className={styles.sectionDivider}></div>
          <p className={styles.sectionDescription}>
            Have a project in mind or want to discuss potential opportunities?
          </p>
        </div>

        {/* Contact Form */}
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

          <button type="submit" className={styles.submitButton} disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <p className={styles.successMsg}>✅ Message sent successfully!</p>
        )}
        {status === "fail" && (
          <p className={styles.errorMsg}>
            ❌ Failed to send message. {errorMessage && <span>{errorMessage}</span>}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;