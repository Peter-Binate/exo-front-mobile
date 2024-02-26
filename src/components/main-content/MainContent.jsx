import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import {listNames} from "../../datas/datas.js";

const MainContent = () => {

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
            <ul className="main-section flex-center">
                {nameItems}
            </ul>
        </>
    );
}
export default MainContent;