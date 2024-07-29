import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to One Life Health Care</h1>
        <p className="hero-subtitle">Your health, our priority.</p>
        <p className="hero-description">
          At One Life Health Care, we are dedicated to providing top-notch medical care
          with compassion and expertise. Our team of experienced professionals is here
          to ensure you receive the best treatment tailored to your needs. Whether it's
          routine check-ups or specialized care, we are committed to improving your
          well-being and making your visit comfortable and efficient.
        </p>
        <button className="hero-button" onClick={handleClick}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
