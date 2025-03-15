import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Données des compétences mises à jour selon votre liste
  const skills = {
    development: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'Node.js', level: 82 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'PHP', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'MySQL', level: 80 },
      { name: 'Git', level: 85 },
    ],
    softSkills: [
      { name: 'Travail d\'équipe', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Résolution de problèmes', level: 92 },
      { name: 'Adaptabilité', level: 88 },
      { name: 'Gestion du temps', level: 85 },
    ]
  };

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Composant pour représenter une compétence avec une barre de progression
  const SkillBar = ({ name, level }) => (
    <motion.div 
      className="skill-bar"
      variants={itemVariants}
    >
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>
      <div className="skill-progress">
        <motion.div 
          className="skill-progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className="skills-section">
      <h2>Mes Compétences</h2>
      <p className="section-intro">
        Voici les technologies et outils que j'utilise pour développer des applications et sites web,
        ainsi que mes compétences personnelles.
      </p>

      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="skills-category" variants={itemVariants}>
          <h3>Développement</h3>
          <div className="skills-group">
            {skills.development.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </motion.div>

        <motion.div className="skills-category" variants={itemVariants}>
          <h3>Soft Skills</h3>
          <div className="skills-group">
            {skills.softSkills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="technical-skills"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h3>Mes spécialités</h3>
        <div className="tags-container">
          {[
            'React', 'JavaScript', 'Node.js', 'HTML/CSS', 
            'Git', 'MySQL', 'PHP', 'C++', 
            'Développement Web', 'Applications Web', 'Bases de données'
          ].map((tag, index) => (
            <motion.span 
              key={index} 
              className="tech-tag"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="soft-skills-tags"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h3>Compétences personnelles</h3>
        <div className="tags-container">
          {[
            'Travail d\'équipe', 'Communication', 'Résolution de problèmes',
            'Adaptabilité', 'Gestion du temps', 'Créativité',
            'Esprit critique', 'Autonomie', 'Organisation'
          ].map((tag, index) => (
            <motion.span 
              key={index} 
              className="soft-tag"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;