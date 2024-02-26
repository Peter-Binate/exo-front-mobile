import React from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { DateTime } from 'luxon';

const Header = ({ title }) => {
  // Obtenir la date actuelle avec Luxon
  const currentDate = DateTime.local();
  // Formater la date selon le format "jour numéroDuJour mois"
  const formattedDate = currentDate.setLocale('fr').toFormat('EEEE dd MMM');
  return (
    <>
        <div className="header">
          <p className='date'>{formattedDate}</p>
          <div className="header-main-block">
            <h1>{title}</h1>
            <p className='burger-icon-container'>
              <BiMenuAltRight className='burger-icon'/>
            </p>
          </div>
        </div>
    </>
  )
}

export default Header