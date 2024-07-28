import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f4f4f9;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin: 0 1rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo src={require('../assets/images/photo.jpg')} alt="One Life Health Care" />
      <h1>One Life Health Care</h1>
      <NavLinks>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
