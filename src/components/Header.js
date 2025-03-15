import React from 'react';
import { motion } from 'framer-motion';
// Chemin corrigé basé sur l'emplacement exact de votre fichier
const Header = () => {
  // Animations
  const logoVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8
      }
    }
  };

  return (
    <header className="main-header">
      <div className="header-content">
        
        <div className="header-text">
          <motion.div 
            className="logo-container"
            initial="hidden"
            animate="visible"
            variants={logoVariants}
          >
            <h1 className="logo">
              <span className="logo-accent"></span>
              <span className="logo-name">Bilhaut Thomas</span>
              <span className="logo-accent"></span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="tagline"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            Recherche Alternance Développement De Solutions Digitales 
          </motion.p>
        </div>
      </div>
      
      <motion.div 
        className="social-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="https://www.linkedin.com/in/thomas-bilhaut-a4392934a/" target="_blank" rel="noopener noreferrer" className="social-link">
          <i className="fab fa-linkedin"></i>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;