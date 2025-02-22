import React from 'react';
import imageProfile from '../assets/photo.jpg'; // Ajuste le chemin si nécessaire
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img className="profile-image" src={imageProfile} alt="Ton Nom" />
        <div className="header-text">
          <h1>Bilhaut Thomas</h1>
          <p>Développeur web en quête d'une alternance</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
