import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaPlus, FaTimes } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { fadeInUp } from '../animations';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: transparent;
  color: white;
  padding: 2rem 8%;
  text-align: left;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    max-width: 250px;
    border-radius: 20px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    img {
      width: 80%;
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

  const toggleFab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeroContainer id="hero">
        <LeftContent>
          <img src={`${process.env.PUBLIC_URL}/assets/image.png`} alt="Image 1" />
          <LuffyQuote>
            "As Long As I Live, There Are Infinite Chances!" - Monkey D. Luffy
          </LuffyQuote>
        </LeftContent>
        <RightContent>
          <Quote {...fadeInUp}>
            "Where Ideas Come to Life<br />and <span>Creativity</span> Knows No Bounds"
          </Quote>
          <Subtitle>
            At my working space, I don’t just create; I innovate. Step into a world where imagination meets technology, and ideas flourish into extraordinary digital experiences.
          </Subtitle>
        </RightContent>
      </HeroContainer>

      <FabContainer>
        <AnimatePresence>
          {isOpen && (
            <FabMenu>
              <FabLink
                href="https://www.linkedin.com/in/omkar-nagansur-51272b230/"
                target="_blank"
              >
                <FaLinkedin />
              </FabLink>
              <FabLink
                href="https://leetcode.com/u/omsn529/"
                target="_blank"
              >
                <SiLeetcode />
              </FabLink>
              <FabLink
                href="https://github.com/omsn2"
                target="_blank"
              >
                <FaGithub />
              </FabLink>
            </FabMenu>
          )}
        </AnimatePresence>
        <FabButton onClick={toggleFab}>
          {isOpen ? <FaTimes /> : <FaPlus />}
        </FabButton>
      </FabContainer>
    </>
  );
};

export default Hero;
