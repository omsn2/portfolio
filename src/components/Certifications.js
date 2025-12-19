import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';
import { portfolioData } from '../data/portfolioData';

const CertificationsContainer = styled.section`
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

const CertificationItem = styled(motion.div)`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  margin: 1rem 0;
  text-align: left;
  transition: all 0.3s ease-in-out;
  border: 1px solid #e0f2fe;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(37, 99, 235, 0.15);
  }
`;

const CertificateButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    background: #2563eb;
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
  background: #3b82f6;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #2563eb;
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
