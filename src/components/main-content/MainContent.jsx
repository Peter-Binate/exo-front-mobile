import  { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import {listNames} from "../../datas/datas.js";
import { listTitle } from "../../datas/titleTab.js";
import { listTitleButton } from "../../datas/titleButtonBottom.js";
import Header from "../../layouts/Header/Header.jsx";
import Menu from "../menu/menu.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";


const MainContent = () => {

    const titleRecap = listTitle()[0];
    const titleButton = listTitleButton()[0];

    // Permet de vérifier si les inputs ont été cochés
    const [checkedItems, setCheckedItems] = useState({});
    
    const handleCheckboxChange = (index) => {
        setCheckedItems((prev) => ({
          ...prev,
          [index]: !prev[index]
        }));
    };


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

    return (
        <>
         <div className="header-in-scroll">
            <Header title={titleRecap}/>
            <Menu />
        </div>
           
            <ul className="main-section flex-center">
                {nameItems}
            </ul>

             <Footer title={titleButton}></Footer>
        </>
    );
}
export default MainContent;