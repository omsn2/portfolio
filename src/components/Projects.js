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
  color: #00ff9f;
  margin-bottom: 2rem;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  text-shadow: 0 0 30px rgba(0, 255, 159, 0.4);
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectItem = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 159, 0.2);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 255, 159, 0.3), 0 0 30px rgba(0, 255, 159, 0.2);
    border-color: #00ff9f;
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
  color: #00d9ff;
  margin: 0.5rem 0;
  font-family: 'Fira Code', monospace;
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(0, 255, 159, 0.1);
  color: #00ff9f;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: bold;
  border: 1px solid rgba(0, 255, 159, 0.3);
  font-family: 'Fira Code', monospace;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectButton = styled.a`
  background: linear-gradient(135deg, #00ff9f, #00d9ff);
  color: #0a0e27;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
  box-shadow: 0 4px 10px rgba(0, 255, 159, 0.3);

  &:hover {
    background: linear-gradient(135deg, #00d9ff, #ff006e);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 255, 159, 0.5), 0 0 20px rgba(0, 255, 159, 0.3);
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
