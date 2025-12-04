import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';
import { portfolioData } from '../data/portfolioData';

const SkillsContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: rgb(248, 245, 245);
  margin-bottom: 3rem;
  font-weight: bold;
`;

const CategoryContainer = styled.div`
  margin-bottom: 4rem;
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  color: #c0727f;
  margin-bottom: 2rem;
  text-align: left;
  border-bottom: 2px solid #2f2b56;
  padding-bottom: 0.5rem;
  display: inline-block;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: radial-gradient(circle at top left, rgb(15, 15, 15), rgb(169, 107, 250));
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(255, 87, 51, 0.3);
  }

  svg {
    font-size: 3rem;
    color: #6ca49c;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #9ea7d7;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    color: #ffffffcc;
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
