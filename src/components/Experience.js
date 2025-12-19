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
  color: #00ff9f;
  margin-bottom: 2rem;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-shadow: 0 0 30px rgba(0, 255, 159, 0.4);
`;

const ExperienceItem = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 159, 0.2);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  margin: 1rem 0;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 255, 159, 0.3), 0 0 30px rgba(0, 255, 159, 0.2);
    border-color: #00ff9f;
  }

  h3 {
    color: #00d9ff;
    font-family: 'Fira Code', monospace;
    margin-bottom: 0.5rem;
  }

  p {
    color: #94a3b8;
    margin-bottom: 1rem;
  }

  ul {
    color: #e2e8f0;
    line-height: 1.8;
  }

  li {
    margin-bottom: 0.5rem;
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
