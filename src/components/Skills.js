import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';
import { portfolioData } from '../data/portfolioData';
import SkillsRadarChart from './SkillsRadarChart';

const SkillsContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #00ff9f;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-shadow: 0 0 30px rgba(0, 255, 159, 0.4);
`;

const CategoryContainer = styled.div`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: #00d9ff;
  margin-bottom: 2rem;
  text-align: left;
  border-bottom: 2px solid rgba(0, 255, 159, 0.3);
  padding-bottom: 0.5rem;
  display: inline-block;
  font-family: 'Fira Code', monospace;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 159, 0.2);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 30px rgba(0, 255, 159, 0.3), 0 0 40px rgba(0, 255, 159, 0.2);
    border-color: #00ff9f;
  }

  svg {
    font-size: 3rem;
    color: #00ff9f;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 10px rgba(0, 255, 159, 0.5));
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
    filter: drop-shadow(0 0 20px rgba(0, 255, 159, 0.8));
  }

  h3 {
    font-size: 1.5rem;
    color: #e2e8f0;
    margin: 0.5rem 0;
    font-family: 'Fira Code', monospace;
  }

  p {
    font-size: 0.95rem;
    color: #94a3b8;
    line-height: 1.5;
  }
`;

const Skills = () => {
  const { skills } = portfolioData;
  const categories = [
    { title: "Languages", data: skills.languages },
    { title: "Frameworks & Libraries", data: skills.frameworks },
    { title: "Tools & Platforms", data: skills.tools },
    { title: "Databases", data: skills.databases }
  ];

  return (
    <SkillsContainer id="skills">
      <SectionTitle>Skills & Expertise</SectionTitle>
      
      {/* Radar Chart */}
      <SkillsRadarChart />
      
      {categories.map((category, index) => (
        <CategoryContainer key={index}>
          <CategoryTitle>{category.title}</CategoryTitle>
          <SkillsGrid>
            {category.data.map((skill, idx) => (
              <SkillCard key={idx} {...fadeInUp}>
                {skill.icon}
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </SkillCard>
            ))}
          </SkillsGrid>
        </CategoryContainer>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
