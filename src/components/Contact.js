import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Animation for Floating Icons
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ContactContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #00ff9f;
  margin-bottom: 2rem;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-shadow: 0 0 30px rgba(0, 255, 159, 0.4);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled(motion.a)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(0, 255, 159, 0.2);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  color: white;
  text-decoration: none;
  display: block;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 20px 40px rgba(0, 255, 159, 0.3), 0 0 40px rgba(0, 255, 159, 0.2);
    border-color: #00ff9f;
  }

  svg {
    font-size: 3rem;
    color: #00ff9f;
    margin-bottom: 1rem;
    animation: ${float} 3s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(0, 255, 159, 0.5));
  }

  h3 {
    font-size: 1.5rem;
    color: #00d9ff;
    margin-bottom: 0.5rem;
    font-family: 'Fira Code', monospace;
  }

  p {
    font-size: 1.2rem;
    color: #94a3b8;
  }
`;

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <ContactContainer id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <ContactGrid>
        <ContactCard href={`mailto:${contact.email}`}>
          <FaEnvelope />
          <h3>Email</h3>
          <p>{contact.email}</p>
        </ContactCard>

        <ContactCard href={`tel:${contact.phone}`}>
          <FaPhone />
          <h3>Phone</h3>
          <p>{contact.phone}</p>
        </ContactCard>

        <ContactCard as="div">
          <FaMapMarkerAlt />
          <h3>Location</h3>
          <p>{contact.location}</p>
        </ContactCard>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
