import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Network, Briefcase, GraduationCap, Mail, User, Wrench, Menu, X } from 'lucide-react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Formations from './components/Formations';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showTitle, setShowTitle] = useState('');
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleNavClick = (section, title) => {
    setShowTitle(title);
    setMobileMenuOpen(false);
    setTimeout(() => {
      setShowTitle('');
      setActiveSection(section);
    }, 1200);
    window.scrollTo(0, 0);
  };

  const sections = {
    about: <About />,
    experience: <Experience />,
    formations: <Formations />,
    skills: <Skills />,
    projects: <Projects />,
    contact: <Contact />
  };

  return (
    <div className={`App ${theme}`}>
      <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <motion.button
        className="theme-toggle"
        onClick={toggleTheme}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </motion.button>

      <Header />

      <nav className={mobileMenuOpen ? 'mobile-open' : ''}>
        <ul>
          <motion.li whileHover={{ scale: 1.05 }}>
            <button 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleNavClick('about', 'À propos')}
            >
              À propos
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <button 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={() => handleNavClick('experience', 'Expériences')}
            >
              Expériences
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <button 
              className={activeSection === 'formations' ? 'active' : ''}
              onClick={() => handleNavClick('formations', 'Formations')}
            >
              Formations
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <button 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={() => handleNavClick('skills', 'Compétences')}
            >
              Compétences
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <button 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => handleNavClick('projects', 'Projets')}
            >
              Projets
            </button>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <button 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick('contact', 'Contact')}
            >
              Contact
            </button>
          </motion.li>
        </ul>
      </nav>

      <div className="content-box-container">
        <AnimatePresence>
          {showTitle && (
            <motion.div
              className="content-box"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <h2>{showTitle}</h2>
              <motion.div 
                className="title-bar"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="section-container">
        <AnimatePresence mode="wait">
          {!showTitle && sections[activeSection]}
        </AnimatePresence>
      </div>

      <footer>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p>&copy; {new Date().getFullYear()} - Portfolio IT Professionnel</p>
          <div className="social-links">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default App;