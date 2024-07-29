import React from 'react';
import '../styles/Features.css';

const Features = () => (
  <section className="features-section">
    <h2>Our Features</h2>
    <div className="feature-card">
      <h3 className="feature-title">24/7 Emergency Services</h3>
      <p className="feature-description">We are always here for you, no matter the time.</p>
    </div>
    <div className="feature-card">
      <h3 className="feature-title">Advanced Medical Equipment</h3>
      <p className="feature-description">Our facilities are equipped with the latest technology.</p>
    </div>
  </section>
);

export default Features;
