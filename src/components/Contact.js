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
  color: #1e293b;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #1e293b;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled(motion.a)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #1e293b;
  border: 1px solid #e0f2fe;
  text-decoration: none;
  display: block;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 25px rgba(37, 99, 235, 0.15);
  }

  svg {
    font-size: 3rem;
    color: #2563eb;
    margin-bottom: 1rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  h3 {
    font-size: 1.5rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #64748b;
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
