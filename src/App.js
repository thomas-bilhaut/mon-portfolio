import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showTitle, setShowTitle] = useState('');
  const [animate, setAnimate] = useState(false);

  const handleClick = (sectionName) => {
    // Affiche le titre dans la box et lance l'animation
    setShowTitle(sectionName);
    setAnimate(true);

    // Après 600ms, on masque le titre pour laisser apparaître le contenu en dessous
    setTimeout(() => {
      setAnimate(false);
      setShowTitle('');
    }, 600);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                onClick={() => handleClick("À propos de")}
                end
              >
                À propos de
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                onClick={() => handleClick("Compétences")}
              >
                Compétences
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => handleClick("Projets")}
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => handleClick("Contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Box centrale animée qui affiche temporairement le titre */}
        <div className="content-box-container">
          {animate && (
            <div className="content-box animate">
              <h2>{showTitle}</h2>
            </div>
          )}
        </div>

        {/* Le contenu complet de la section s'affiche en dessous */}
        <div className="section-container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
