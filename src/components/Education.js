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
  color: rgb(245, 243, 243);
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
    background: #c0727f;
  }
`;

const TimelineItem = styled(motion.div)`
  background: #2f2b56;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 45%;
  position: relative;
  transition: transform 0.3s ease-in-out;
  text-align: left;
  color: white;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(255, 87, 51, 0.3);
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
    background: #c0727f;
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
    color: #9ea7d7;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #ffffffcc;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    color: #6ca49c;
    font-weight: bold;
  }

  svg {
    color: #6ca49c;
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
