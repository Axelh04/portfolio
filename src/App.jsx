// src/App.jsx
import React from 'react';
import { DarkModeProvider } from './Darkmode/DarkModeContext';
import DarkModeToggle from './Darkmode/DarkModeToggle';
import HomePage from './components/HomePage';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Navbarstatic from './components/Navbarstatic';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
  <>
      <div className="app">
        <Navbarstatic />
        <HomePage/>
        <Navbar style={{ zIndex: 1000000 }}/>

        <AboutMe/>
        <Experience/>
        <Projects />
        <Contact />
      </div>
      </>
  );
};

export default App;
