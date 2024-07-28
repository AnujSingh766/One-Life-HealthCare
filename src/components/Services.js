import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  text-align: center;
`;

const ServiceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ServiceIcon = styled.img`
  width: 50px;
  margin-bottom: 1rem;
`;

const ServiceName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
`;

const Services = () => {
  return (
    <ServicesWrapper>
      <ServiceTitle>Our Services</ServiceTitle>
      <div>
        <ServiceCard>
          <ServiceIcon src="/assets/images/service1.png" alt="Service 1" />
          <ServiceName>Consultation</ServiceName>
          <ServiceDescription>Expert advice and care for your health.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src="/assets/images/service2.png" alt="Service 2" />
          <ServiceName>Emergency Care</ServiceName>
          <ServiceDescription>24/7 emergency medical services.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={require('../assets/images/Logo.png')} alt="Service 3" />
          <ServiceName>Diagnostics</ServiceName>
          <ServiceDescription>Comprehensive diagnostic services.</ServiceDescription>
        </ServiceCard>
      </div>
    </ServicesWrapper>
  );
};

export default Services;
