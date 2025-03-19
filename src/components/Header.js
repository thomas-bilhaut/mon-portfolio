import React from 'react';
import { motion } from 'framer-motion';
import cvFile from "../assets/CV.pdf";

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

  
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <motion.h1 
            className="text-3xl font-bold"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            Bilhaut Thomas
          </motion.h1>
          <motion.p 
            className="text-xl mt-2"
            variants={taglineVariants}
            initial="hidden"
            animate="visible"
          >
            Recherche Alternance Développement De Solutions Digitales
          </motion.p>
        </div>
        
        <div className="flex items-center">
          <motion.button
            onClick={handleDownloadCV}
            className="bg-white text-blue-800 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Télécharger mon CV
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;