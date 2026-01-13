import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Projects = () => (
  <motion.section 
    className="content-section"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div className="icon-header">
      <Code size={40} />
      <h2>Projets réalisés</h2>
    </div>

    <div className="projects-grid">

      <div className="content-card project-card">
        <h3>🏢 Projet chez Nemera</h3>
        <p className="tech-stack">Technologies : HTML, CSS, JavaScript</p>
        <p>
          Conversion d’un document Word en site web structuré et responsive,
          respectant la charte graphique et les besoins métier.
        </p>
      </div>

      <div className="content-card project-card">
        <h3>🏃 ChronoTrail</h3>
        <p className="tech-stack">
          Technologies : HTML, CSS, JavaScript, Node.js, PostgreSQL
        </p>
        <p>
          Application web de gestion de courses de trail avec suivi en temps réel,
          automatisation du chronométrage via capteurs RFID et affichage du classement.
        </p>
      </div>

      <div className="content-card project-card">
        <h3>📻 Sélecteur de station radio</h3>
        <p className="tech-stack">
          Technologies : HTML, CSS, JavaScript, PHPMyAdmin
        </p>
        <p>
          Développement d’une interface web permettant à l’utilisateur de sélectionner
          facilement une station de radio via une interface simple et intuitive.
        </p>
      </div>

      <div className="content-card project-card">
        <h3>🎨 Portfolio créatif</h3>
        <p className="tech-stack">
          Technologies : React, JavaScript, HTML / CSS
        </p>
        <p>
          Conception et développement de mon portfolio personnel en React,
          mettant en avant mes compétences, projets et animations modernes.
        </p>
      </div>

      <div className="content-card project-card">
        <h3>✅ Application de gestion de tâches</h3>
        <p className="tech-stack">
          Technologies : JavaScript, HTML / CSS
        </p>
        <p>
          Application permettant de créer, modifier et supprimer des tâches,
          avec une gestion dynamique des états et une interface claire.
        </p>
      </div>

    </div>
  </motion.section>
);

export default Projects;
