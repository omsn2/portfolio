// src/components/DarkModeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: ${({ $darkMode }) => ($darkMode ? '#fff' : '#333')};
  color: ${({ $darkMode }) => ($darkMode ? '#333' : '#fff')};
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 20px;
  position: fixed;
  top: 20px;
  right: 20px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  }
`;

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <ToggleButton $darkMode={darkMode} onClick={setDarkMode}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </ToggleButton>
  );
};

export default DarkModeToggle;
