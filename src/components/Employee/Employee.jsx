import React, { useState } from 'react';
import { listTitle } from '../../datas/titleTab.js';
import Header from '../../layouts/Header/Header.jsx';
import Footer from '../../layouts/Footer/Footer.jsx';
import { listTitleButton } from '../../datas/titleButtonBottom.js';
import { FaConciergeBell } from 'react-icons/fa';
import { GiSaucepan } from 'react-icons/gi';
import { LiaUserCogSolid } from 'react-icons/lia';
import { LiaUserPlusSolid } from 'react-icons/lia';
import { LiaUserMinusSolid } from 'react-icons/lia';

const Employee = () => {
  const titleRecap = listTitle()[2];
  const titleButton = listTitleButton()[2];

  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="header-in-scroll">
        <Header title={titleRecap} />
      </div>

      <form>
        <div className="input-container">
          <label htmlFor="employee-name">Nom</label>
          <input type="text" id="employee-name" name="employee-name" placeholder="Entrez le nom de l'employé" />
        </div>

        <div className="input-container">
          <label htmlFor="employee-forname">Prénom</label>
          <input type="text" id="employee-forname" name="employee-forname" placeholder="Entrez le prénom de l'employé" />
        </div>

        <div className="input-container">
          <label htmlFor="employee-forname">Poste occupé</label>
          <div className="toggle_switch employee-toggle flex-center">
            <button onClick={handleToggle} className="buttonService flex-center">
              {isToggled ? <FaConciergeBell className="buttonStyle" /> : <FaConciergeBell className="buttonStyle hoverClick" />}
              {isToggled ? <GiSaucepan className="buttonStyle hoverClick" /> : <GiSaucepan className="buttonStyle" />}
            </button>
            <p>Serveur</p>
          </div>
        </div>
      </form>

      <div className="employees-setting-container">
        <LiaUserCogSolid className="employee-icon" />
        <LiaUserPlusSolid className="employee-icon" />
        <LiaUserMinusSolid className="employee-icon" />
      </div>

      <Footer title={titleButton} />
    </>
  );
};

export default Employee;
