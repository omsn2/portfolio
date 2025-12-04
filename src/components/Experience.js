import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';
import { portfolioData } from '../data/portfolioData';

const ExperienceContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: rgb(253, 255, 255);
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ExperienceItem = styled(motion.div)`
  background: radial-gradient(circle at top left, rgb(15, 15, 15), rgb(169, 107, 250));
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

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <ExperienceContainer id="experience">
      <SectionTitle>Experience</SectionTitle>
      {experience.map((exp, index) => (
        <ExperienceItem key={index} {...fadeInUp} {...hoverEffect}>
          <h3>{exp.company} | {exp.role}</h3>
          <p>{exp.location} | {exp.duration}</p>
          <ul>
            {exp.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </ExperienceItem>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;
