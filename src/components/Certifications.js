import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';
import { portfolioData } from '../data/portfolioData';

const CertificationsContainer = styled.section`
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

const CertificationItem = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 255, 159, 0.2);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  margin: 1rem 0;
  text-align: left;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 255, 159, 0.3), 0 0 30px rgba(0, 255, 159, 0.2);
    border-color: #00ff9f;
  }

  h3 {
    color: #00d9ff;
    font-family: 'Fira Code', monospace;
    margin-bottom: 0.5rem;
  }
`;

const CertificateButton = styled.button`
  background: linear-gradient(135deg, #00ff9f, #00d9ff);
  color: #0a0e27;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
  margin-top: 1rem;
  box-shadow: 0 4px 10px rgba(0, 255, 159, 0.3);

  &:hover {
    background: linear-gradient(135deg, #00d9ff, #ff006e);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 255, 159, 0.5), 0 0 20px rgba(0, 255, 159, 0.3);
  }
`;

const ModalBackground = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  max-width: 90vw;
  max-height: 80vh;
  overflow: auto;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(135deg, #ff006e, #00d9ff);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Fira Code', monospace;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00ff9f, #00d9ff);
    transform: scale(1.05);
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Certifications = () => {
  const [modalImage, setModalImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { certifications } = portfolioData;

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <CertificationsContainer id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      {certifications.map((cert, index) => (
        <CertificationItem key={index} {...fadeInUp} {...hoverEffect}>
          <h3>{cert.title}</h3>
          <CertificateButton onClick={() => openModal(`${process.env.PUBLIC_URL}${cert.image}`)}>
            Show Certificate
          </CertificateButton>
        </CertificationItem>
      ))}

      <AnimatePresence>
        {showModal && (
          <ModalBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <CloseButton onClick={closeModal}>Close</CloseButton>
              <CertificateImage src={modalImage} alt="Certificate" />
            </ModalContent>
          </ModalBackground>
        )}
      </AnimatePresence>
    </CertificationsContainer>
  );
};

export default Certifications;
