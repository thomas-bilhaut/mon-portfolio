import React from 'react';

const Contact = () => {
  return (
    <section className="section">
      <h2>Contactez-moi</h2>
      <p>Envoyez-moi un message ou retrouvez-moi sur mes réseaux sociaux.</p>
      <p>
        <button
          onClick={() => window.open("mailto:thomasbilhaut8@gmail.com", "_self")}
          className="action-button"
        >
          Envoyer un email
        </button>
      </p>
      <p>
        <button
          onClick={() => window.open("https://www.linkedin.com/in/thomas-bilhaut-a4392934a/", "_blank")}
          className="action-button"
        >
          Voir mon LinkedIn
        </button>
      </p>
    </section>
  );
};

export default Contact;
