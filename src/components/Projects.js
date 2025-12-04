import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';
import { portfolioData } from '../data/portfolioData';

const ProjectsContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: rgb(248, 247, 247);
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectItem = styled(motion.div)`
  background: radial-gradient(circle at top left, rgb(15, 15, 15), rgb(169, 107, 250));
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(255, 87, 51, 0.3);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #9ea7d7;
  margin: 0.5rem 0;
`;

const ProjectDescription = styled.p`
  color: #ffffffcc;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(108, 164, 156, 0.2);
  color: #6ca49c;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectButton = styled.a`
  background: #6ca49c;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  font-weight: bold;

  &:hover {
    background: #c0727f;
  }
`;

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projects / Open-Source</SectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectItem key={index} {...fadeInUp} {...hoverEffect}>
            <ProjectImage 
              src={`${process.env.PUBLIC_URL}${project.image}`} 
              alt={project.title} 
            />
            <ProjectTitle>{project.title}</ProjectTitle>
            <TechStack>
              {project.techStack.map((tech, idx) => (
                <TechTag key={idx}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectDescription>
              {project.description}
            </ProjectDescription>
            <ButtonGroup>
              <ProjectButton href={project.link} target="_blank">
                GitHub
              </ProjectButton>
            </ButtonGroup>
          </ProjectItem>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
