import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: rgb(245, 248, 248);
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;

  li {
    margin: 0 1rem;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 1.8rem;
  }
`;

const MobileNavOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const MobileNavLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  margin: 1.5rem 0;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #e79772;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: white;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <NavbarContainer>
        <Logo as={Link} to="hero" smooth={true} duration={500}>Omkar's Portfolio</Logo>
        <NavLinks>
          <li><Link className="nav-link" to="hero" smooth={true} duration={500}>Home</Link></li>
          <li><Link className="nav-link" to="education" smooth={true} duration={500}>Education</Link></li>
          <li><Link className="nav-link" to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link className="nav-link" to="certifications" smooth={true} duration={500}>Certifications</Link></li>
          <li><Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link></li>
        </NavLinks>
        <MobileMenuIcon onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </MobileMenuIcon>
      </NavbarContainer>

      <AnimatePresence>
        {isOpen && (
          <MobileNavOverlay
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CloseButton onClick={closeMenu}>✕</CloseButton>
            <MobileNavLink to="hero" smooth={true} duration={500} onClick={closeMenu}>Home</MobileNavLink>
            <MobileNavLink to="education" smooth={true} duration={500} onClick={closeMenu}>Education</MobileNavLink>
            <MobileNavLink to="experience" smooth={true} duration={500} onClick={closeMenu}>Experience</MobileNavLink>
            <MobileNavLink to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</MobileNavLink>
            <MobileNavLink to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</MobileNavLink>
            <MobileNavLink to="certifications" smooth={true} duration={500} onClick={closeMenu}>Certifications</MobileNavLink>
            <MobileNavLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</MobileNavLink>
          </MobileNavOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
