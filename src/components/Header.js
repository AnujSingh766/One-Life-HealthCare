import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/photo.jpg'; 

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header-container">
      <Link to="/" className="logo-link">
        <img src={logo} alt="One Life Health Care Logo" className="logo" />
        <span className="logo-text">One Life Health Care</span>
      </Link>
      <div className="hamburger-menu" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
        <Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsNavOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link>
        <Link to="/services" onClick={() => setIsNavOpen(false)}>Services</Link>
        <Link to="/doctors" onClick={() => setIsNavOpen(false)}>Doctors</Link>
        <Link to="/features" onClick={() => setIsNavOpen(false)}>Features</Link>
      </nav>
    </header>
  );
};

export default Header;
