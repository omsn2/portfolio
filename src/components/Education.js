import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';
import { portfolioData } from '../data/portfolioData';

const EducationContainer = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #00ff9f, #00d9ff);
    box-shadow: 0 0 10px rgba(0, 255, 159, 0.5);
  }
`;

const TimelineItem = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 159, 0.2);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  width: 45%;
  position: relative;
  transition: all 0.3s ease;
  text-align: left;
  color: white;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 30px rgba(0, 255, 159, 0.3), 0 0 40px rgba(0, 255, 159, 0.2);
    border-color: #00ff9f;
  }

  &:nth-child(odd) {
    left: 0;
  }

  &:nth-child(even) {
    left: 55%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #00ff9f, #00d9ff);
    border-radius: 50%;
    top: 20px;
    left: -10px;
    z-index: 1;
    box-shadow: 0 0 15px rgba(0, 255, 159, 0.6);
  }

  &:nth-child(even)::after {
    left: -10px;
  }

  h3 {
    font-size: 1.5rem;
    color: #00d9ff;
    margin-bottom: 0.5rem;
    font-family: 'Fira Code', monospace;
  }

  p {
    font-size: 1rem;
    color: #94a3b8;
    line-height: 1.6;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    color: #00ff9f;
    font-weight: bold;
    font-family: 'Fira Code', monospace;
  }

  svg {
    color: #00ff9f;
    font-size: 2rem;
    margin-right: 0.5rem;
    filter: drop-shadow(0 0 10px rgba(0, 255, 159, 0.5));
  }
`;

const Education = () => {
  const { education } = portfolioData;

  return (
    <EducationContainer id="education">
      <SectionTitle>Education</SectionTitle>
      <Timeline>
        {education.map((edu, index) => (
          <TimelineItem key={index} {...fadeInUp}>
            {edu.icon}
            <h3>{edu.institution}</h3>
            <p>{edu.degree} | {edu.year}</p>
            <span>{edu.score}</span>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationContainer>
  );
};

export default Education;
