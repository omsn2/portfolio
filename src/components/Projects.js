import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';

const ProjectsContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color:rgb(248, 247, 247);
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectItem = styled(motion.div)`
  background: radial-gradient(circle at top left,rgb(15, 15, 15),rgb(169, 107, 250));
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(255, 87, 51, 0.3);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
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
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;
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

const Projects = () => (
  <ProjectsContainer id="projects">
    <SectionTitle>Projects / Open-Source</SectionTitle>
    <ProjectGrid>
      <ProjectItem {...fadeInUp} {...hoverEffect}>
        <ProjectImage src="/assets/langchain2.png" alt="Langchain Q&A Tool" />
        <ProjectTitle>Langchain Q&A Tool using LLMs</ProjectTitle>
        <ProjectDescription>
          Advanced text analysis with NLP, NER, sentiment analysis, multilingual support, and text-to-speech.
        </ProjectDescription>
        <ButtonGroup>
          <ProjectButton href="https://github.com/omsn2/Langchain_Q-A_tool_using_PDF_URL" target="_blank">
            GitHub
          </ProjectButton>
          {/* <ProjectButton href="https://langchain-demo.com" target="_blank">
            Live Demo
          </ProjectButton> */}
        </ButtonGroup>
      </ProjectItem>

      <ProjectItem {...fadeInUp} {...hoverEffect}>
        <ProjectImage src="/assets/image3.jpg" alt="Hospital Management System" />
        <ProjectTitle>Hospital Management System</ProjectTitle>
        <ProjectDescription>
          Operations management with patient management, appointment scheduling, and Spring Security integration.
        </ProjectDescription>
        <ButtonGroup>
          <ProjectButton href="https://github.com/omsn2/Hospital_management_using_spring_boot" target="_blank">
            GitHub
          </ProjectButton>
          {/* <ProjectButton href="https://hospital-demo.com" target="_blank">
            Live Demo
          </ProjectButton> */}
        </ButtonGroup>
      </ProjectItem>

      <ProjectItem {...fadeInUp} {...hoverEffect}>
        <ProjectImage src="/assets/iot.webp" alt="IoT-Based Smart Energy Monitoring" />
        <ProjectTitle>IoT-Based Smart Energy Monitoring</ProjectTitle>
        <ProjectDescription>
          Real-time energy monitoring with sensors, interactive dashboard, and 15% energy waste reduction.
        </ProjectDescription>
        <ButtonGroup>
          <ProjectButton href="https://github.com/omsn2/IoT_Energy_Monitoring" target="_blank">
            GitHub
          </ProjectButton>
          {/* <ProjectButton href="https://iot-energy-demo.com" target="_blank">
            Live Demo
          </ProjectButton> */}
        </ButtonGroup>
      </ProjectItem>

      <ProjectItem {...fadeInUp} {...hoverEffect}>
        <ProjectImage src="/assets/image2.jpg" alt="Gym Management System" />
        <ProjectTitle>Gym Management System</ProjectTitle>
        <ProjectDescription>
          Member management, attendance tracking, workout scheduling, and secure payment processing.
        </ProjectDescription>
        <ButtonGroup>
          <ProjectButton href="https://github.com/omsn2/Gym_Management_System" target="_blank">
            GitHub
          </ProjectButton>
          {/* <ProjectButton href="https://gym-management-demo.com" target="_blank">
            Live Demo
          </ProjectButton> */}
        </ButtonGroup>
      </ProjectItem>
    </ProjectGrid>
  </ProjectsContainer>
);

export default Projects;
