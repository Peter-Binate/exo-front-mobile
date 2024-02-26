import React, { useState } from 'react';
import MainContent from './components/main-content/MainContent';
import ServiceRecap from './components/services/services-recap';
import './styles/main.scss';

function App() {
  // Ajoutez un état pour suivre l'état actuel (MainContent ou ServiceRecap)
  const [showMainContent, setShowMainContent] = useState(true);

  // Fonction pour basculer entre MainContent et ServiceRecap
  const toggleView = () => {
    setShowMainContent(!showMainContent);
  };

  return (
    <>
      {/* Utilisez une condition pour afficher le composant approprié */}
      {showMainContent ? <MainContent toggleView={toggleView} /> : <ServiceRecap toggleView={toggleView} />}
    </>
  );
}

export default App;
