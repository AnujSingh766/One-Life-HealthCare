import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-section">
      <h3>About Us</h3>
      <p>One Life Health Care is dedicated to providing top-notch medical care with personalized services.</p>
    </div>
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>Email: contact@onelifehealthcare.com</p>
      <p>Help Line: +91-123-456-7890</p>
      <p>24/7 Service Available</p>
    </div>
    <div className="footer-section">
      <h3>Our Services</h3>
      <ul>
        <li>Consultation</li>
        <li>Emergency Care</li>
        <li>Diagnostics</li>
        <li>Specialized Treatments</li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Best Doctors</h3>
      <ul>
        <li>Dr. John Doe - Cardiologist</li>
        <li>Dr. Jane Smith - Neurologist</li>
        <li>Dr. Emily Johnson - Pediatrician</li>
        <li>Dr. James Brown - Orthopedic Surgeon</li>
        <li>Dr. Sophia Wilson - Dermatologist</li>
      </ul>
    </div>
    <div className="footer-bottom">
      <p>© 2024 One Life Health Care. All rights reserved.</p>
      <p className="footer-credit">Made by Anuj Singh</p>
    </div>
  </footer>
);

export default Footer;
