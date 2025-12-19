import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';
import { portfolioData } from '../data/portfolioData';

const ProjectsContainer = styled.section`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectItem = styled(motion.div)`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  text-align: left;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  border: 1px solid #e0f2fe;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(37, 99, 235, 0.15);
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
  color: #1e293b;
  margin: 0.5rem 0;
`;

const ProjectDescription = styled.p`
  color: #475569;
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
  background: #eff6ff;
  color: #2563eb;
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
  background: #3b82f6;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  font-weight: bold;

  &:hover {
    background: #2563eb;
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
