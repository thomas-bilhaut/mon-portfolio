import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <h2>À propos de moi</h2>
      <p>
        Passionné par le développement web, je suis un développeur polyvalent maîtrisant à la fois le développement front-end et back-end. Toujours à la recherche de nouveaux défis, je suis prêt à mettre mes compétences au service d'une entreprise dynamique en alternance.
      </p>

      {/* Section Projets à venir */}
      <h3>🚀 Projets et ambitions</h3>
      <p>
        À l'avenir, je souhaite participer à des projets innovants en développement web, où je pourrai approfondir mes compétences en conception d'applications modernes, en sécurisation des données et en optimisation des performances, tout en contribuant à des solutions qui répondent aux besoins réels des utilisateurs.
      </p>

      <div className="projects-container">
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h4>Conception d'applications modernes</h4>
          <p>Développement d'interfaces utilisateur fluides et intuitives en React et Vue.js.</p>
        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h4>Sécurisation des données</h4>
          <p>Mise en place de bonnes pratiques de sécurité et d'authentification (JWT, OAuth, chiffrement).</p>
        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h4>Optimisation des performances</h4>
          <p>Amélioration du temps de chargement et de l'expérience utilisateur via des optimisations frontend et backend.</p>
        </motion.div>

        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h4>Solutions adaptées aux besoins utilisateurs</h4>
          <p>Création d'outils web en réponse aux problématiques réelles des entreprises et utilisateurs.</p>
        </motion.div>
      </div>

      {/* Section Loisirs */}
      <h3>🎯 Loisirs</h3>
      <ul>
        <li>🏃 Course à pied </li>
        <li>🎮 Jeux vidéo </li>
        <li>📚 Veille technologique (lecture d’articles et tests de nouvelles technos)</li>
      </ul>
    </section>
  );
};

export default About;
