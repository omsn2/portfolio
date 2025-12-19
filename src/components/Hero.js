import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTimes, FaDownload } from 'react-icons/fa';
import { fadeInUp } from '../animations';
import { portfolioData } from '../data/portfolioData';
import MatrixBackground from './MatrixBackground';
import CodeEditorHero from './CodeEditorHero';

const HeroContainer = styled.section`
  padding-top: 80px; /* Adjust this to match navbar height */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: transparent;
  color: white;
  padding: 2rem 8%;
  text-align: left;

  @media (max-width: 768px) {
    padding-top: 100px; /* Smaller padding on mobile */
    flex-direction: column;
    text-align: center;
  }
`;


const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 48%;
    max-width: 250px;
    border-radius: 20px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    img {
      width: 48%;
      max-width: 200px;
    }
  }
`;

const LuffyQuote = styled(motion.p)`
  font-size: 1.3rem;
  color: #00d9ff;
  font-style: italic;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  max-width: 90%;
  line-height: 1.5;
  opacity: 0;
  animation: fadeIn 2s forwards;
  text-shadow: 0 0 15px rgba(0, 217, 255, 0.4);

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const RightContent = styled.div`
  flex: 1;
  padding: 2rem;

  @media (max-width: 1024px) {
    padding: 0;
    margin-top: 2rem;
  }
`;

const Quote = styled(motion.h1)`
  font-size: 2.2rem;
  color: #00ff9f;
  font-weight: bold;
  line-height: 1.3;
  text-shadow: 0 0 20px rgba(0, 255, 159, 0.3);

  span {
    color: #00d9ff;
    text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  margin-top: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ResumeButton = styled(motion.a)`
  background: linear-gradient(135deg, #00ff9f, #00d9ff);
  color: #0a0e27;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0, 255, 159, 0.4);
  transition: all 0.3s ease;
  font-family: 'Fira Code', monospace;

  &:hover {
    background: linear-gradient(135deg, #00d9ff, #ff006e);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 159, 0.6), 0 0 30px rgba(0, 255, 159, 0.3);
  }
`;

/* Floating Action Button */
const FabContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
`;

const FabButton = styled(motion.button)`
  background: linear-gradient(135deg, #00ff9f, #00d9ff);
  color: #0a0e27;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 15px rgba(0, 255, 159, 0.4), 0 0 20px rgba(0, 255, 159, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00d9ff, #ff006e);
    box-shadow: 0px 6px 20px rgba(0, 255, 159, 0.6), 0 0 30px rgba(0, 255, 159, 0.4);
    transform: scale(1.05);
  }
`;

const FabMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FabLink = styled(motion.a)`
  background: rgba(15, 23, 42, 0.9);
  color: #00ff9f;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid rgba(0, 255, 159, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 255, 159, 0.1);
    border-color: #00ff9f;
    box-shadow: 0 0 20px rgba(0, 255, 159, 0.5);
    transform: scale(1.1);
  }
`;

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hero } = portfolioData;

  const toggleFab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MatrixBackground />
      <HeroContainer id="hero">
        <LeftContent>
          <img src={`${process.env.PUBLIC_URL}/assets/image.png`} alt="Phone with creative digital design" />
          <LuffyQuote>
            "{hero.subQuote}"
          </LuffyQuote>
        </LeftContent>
        <RightContent>
          <Quote {...fadeInUp} dangerouslySetInnerHTML={{ __html: hero.quote.replace('Creativity', '<span>Creativity</span>').replace('and', '<br />and') }} />
          <Subtitle>
            {hero.description}
          </Subtitle>
          <ButtonGroup>
            <ResumeButton href={hero.resumeUrl} target="_blank" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FaDownload /> Download Resume
            </ResumeButton>
          </ButtonGroup>
        </RightContent>
      </HeroContainer>

      {/* Code Editor Section */}
      <CodeEditorHero />

      <FabContainer>
        <AnimatePresence>
          {isOpen && (
            <FabMenu>
              {hero.socialLinks.map((link, index) => (
                <FabLink
                  key={index}
                  href={link.url}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </FabLink>
              ))}
            </FabMenu>
          )}
        </AnimatePresence>
        <FabButton onClick={toggleFab} aria-label="Toggle Social Menu">
          {isOpen ? <FaTimes /> : <FaPlus />}
        </FabButton>
      </FabContainer>
    </>
  );
};

export default Hero;
