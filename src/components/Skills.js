import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  SiCplusplus, SiPython, SiJavascript, 
  SiReact, SiDjango, SiSpringboot, SiLangchain,
  SiDocker, SiKubernetes, SiGit,
  SiMysql, SiMongodb, SiSqlite
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // ✅ Java Icon from Font Awesome
import { DiVisualstudio } from 'react-icons/di'; // ✅ VSCode Icon from Devicons
import { fadeInUp } from '../animations';

const SkillsContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color:rgb(248, 245, 245);
  margin-bottom: 2rem;
  font-weight: bold;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: radial-gradient(circle at top left,rgb(15, 15, 15),rgb(169, 107, 250));
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

const Skills = () => (
  <SkillsContainer id="skills">
    <SectionTitle>Skills</SectionTitle>
    <SkillsGrid>
      <SkillCard {...fadeInUp}>
        <SiCplusplus />
        <h3>C++</h3>
        <p>Object-oriented programming and DSA</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <FaJava />  {/* ✅ Using FaJava instead of SiJava */}
        <h3>Java</h3>
        <p>Core Java, OOP concepts, Spring Boot</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiPython />
        <h3>Python</h3>
        <p>Data analysis, automation scripts</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiJavascript />
        <h3>JavaScript</h3>
        <p>ES6+, asynchronous programming</p>
      </SkillCard>

      <SkillCard {...fadeInUp}>
        <SiReact />
        <h3>React</h3>
        <p>Component-based UI, hooks, state management</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiDjango />
        <h3>Django</h3>
        <p>Backend development, REST APIs</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiSpringboot />
        <h3>Spring Boot</h3>
        <p>Microservices, REST APIs, Spring Security</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiLangchain />
        <h3>Langchain</h3>
        <p>LLMs, Chatbots, Natural Language Processing</p>
      </SkillCard>

      <SkillCard {...fadeInUp}>
        <SiDocker />
        <h3>Docker</h3>
        <p>Containerization, CI/CD integration</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiKubernetes />
        <h3>Kubernetes</h3>
        <p>Orchestration, scaling, deployments</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <DiVisualstudio /> {/* ✅ Using DiVisualstudio instead of SiVisualstudiocode */}
        <h3>VSCode</h3>
        <p>Efficient coding with extensions</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiGit />
        <h3>Git</h3>
        <p>Version control, branching, GitHub</p>
      </SkillCard>

      <SkillCard {...fadeInUp}>
        <SiMysql />
        <h3>MySQL</h3>
        <p>Relational databases, complex queries</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiMongodb />
        <h3>MongoDB</h3>
        <p>NoSQL databases, document models</p>
      </SkillCard>
      <SkillCard {...fadeInUp}>
        <SiSqlite />
        <h3>SQLite</h3>
        <p>Lightweight databases, local storage</p>
      </SkillCard>
    </SkillsGrid>
  </SkillsContainer>
);

export default Skills;
