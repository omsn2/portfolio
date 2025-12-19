import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  color: #e2e8f0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 159, 0.1);
  border-bottom: 1px solid rgba(0, 255, 159, 0.2);

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #00ff9f;
  cursor: pointer;
  font-family: 'Fira Code', monospace;
  text-shadow: 0 0 20px rgba(0, 255, 159, 0.5);
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 30px rgba(0, 255, 159, 0.8);
    transform: scale(1.02);
  }

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
    color: #94a3b8;
    font-size: 1rem;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: 'Fira Code', monospace;
    position: relative;

    &:hover {
      color: #00ff9f;
      background: rgba(0, 255, 159, 0.1);
      box-shadow: 0 0 15px rgba(0, 255, 159, 0.3);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: #00ff9f;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 80%;
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
  font-family: 'Fira Code', monospace;
  transition: all 0.3s ease;

  &:hover {
    color: #00ff9f;
    text-shadow: 0 0 20px rgba(0, 255, 159, 0.6);
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
          <li><Link className="nav-link" to="awards" smooth={true} duration={500}>Awards</Link></li>
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
            <MobileNavLink to="awards" smooth={true} duration={500} onClick={closeMenu}>Awards</MobileNavLink>
            <MobileNavLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</MobileNavLink>
          </MobileNavOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
