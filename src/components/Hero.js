import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/images/hero-bg.jpg'; 

const Hero = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1 className="hero-title">Welcome to One Life Health Care</h1>
      <p className="hero-subtitle">Your health, our priority.</p>
      <button className="hero-button">Get Started</button>
    </div>
  </section>
);

export default Hero;
