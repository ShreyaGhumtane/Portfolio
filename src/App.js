// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Index';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Publications from './components/Publications';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="background-gradient"></div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technical-skills" element={<TechnicalSkills />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
