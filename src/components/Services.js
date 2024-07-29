import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <section className="services-wrapper">
      <h2 className="service-title">Our Services</h2>
      <div>
        <div className="service-card">
          <img className="service-icon" src={require('../assets/images/departments-3.jpg')} alt="Consultation" />
          <h3 className="service-name">Consultation</h3>
          <p className="service-description">Expert advice and care for your health.</p>
        </div>
        <div className="service-card">
          <img className="service-icon" src={require('../assets/images/departments-4.jpg')} alt="Emergency Care" />
          <h3 className="service-name">Emergency Care</h3>
          <p className="service-description">24/7 emergency medical services.</p>
        </div>
        <div className="service-card">
          <img className="service-icon" src={require('../assets/images/departments-1.jpg')} alt="Diagnostics" />
          <h3 className="service-name">Diagnostics</h3>
          <p className="service-description">Comprehensive diagnostic services.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
