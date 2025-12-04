import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTimes, FaDownload } from 'react-icons/fa';
import { fadeInUp } from '../animations';
import { portfolioData } from '../data/portfolioData';

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
  color: rgb(225, 226, 231);
  font-style: italic;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  max-width: 90%;
  line-height: 1.5;
  opacity: 0;
  animation: fadeIn 2s forwards;

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
  color: #c0727f;
  font-weight: bold;
  line-height: 1.3;

  span {
    color: rgb(228, 230, 240);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: rgb(225, 227, 240);
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
  background: #c0727f;
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(192, 114, 127, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background: #a85d6b;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(192, 114, 127, 0.6);
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
  background: #c0727f;
  color: white;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  transition: background 0.3s;

  &:hover {
    background: #6ca49c;
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
  background: #2f2b56;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  font-size: 1.2rem;
  transition: background 0.3s;
  cursor: pointer;

  &:hover {
    background: #6ca49c;
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
