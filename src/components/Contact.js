import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <div className="form-field">
          <label className="label">Name</label>
          <input className="input" type="text" placeholder="Your Name" />
        </div>
        <div className="form-field">
          <label className="label">Email</label>
          <input className="input" type="email" placeholder="Your Email" />
        </div>
        <div className="form-field">
          <label className="label">Message</label>
          <textarea className="textarea" rows="5" placeholder="Your Message"></textarea>
        </div>
        <button className="submit-button" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
