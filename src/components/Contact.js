import React from 'react';

const Contact = () => {
  return (
    <section className="section">
      <h2>Contactez-moi</h2>
      <p>Envoyez-moi un message ou retrouvez-moi sur mes réseaux sociaux.</p>
      <a href="mailto:thomasbilhaut8@gmail.com">thomasbilhaut8@gmail.com</a>
      <p>
        <button
          onClick={() => window.open("https://www.linkedin.com/in/thomas-bilhaut-a4392934a/", "_blank")}
          className="linkedin-button"
        >
          Voir mon LinkedIn
        </button>
      </p>
    </section>
  );
};

export default Contact;
