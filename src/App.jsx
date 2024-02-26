import React, { useState } from 'react';
import MainContent from './components/main-content/MainContent';
import ServiceRecap from './components/services/services-recap';
// import Pourboire from './components/Pourboire/Pourboire';
import './styles/main.scss';

function App() {
  // On ajoute un état pour suivre l'état actuel (MainContent ou ServiceRecap)
  const [showMainContent, setShowMainContent] = useState(true);

  // Fonction pour basculer entre MainContent et ServiceRecap
  const toggleView = () => {
    setShowMainContent(!showMainContent);
  };

  return (
    <>
      {/* Utilisez une condition pour afficher le composant approprié */}
      {showMainContent ? <MainContent toggleView={toggleView} /> : <ServiceRecap toggleView={toggleView} />}
      {/* <Pourboire /> */}
    </>
  );
}

export default App;
