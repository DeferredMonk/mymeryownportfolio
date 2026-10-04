import React, { useState } from "react";
import { submitContactMessage } from "../../utils/portfolioApi";
import styles from "./Contact.module.sass";

const Contact = () => {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setError("");
    setSent(false);
    setSending(true);
    try {
      await submitContactMessage({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      });
      form.reset();
      setSent(true);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.content}>
        <p className={styles.sectionLabel}>04 / Contact me</p>
        <h2 className={styles.heading}>Let&apos;s talk</h2>
        <p className={styles.intro}>
          Have a project in mind? Send me a message.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="contact-name">Full name</label>
            <input id="contact-name" name="name" autoComplete="name" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className={`${styles.field} ${styles.messageField}`}>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" required />
          </div>
          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}
          {sent && (
            <p className={styles.success} role="status">
              Your message has been sent. Thank you!
            </p>
          )}
          <button className={styles.submit} type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
