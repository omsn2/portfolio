import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';
import { portfolioData } from '../data/portfolioData';

const EducationContainer = styled.section`
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
    background: #bfdbfe;
  }
`;

const TimelineItem = styled(motion.div)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  width: 45%;
  position: relative;
  transition: all 0.3s ease-in-out;
  text-align: left;
  color: #1e293b;
  border: 1px solid #e0f2fe;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 25px rgba(37, 99, 235, 0.15);
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
    background: #2563eb;
    border-radius: 50%;
    top: 20px;
    left: -10px;
    z-index: 1;
  }

  &:nth-child(even)::after {
    left: -10px;
  }

  h3 {
    font-size: 1.5rem;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #475569;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    color: #2563eb;
    font-weight: bold;
  }

  svg {
    color: #2563eb;
    font-size: 2rem;
    margin-right: 0.5rem;
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
