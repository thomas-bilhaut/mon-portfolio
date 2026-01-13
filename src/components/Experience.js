import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => (
  <motion.section 
    className="content-section"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div className="icon-header">
      <Briefcase size={40} />
      <h2>Expériences</h2>
    </div>
    
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="content-card">
          <h3>Support Informatique - Stage</h3>
          <p className="date">2024 | Nemera</p>
          <ul>
            <li>Assistance technique aux utilisateurs (helpdesk)</li>
            <li>Installation et configuration de postes de travail</li>
            <li>Maintenance préventive et curative du parc informatique</li>
            <li>Gestion des incidents et tickets de support</li>
          </ul>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="content-card">
          <h3>Projets personnels</h3>
          <p className="date">En cours</p>
          <ul>
            <li>Configuration de serveurs Linux (Ubuntu Server, Debian)</li>
            <li>Mise en place d'environnements de virtualisation (VirtualBox, VMware)</li>
            <li>Développement d'applications web avec React et Node.js</li>
            <li>Configuration de réseaux </li>
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Experience;