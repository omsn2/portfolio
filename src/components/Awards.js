import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations';
import { portfolioData } from '../data/portfolioData';

const AwardsContainer = styled.section`
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

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AwardCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid rgba(0, 255, 159, 0.2);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  text-align: left;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #00ff9f, #00d9ff, #ff006e);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 30px rgba(0, 255, 159, 0.3), 0 0 40px rgba(0, 255, 159, 0.2);
    border-color: #00ff9f;

    &::before {
      opacity: 1;
    }
  }
`;

const AwardIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 20px rgba(0, 255, 159, 0.6));
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const AwardTitle = styled.h3`
  font-size: 1.6rem;
  color: #00d9ff;
  margin-bottom: 1rem;
  font-family: 'Fira Code', monospace;
  line-height: 1.4;
`;

const AwardDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1rem;
`;

const AwardYear = styled.div`
  display: inline-block;
  background: rgba(0, 255, 159, 0.1);
  color: #00ff9f;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  border: 1px solid rgba(0, 255, 159, 0.3);
  font-family: 'Fira Code', monospace;
  margin-top: 0.5rem;
`;

const Awards = () => {
  const { awards } = portfolioData;

  return (
    <AwardsContainer id="awards">
      <SectionTitle>Honors & Awards</SectionTitle>
      <AwardsGrid>
        {awards.map((award, index) => (
          <AwardCard key={index} {...fadeInUp}>
            <AwardIcon>{award.icon}</AwardIcon>
            <AwardTitle>{award.title}</AwardTitle>
            <AwardDescription>{award.description}</AwardDescription>
            <AwardYear>{award.year}</AwardYear>
          </AwardCard>
        ))}
      </AwardsGrid>
    </AwardsContainer>
  );
};

export default Awards;
