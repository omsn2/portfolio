import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';
import { portfolioData } from '../data/portfolioData';

const SkillsContainer = styled.section`
  padding: 5rem 8%;
  color: #1e293b;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #1e293b;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const CategoryContainer = styled.div`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: #2563eb;
  margin-bottom: 2rem;
  text-align: left;
  border-bottom: 2px solid #bfdbfe;
  padding-bottom: 0.5rem;
  display: inline-block;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border: 1px solid #e0f2fe;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 25px rgba(37, 99, 235, 0.15);
  }

  svg {
    font-size: 3rem;
    color: #2563eb;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #1e293b;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    color: #64748b;
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
      <SectionTitle>Skills</SectionTitle>

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
