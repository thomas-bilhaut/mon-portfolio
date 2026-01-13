import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => (
  <motion.section 
    className="content-section"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div className="icon-header">
      <User size={40} />
      <h2>À propos</h2>
    </div>
    <div className="content-card">
      <h3>Profil professionnel</h3>
      <p>
        Passionné par l'informatique et les nouvelles technologies, je recherche un poste 
        pour débuter ma carrière professionnelle dans l'IT. Mes compétences couvrent à la fois 
        l'administration système, les réseaux informatiques et le développement web.
      </p>
      
      <h3>Objectifs professionnels</h3>
      <p>
        Je suis à la recherche d'un poste de <strong>Technicien Informatique</strong>, 
        <strong> Administrateur Système et Réseau Junior</strong> ou <strong>Développeur Web Junior</strong> 
        où je pourrai mettre en pratique mes compétences techniques et continuer à apprendre 
        dans un environnement professionnel dynamique.
      </p>

      <h3>Mes atouts</h3>
      <ul className="skills-list">
        <li>✓ Solides connaissances en administration Windows et Linux</li>
        <li>✓ Maîtrise des réseaux et protocoles (TCP/IP, DNS, DHCP)</li>
        <li>✓ Compétences en développement web (HTML, CSS, JavaScript, React)</li>
        <li>✓ Capacité à diagnostiquer et résoudre des problèmes techniques</li>
        <li>✓ Bon relationnel et sens du service utilisateur</li>
        <li>✓ Autonome, rigoureux et désireux d'apprendre</li>
      </ul>
    </div>
  </motion.section>
);

export default About;