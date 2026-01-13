import React from 'react';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <motion.h1
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, type: "spring" }}
    >
      Portfolio IT
    </motion.h1>
    <motion.p
      className="subtitle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      Technicien Informatique | Admin Système & Réseau | Développeur Web
    </motion.p>
  </motion.header>
);

export default Header;