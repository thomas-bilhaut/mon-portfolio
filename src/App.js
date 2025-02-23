import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Formations from './components/Formations';
import Skills from './components/Skills';  
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function AnimatedRoutes({ showContent }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [showTitle, setShowTitle] = useState('');
  const [showContent, setShowContent] = useState(true);

  const handleClick = (sectionName) => {
    setShowTitle(sectionName);
    setShowContent(false);
    setTimeout(() => {
      setShowTitle('');
      setShowContent(true);
    }, 1200);
  };

  return (
    <Router>
      <motion.div
        className="App"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <nav>
          <ul>
            <li>
              <NavLink to="/" onClick={() => handleClick("À propos de")} end>
                À propos de
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" onClick={() => handleClick("Expériences")}>
                Expériences
              </NavLink>
            </li>
            <li>
              <NavLink to="/formations" onClick={() => handleClick("Formations")}>
                Formations
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" onClick={() => handleClick("Compétences")}>
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => handleClick("Projets")}>
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => handleClick("Contact")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Box animée affichant temporairement le titre */}
        <div className="content-box-container">
          <AnimatePresence>
            {showTitle && (
              <motion.div 
                className="content-box"
                key="title"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <h2>{showTitle}</h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contenu avec animation lors du changement de section */}
        <div className="section-container">
          <AnimatedRoutes showContent={showContent} />
        </div>
      </motion.div>
    </Router>
  );
}

export default App;
