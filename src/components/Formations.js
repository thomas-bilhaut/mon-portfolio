import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';


const Formations = () => (
  <motion.section 
    className="content-section"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div className="icon-header">
      <GraduationCap size={40} />
      <h2>Formations</h2>
    </div>

    <div className="content-card">
      <h3>BTS cybersécurité, informatique et réseaux, électronique (CIEL)</h3>
      <p className="date">2023 - 2025 | Lycée Marcel Sembat</p>
      <p>Option A Informatique et Réseaux</p>
      <ul>
        <li>Administration des systèmes et réseaux</li>
        <li>Virtualisation (Linux, ubuntu)</li>
        <li>Sécurité informatique et réseaux</li>
        <li>Support et assistance aux utilisateurs</li>
        <li> Gestion des incidents </li>
      </ul>
    </div>


    <div className="content-card">
      <h3>Certifications et formations complémentaires</h3>
      <ul>
        <li>📜 Certifications Free Code Camp : 
            _Algorithmes et structures de données Javascript Hérités
            _Conception Web réeactive héritée </li>
        <li>📜 Cours en ligne - Administration  (Cisco)</li>
        <li>📜 Développement Web - HTML, CSS, JavaScript, React</li>
      </ul>
    </div>
  </motion.section>
);

export default Formations;
