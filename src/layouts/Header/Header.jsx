import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { DateTime } from 'luxon';
import { RxCross2 } from 'react-icons/rx';
import { MdRoomService } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { CiStickyNote } from 'react-icons/ci';
import { IoExitOutline } from 'react-icons/io5';

const Header = ({ title }) => {
  // Obtenir la date actuelle avec Luxon
  const currentDate = DateTime.local();
  // Formater la date selon le format "jour numéroDuJour mois"
  const formattedDate = currentDate.setLocale('fr').toFormat('EEEE dd MMM');
  const [BurgerOpen, setBurgerOpen] = useState(false);
  const [ServiceOpen, setServiceOpen] = useState(false);

  const handleBurger = () => {
    setBurgerOpen(!BurgerOpen);
  };

  const handleService = () => {
    setServiceOpen(!ServiceOpen);
  };

  return (
    <>
      <div className="header">
        <p className="date">{formattedDate}</p>
        <div className="header-main-block">
          <h1>{title}</h1>
          <p className="burger-icon-container" onClick={handleBurger}>
            <BiMenuAltRight className="burger-icon" />
          </p>
        </div>
      </div>
      {BurgerOpen && (
        <>
          <div className="backdrop"></div>
          <div className="container-burger">
            <div className="burger-menu">
              <div className="cross-burger" onClick={handleBurger}>
                <RxCross2 />
              </div>
              <div className="burger-menu-list">
                <ul>
                  <li className="service-burger">
                    <MdRoomService /> Services
                  </li>
                  <li>
                    <RiAdminFill /> Administrateur
                  </li>
                </ul>

                <div className="footer-burger">
                  <ul>
                    <li className="service-burger">
                      Modifier le service <CiStickyNote />
                    </li>
                    <li style={{ color: 'red' }} onClick={handleService}>
                      Fermer le service <IoExitOutline />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {ServiceOpen && (
        <>
          <div className="backdrop"></div>
          <div className="modal">
            <div className="modal-content">
              <p>Etes-vous sur de vouloir mettre fin au service du soir du {formattedDate} ?</p>
              <button onClick={handleService} className="button-modal">
                Non, modifier
              </button>
              <button onClick={handleService} className="button-modal red-button">
                Oui, terminer
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
