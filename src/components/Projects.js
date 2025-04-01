import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Données des projets
  const projects = [
    {
      id: 1,
      title: "Projet chez Nemera",
      description: "Conversion d'un document Word en site web",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      id: 2,
      title: "Chrono trail",
      description: "Une interface web pour la gestion des cours et le suivi en temps réel, utilisant des capteurs pour automatiser le chrono et afficher le classement en temps réel.",
      technologies: ["HTML", "CSS", "node.js", "Javascript", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Interface web pour sélectionner une station de radio",
      description: "Création d'une interface web permettant de choisir la station de radio voulue.",
      technologies: ["HTML", "CSS", "Javascript", "Phpmyadmin"],
    },
    {
      id: 4,
      title: "Portfolio créatif",
      description: "Mon portfolio en ligne, réalisé en React.",
      technologies: ["HTML/CSS", "JavaScript", "React"],
    },
    {
      id: 5,
      title: "Application de gestion de tâches",
      description: "Une application de gestion de tâches créée avec javascript.",
      technologies: ["javascript", "HTML/CSS"],
    },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="projects-section">
      <h2>Mes Projets</h2>
      <p className="section-intro">
        Découvrez une sélection de mes projets récents. Chaque projet est une occasion
        d'explorer de nouvelles technologies et de résoudre des problèmes complexes.
      </p>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={projectVariants}
          >
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;