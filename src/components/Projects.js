import React from 'react';

const Projects = () => {
  return (
    <section className="section">
      <h2>Mes Projets</h2>
      <div className="project">
        <h3>Projet 1: Application de gestion de tâches</h3>
        <p>Une application de gestion de tâches créée avec React et Node.js.</p>
      </div>
      <div className="project">
        <h3>Projet 2: Portfolio interactif</h3>
        <p>Mon portfolio en ligne, réalisé en React.</p>
      </div>
      <div className="project">
        <h3>Projet 3: Interface web pour sélectionner une station de radio</h3>
        <p>Création d'une interface web permettant de choisir la station de radio voulue.</p>
      </div>
      <div className="project">
        <h3>Projet 4: Chrono trail</h3>
        <p>Une interface web pour la gestion de courses et le suivi en temps réel, utilisant des capteurs pour automatiser le chrono et afficher le classement en temps réel.</p>
      </div>
      <div className="project">
        <h3>Projet 5: Formulaire d'inscription/connexion</h3>
        <p>Formulaire d'inscription et de connexion avec intégration dans une base de données MySQL.</p>
      </div>
      <div className="project">
        <h3>Projet 6: Projet chez Nemera</h3>
        <p>Conversion d'un document Word en site web alliant HTML, CSS et JavaScript.</p>
      </div>
    </section>
  );
};

export default Projects;
