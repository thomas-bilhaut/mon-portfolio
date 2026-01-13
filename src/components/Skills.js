import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Server, Network, Code } from 'lucide-react';

const Skills = () => (
  <motion.section 
    className="content-section"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div className="icon-header">
      <Wrench size={40} />
      <h2>Compétences</h2>
    </div>

    <div className="skills-grid">
      
      {/* Développement */}
      <div className="content-card">
        <div className="skill-category">
          <Code size={30} />
          <h3>Développement</h3>
        </div>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>HTML / CSS</li>
          <li>PHP</li>
          <li>C++</li>
        </ul>
      </div>

      {/* Bases de données & outils */}
      <div className="content-card">
        <div className="skill-category">
          <Server size={30} />
          <h3>Bases de données & Outils</h3>
        </div>
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>

      {/* Spécialités */}
      <div className="content-card">
        <div className="skill-category">
          <Network size={30} />
          <h3>Spécialités</h3>
        </div>
        <ul>
          <li>Développement Web</li>
          <li>Applications Web</li>
          <li>Gestion de bases de données</li>
          <li>Architecture backend</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="content-card">
        <div className="skill-category">
          <Wrench size={30} />
          <h3>Compétences personnelles</h3>
        </div>
        <ul>
          <li>Travail d'équipe</li>
          <li>Communication</li>
          <li>Résolution de problèmes</li>
          <li>Adaptabilité</li>
          <li>Gestion du temps</li>
          <li>Autonomie & organisation</li>
        </ul>
      </div>

    </div>
  </motion.section>
);

export default Skills;
