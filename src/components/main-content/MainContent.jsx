import  { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import {listNames} from "../../datas/datas.js";
import { listTitle } from "../../datas/titleTab.js";
import { listTitleButton } from "../../datas/titleButtonBottom.js";
import Header from "../../layouts/Header/Header.jsx";
import Menu from "../menu/menu.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";



const MainContent = ({ toggleView }) => {

    // Titre de la page
    const titleRecap = listTitle()[0];
    // Titre du bouton
    const titleButton = listTitleButton()[0];

    // Variable d'état des checkbox
    const [checkedItems, setCheckedItems] = useState({});
    
    // Permet de vérifier si les inputs ont été cochés
    const handleCheckboxChange = (index) => {
        setCheckedItems((prev) => ({
          ...prev,
          [index]: !prev[index]
        }));
    };

  // On génère tous les inputs  
  const nameItems = listNames().map((name, index) =>
    <li key={index} className={`input-checkbox-container ${checkedItems[index] ? 'checked' : ''}`}>
        <div className="icon-container text-center flex-center">
            <FaRegUser className='user-icon'/>
        </div>
        <div className="name-container text-style flex-center">
            {name}
        </div>
        <div className="checkbox-container text-center flex-center">
            <input type="checkbox" name="salary-name" onChange={() => handleCheckboxChange(index)}/>
        </div>
    </li>
    );

    // Fonction pour vérifier si au moins un élément a été coché
    const handleNextButtonClick = () => {
        const isAtLeastOneChecked = Object.values(checkedItems).some(item => item);
        if (isAtLeastOneChecked) {
        toggleView(); // Appeler la fonction pour basculer vers le ServiceRecap
        } else {
        // Gérer le cas où aucun élément n'est coché
        console.log('Aucun élément coché');
        }
    };


    return (
        <>
         <div className="header-in-scroll">
            <Header title={titleRecap}/>
            <Menu />
        </div>
           
            <ul className="main-section flex-center">
                {nameItems}
            </ul>

            <Footer title={titleButton} onNextButtonClick={handleNextButtonClick} />

        </>
    );
}
export default MainContent;