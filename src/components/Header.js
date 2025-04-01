import React from 'react';
import { motion } from 'framer-motion';
import cvFile from "../assets/CV.pdf";

const Header = () => {
  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Nom et Description */}
        <motion.div 
          className="text-container"
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp}
        >
          <h1 className="title">Bilhaut Thomas</h1>
          <p className="description">Recherche Alternance Développement De Solutions Digitales</p>
        </motion.div>

        {/* Bouton CV */}
        <motion.button
          onClick={handleDownloadCV}
          className="btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Télécharger mon CV
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
