import React from 'react';
import '../styles/About.css';
import about from '../assets/images/about.jpg';

const About = () => {
  return (
    <section className="about-wrapper">
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <div className="doctor-card">
          <img className="doctor-image" src={about} alt="About us" />
        </div>
        <div className="about-text">
          <h1>Welcome to One Life Health Care</h1>
          <p>
            At One Life Health Care, we are committed to delivering exceptional medical care to individuals and families. Our state-of-the-art facility is equipped with the latest technology to ensure the highest quality of care.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li><strong>World-Class Medical Faculty:</strong> Our team consists of some of the most renowned doctors and specialists in their respective fields, bringing expertise and compassion to every patient interaction.</li>
            <li><strong>Leading Surgeons:</strong> We are proud to have top surgeons who are pioneers in advanced surgical techniques, ensuring the best outcomes for complex procedures.</li>
            <li><strong>Comprehensive Care:</strong> From routine check-ups to specialized treatments, we offer a full spectrum of medical services tailored to your needs.</li>
            <li><strong>Patient-Centric Approach:</strong> Your health and comfort are our priorities. We provide personalized care plans and support throughout your treatment journey.</li>
            <li><strong>Advanced Facilities:</strong> Our hospital features cutting-edge medical equipment and comfortable facilities designed with patient well-being in mind.</li>
            <li><strong>Global Reach:</strong> We serve patients from around the world, offering expert care and support regardless of your location.</li>
          </ul>
          <p>
            Join us at One Life Health Care and experience a commitment to excellence that sets us apart. Our goal is to provide you with the best possible care in a supportive and innovative environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
