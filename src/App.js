import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Formations from './components/Formations';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

// Composant pour la particule de décoration
const BackgroundParticle = ({ top, left, size, delay }) => (
  <motion.div
    className="background-particle"
    style={{
      position: 'absolute',
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      backgroundColor: 'var(--primary-color)',
      opacity: 0.1,
      zIndex: -1,
    }}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1, delay: delay }}
  />
);

function AnimatedRoutes({ showContent }) {
  const location = useLocation();
  
  // Variantes pour les animations de page
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {showContent && (
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="page-wrapper"
        >
          <div className="page-effect"></div>
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
  const [theme, setTheme] = useState('light');
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effet de défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mise à jour dynamique du thème
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Gestion du thème
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleClick = (sectionName) => {
    setShowTitle(sectionName);
    setShowContent(false);
    setTimeout(() => {
      setShowTitle('');
      setShowContent(true);
    }, 1200);
    // Remonter en haut de la page
    window.scrollTo(0, 0);
  };

  // Particules de fond
  const particles = [
    { top: 15, left: 85, size: 100, delay: 0.2 },
    { top: 70, left: 10, size: 150, delay: 0.2 },
    { top: 70, left: 10, size: 150, delay: 0.5 },
    { top: 40, left: 60, size: 80, delay: 0.8 },
    { top: 80, left: 80, size: 120, delay: 1.0 },
  ];

  return (
    <Router>
      <motion.div
        className={`App ${theme}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Particules de fond décoratives */}
        {particles.map((particle, index) => (
          <BackgroundParticle
            key={index}
            top={particle.top}
            left={particle.left}
            size={particle.size}
            delay={particle.delay}
          />
        ))}

        <Header />

        {/* Thème switcher */}
        <motion.button
          className="theme-toggle"
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </motion.button>

        <nav style={{ 
          transform: `translateY(${scrollPosition > 100 ? '0' : '0'}px)`,
          opacity: scrollPosition > 100 ? 0.9 : 1
        }}>
          <ul>
            <motion.li whileHover={{ scale: 1.05 }}>
              <NavLink to="/" onClick={() => handleClick("À propos de")} end>
                À propos de
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <NavLink to="/experience" onClick={() => handleClick("Expériences")}>
                Expériences
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <NavLink to="/formations" onClick={() => handleClick("Formations")}>
                Formations
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <NavLink to="/skills" onClick={() => handleClick("Compétences")}>
                Compétences
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <NavLink to="/projects" onClick={() => handleClick("Projets")}>
                Projets
              </NavLink>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <NavLink to="/contact" onClick={() => handleClick("Contact")}>
                Contact
              </NavLink>
            </motion.li>
          </ul>
        </nav>

        {/* Box animée affichant temporairement le titre */}
        <div className="content-box-container">
          <AnimatePresence>
            {showTitle && (
              <motion.div
                className="content-box"
                key="title"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100 
                }}
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

        {/* Contenu avec animation lors du changement de section */}
        <div className="section-container">
          <AnimatedRoutes showContent={showContent} />
        </div>

        <footer>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <p>&copy; {new Date().getFullYear()} - Portfolio</p>
            <div className="social-links">
              <motion.a href="#" whileHover={{ y: -3 }}>LinkedIn</motion.a>
              <motion.a href="#" whileHover={{ y: -3 }}>GitHub</motion.a>
            </div>
          </motion.div>
        </footer>
      </motion.div>
    </Router>
  );
}

export default App;