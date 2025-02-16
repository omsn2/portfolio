import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';

const ExperienceContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color:rgb(253, 255, 255);
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ExperienceItem = styled(motion.div)`
  background: radial-gradient(circle at top left,rgb(15, 15, 15),rgb(169, 107, 250));
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin: 1rem 0;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(255, 87, 51, 0.3);
  }
`;

const Experience = () => (
  <ExperienceContainer id="experience">
    <SectionTitle>Experience</SectionTitle>
    <ExperienceItem {...fadeInUp} {...hoverEffect}>
      <h3>Sparks Foundation | Machine Learning Intern</h3>
      <p>Bengaluru, India | November - December</p>
      <ul>
        <li>Developed a real-time dashboard for equipment health monitoring.</li>
        <li>Reduced reporting time by ~2 hours/week with predictive insights.</li>
        <li>Enhanced equipment reliability with data-driven maintenance decisions.</li>
      </ul>
    </ExperienceItem>
  </ExperienceContainer>
);

export default Experience;
