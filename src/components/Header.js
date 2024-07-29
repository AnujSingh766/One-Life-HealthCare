import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/photo.jpg'; // Adjust the path as needed

const Header = () => (
  <header className="header-container">
    <Link to="/" className="logo-link">
      <img src={logo} alt="One Life Health Care Logo" className="logo" />
      <span className="logo-text">One Life Health Care</span>
    </Link>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/features">Features</Link>
    </nav>
  </header>
);

export default Header;
