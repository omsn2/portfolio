import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
  color: rgb(246, 247, 247);
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 20px 40px rgba(255, 87, 51, 0.3);
  }

  svg {
    font-size: 3rem;
    color: #6ca49c;
    margin-bottom: 1rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  h3 {
    font-size: 1.5rem;
    color: #9ea7d7;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #ffffffcc;
  }
`;

/* Contact Form Styling */
const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  text-align: left;
  color: white;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);

  input, textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid #6ca49c;
    color: white;
    font-size: 1.1rem;
    padding: 10px;
    margin-bottom: 2rem;
    outline: none;
    transition: border-color 0.3s;
  }

  input:focus, textarea:focus {
    border-bottom: 2px solid #c0727f;
  }

  label {
    color: #9ea7d7;
    font-size: 1rem;
    pointer-events: none;
    position: absolute;
    left: 10px;
    top: 10px;
    transition: all 0.3s ease;
  }

  input:focus ~ label, input:valid ~ label,
  textarea:focus ~ label, textarea:valid ~ label {
    top: -20px;
    left: 0;
    color: #c0727f;
    font-size: 0.9rem;
  }

  button {
    background: #6ca49c;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #c0727f;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    }
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <SectionTitle>Contact Me</SectionTitle>
    <ContactGrid>
      <ContactCard>
        <FaEnvelope />
        <h3>Email</h3>
        <p>omusnagansur989@gmail.com</p>
      </ContactCard>

      <ContactCard>
        <FaPhone />
        <h3>Phone</h3>
        <p>+91 8623072529</p>
      </ContactCard>

      <ContactCard>
        <FaMapMarkerAlt />
        <h3>Location</h3>
        <p>Bangalore, India</p>
      </ContactCard>
    </ContactGrid>

   
  </ContactContainer>
);

export default Contact;
