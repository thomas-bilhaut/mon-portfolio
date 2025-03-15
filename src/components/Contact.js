import React from 'react';

const Contact = () => {
  return (
    <section className="section">
      <h2>Contactez-moi</h2>
      <p>Envoyez-moi un message ou retrouvez-moi sur mes réseaux sociaux.</p>
      <p>
        <button className="btn-demo" onClick={() => window.open("mailto:thomasbilhaut8@gmail.com", "_self")} 
        >
          Envoyer un email
        </button>
      </p>
      <p>
        <button className="btn-demo"
          onClick={() => window.open("https://www.linkedin.com/in/thomas-bilhaut-a4392934a/", "_blank")}  >
          Voir mon LinkedIn
        </button>
      </p>
    </section>
  );
};

export default Contact;
