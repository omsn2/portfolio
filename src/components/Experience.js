import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';
import { portfolioData } from '../data/portfolioData';

const ExperienceContainer = styled.section`
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

const ExperienceItem = styled(motion.div)`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  margin: 1rem 0;
  text-align: left;
  transition: all 0.3s ease-in-out;
  border: 1px solid #e0f2fe;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(37, 99, 235, 0.15);
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
