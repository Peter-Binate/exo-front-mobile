import React, { useState } from 'react';
import { listTitle } from '../../datas/titleTab.js';
import Header from '../../layouts/Header/Header.jsx';
import Footer from '../../layouts/Footer/Footer.jsx';
import { listTitleButton } from '../../datas/titleButtonBottom.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Pourboire = () => {
  // Notification ajout de pourboire
  const notify = () => {
    toast.success('Le pourboire à bien été ajouté !', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const titleRecap = listTitle()[2];
  const titleButton = listTitleButton()[2];

  // État pour gérer le montant du pourboire
  const [pourboireAmount, setPourboireAmount] = useState('0'); // Initialisé avec '0' pour éviter les problèmes de type

  // Fonction pour gérer le clic sur les boutons de montant
  const handleButtonClick = (amount) => {
    // Convertir les montants en nombres, effectuer l'addition, puis convertir le résultat en chaîne
    const newAmount = (parseFloat(pourboireAmount) + parseFloat(amount)).toFixed(2);
    setPourboireAmount(newAmount);
  };

  return (
    <>
      <ToastContainer />
      <div className="header-in-scroll">
        <Header title={titleRecap} />
      </div>
      <form>
        <div className="input-container">
          <label htmlFor="table-name">Nom de la table</label>
          <input type="text" name="table-name" placeholder="Choisissez le nom de la table" />
        </div>
        <div className="input-container">
          <label htmlFor="pourboire-mount">Montant du pourboire</label>
          <input
            type="text"
            name="pourboire-mount"
            // Utilisez l'état pour contrôler la valeur de l'input
            value={pourboireAmount}
            // Ajoutez un gestionnaire pour permettre la modification manuelle
            onChange={(e) => setPourboireAmount(e.target.value)}
          />
        </div>
      </form>
      <div className="add-pourboire-container flex-center">
        <button className="add-pourboire-button" onClick={() => handleButtonClick('0.50')}>
          0.50
        </button>
        <button className="add-pourboire-button" onClick={() => handleButtonClick('1.00')}>
          1.00
        </button>
        <button className="add-pourboire-button" onClick={() => handleButtonClick('2.00')}>
          2.00
        </button>
      </div>
      <Footer title={titleButton} onNextButtonClick={notify} />
    </>
  );
};

export default Pourboire;
