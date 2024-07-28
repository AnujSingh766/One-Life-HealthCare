import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <HeroSection />
      <Services />
      <About />
      <Contact />
    </AppWrapper>
  );
};

export default App;
