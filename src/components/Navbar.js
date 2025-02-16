import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
 background: radial-gradient(circle at top left, #520df3, #e79772);
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color:rgb(245, 248, 248);
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 1rem;
  }

  /* Adjust Contact Button Margin */
  li:last-child {
    margin-right: 2rem; /* ✅ Move Contact button slightly to the left */
  }

  .nav-link {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background 0.3s;
    cursor: pointer;

    &:hover {
      background: radial-gradient(circle at top left, #520df3, #e79772);
    }
  }
`;


const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Omkar's Portfolio</Logo>
      <NavLinks>
        <li><Link className="nav-link" to="hero" smooth={true} duration={500}>Home</Link></li>
        <li><Link className="nav-link" to="education" smooth={true} duration={500}>Education</Link></li>
        <li><Link className="nav-link" to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link className="nav-link" to="certifications" smooth={true} duration={500}>Certifications</Link></li>
        <li><Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link></li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
