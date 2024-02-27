import React, { useState } from 'react';
import MainContent from './components/main-content/MainContent';
import ServiceRecap from './components/services/services-recap';
//import Employee from './components/Employee/Employee';
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
      {/* <Employee /> */}
    </>
  );
}

export default App;
