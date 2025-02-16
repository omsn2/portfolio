// src/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const ThemeContext = createContext();

// Create Provider Component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
    document.body.style.backgroundColor = savedTheme ? '#121212' : '#fff';
    document.body.style.color = savedTheme ? '#fff' : '#333';
  }, []);

  // Save theme to localStorage and update body styles
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.body.style.backgroundColor = newMode ? '#121212' : '#fff';
    document.body.style.color = newMode ? '#fff' : '#333';
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode: toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
