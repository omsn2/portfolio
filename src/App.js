import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Contact from './components/Contact';
import ConsoleEasterEgg from './components/ConsoleEasterEgg';

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <Router>
        <ConsoleEasterEgg />
        <Navbar />
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Awards />
        <Contact />
      </Router>
    </ThemeProvider>
  );
};

export default App;
