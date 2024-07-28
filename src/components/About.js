import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitle>About Us</AboutTitle>
      <AboutContent>
        <AboutText>
          One Life Health Care is dedicated to providing top-notch medical care to individuals and families around the world. Our team of highly trained professionals is committed to ensuring your health and well-being through personalized care and advanced medical technologies.
        </AboutText>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
