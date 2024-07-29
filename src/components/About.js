import React from 'react';
import '../styles/About.css';
import about from '../assets/images/about.jpg';

const About = () => {
  return (
    <section className="about-wrapper">
      <h2 className="about-title">About Us</h2>
      <div className="doctor-card">
      <img className="doctor-image" src={about} alt="About us" />
    </div>
      <div className="about-content">
        <h1 className="about-text">
          One Life Health Care is dedicated to providing top-notch medical care to individuals and families around the world. Our team of highly trained professionals is committed to ensuring your health and well-being through personalized care and advanced medical technologies.
        </h1>
      </div>
    </section>
  );
};

export default About;
