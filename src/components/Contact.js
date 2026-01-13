import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => (
  <motion.section 
    className="content-section"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <div className="icon-header">
      <Mail size={40} />
      <h2>Contact</h2>
    </div>

    <div className="content-card contact-card">
      <h3>Disponible immédiatement</h3>
      <p>
        Je suis actuellement à la recherche d'opportunités en tant que Technicien Informatique, 
        Administrateur Système et Réseau Junior, ou Développeur Web Junior.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <strong>📧 Email:</strong> thomasbilhaut8@gmail.com
        </div>
      </div>

      <div className="availability">
        <h4>Mobilité</h4>
        <p>✓ Prêt à me déplacer pour le bon poste</p>
        <p>✓ Permis B + Véhicule</p>
        <p>✓ Télétravail partiel accepté</p>
      </div>
    </div>
  </motion.section>
);

export default Contact;