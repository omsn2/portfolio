import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, hoverEffect } from '../animations';

const CertificationsContainer = styled.section`
  padding: 5rem 8%;
  color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color:rgb(249, 250, 250);
  margin-bottom: 2rem;
  font-weight: bold;
`;

const CertificationItem = styled(motion.div)`
  background:rgb(21, 16, 71);
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

const CertificateButton = styled.button`
  background: #6ca49c;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-weight: bold;
  margin-top: 1rem;

  &:hover {
    background: #c0727f;
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
  background: #c0727f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #6ca49c;
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Certifications = () => {
  const [modalImage, setModalImage] = useState('');
  const [showModal, setShowModal] = useState(false);

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
      <CertificationItem {...fadeInUp} {...hoverEffect}>
        <h3>Microsoft Certified Azure AI Fundamentals - KodeKloud</h3>
        <CertificateButton onClick={() => openModal('./public/assets/certificates/Azure_page-0001.jpg')}>
  Show Certificate
</CertificateButton>
      </CertificationItem>
      <CertificationItem {...fadeInUp} {...hoverEffect}>
        <h3>Docker Training Course for the Absolute Beginner - KodeKloud</h3>
        <CertificateButton onClick={() => openModal('./public/assets/certificates/Docker_page-0001.jpg')}>
  Show Certificate
</CertificateButton>
      </CertificationItem>

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
