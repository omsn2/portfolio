import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSchool, FaUniversity} from 'react-icons/fa';
import { fadeInUp } from '../animations';

const EducationContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color:rgb(245, 243, 243);
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

const Education = () => (
  <EducationContainer id="education">
    <SectionTitle>Education</SectionTitle>
    <Timeline>
      <TimelineItem {...fadeInUp}>
        <FaSchool />
        <h3>Bapuji International School, Badagandi</h3>
        <p>10th Grade | 2018 - 2019</p>
        <span>Percentage: 88.4%</span>
      </TimelineItem>

      <TimelineItem {...fadeInUp}>
        <FaSchool />
        <h3>Alva's PU College, Karnataka, India</h3>
        <p>Science Pre-University | 2019 - 2021</p>
        <span>Percentage: 95%</span>
      </TimelineItem>

      <TimelineItem {...fadeInUp}>
        <FaUniversity />
        <h3>M S Ramaiah Institute of Technology</h3>
        <p>B.E. in Computer Science | 2021 - 2025</p>
        <span>CGPA: 8.22</span>
      </TimelineItem>
    </Timeline>
  </EducationContainer>
);

export default Education;
