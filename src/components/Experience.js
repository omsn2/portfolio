import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';

const ExperienceContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color:rgb(253, 255, 255);
  margin-bottom: 2rem;
  font-weight: bold;
`;

const ExperienceItem = styled(motion.div)`
  background: radial-gradient(circle at top left,rgb(15, 15, 15),rgb(169, 107, 250));
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin: 1rem 0;
  text-align: left;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(255, 87, 51, 0.3);
  }
`;

const Experience = () => (
  <ExperienceContainer id="experience">
    <SectionTitle>Experience</SectionTitle>
    <ExperienceItem {...fadeInUp} {...hoverEffect}>
      <h3>Digital Blanket | Software Engineer I</h3>
      <p>Bengaluru, India | April 2025 - Present</p>
     <ul>
  <li>Built containerized real-time CDC pipeline using Debezium and Kafka deployed on Docker, processing 100K+ events/hour with Kafka Streams for event routing, supporting 500+ concurrent users with 99.5% uptime</li>
  <li>Orchestrated multi-database CDC infrastructure deploying Debezium connectors for MySQL, PostgreSQL, and MongoDB in Docker containers with 99.9% reliability, reducing data latency from 24 hours to 5 seconds</li>
  <li>Implemented containerized microservices architecture using Docker Compose for Kafka cluster, Debezium Connect, and Zookeeper, enabling rapid deployment, horizontal scaling, and environment consistency</li>
  <li>Delivered enterprise reporting solution replacing legacy systems with Apache Superset self-service BI platform, configured for high-concurrency supporting 50+ users with advanced visualizations</li>
  <li>Architected configuration-driven API gateway using Node.js/Express.js with adapter pattern, enabling dynamic backend service integration via JSON configs, reducing integration time by 80%</li>
  <li>Developed multi-step orchestration engine in Node.js with sequential API workflows, in-memory caching, and dynamic payload construction, improving pipeline efficiency by 65%</li>
  <li>Established monitoring infrastructure with Kafka Connect metrics, health checks, and Superset alerts, reducing MTTR by 70%</li>
</ul>
<<<<<<< HEAD

=======
>>>>>>> ab48b95 (Updated experience and certifications components, removed unused assets)
    </ExperienceItem>
  </ExperienceContainer>
);

export default Experience;
