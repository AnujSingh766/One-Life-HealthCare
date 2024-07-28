import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/assets/images/hero-bg.jpg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
  padding: 1rem 2rem;
  background-color: #008cba;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  &:hover {
    background-color: #005f8c;
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Welcome to One Life Health Care</HeroTitle>
        <HeroSubtitle>Your health, our priority</HeroSubtitle>
        <HeroButton>Get Started</HeroButton>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection;
