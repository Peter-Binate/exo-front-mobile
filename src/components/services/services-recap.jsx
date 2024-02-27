import { useState } from 'react';
import { listTitle } from '../../datas/titleTab.js';
import Header from '../../layouts/Header/Header';
import Menus from '../menu/menu.jsx';
import Footer from '../../layouts/Footer/Footer';
import { listTitleButton } from '../../datas/titleButtonBottom.js';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaRegMoon } from 'react-icons/fa';
import { listNames } from '../../datas/datas.js';
import { FaRegUser } from 'react-icons/fa6';

const HeaderRecap = () => {
  const [isToggled, setIsToggled] = useState(false);
  const titleRecap = listTitle()[1];
  const titleButton = listTitleButton()[1];
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const nameItems = listNames().map((name, index) => (
    <li key={index} className={`container-list-name`}>
      <div className="icon-container text-center flex-center">
        <FaRegUser className="user-icon" />
      </div>
      <div className="name-container text-style flex-center">{name}</div>
    </li>
  ));

  return (
    <>
      <div className="header-in-scroll">
        <Header title={titleRecap} />
        <Menus />
      </div>
      <p className="titleRecap">Employés selectionnés</p>

      <ul className="container-list flex-center">{nameItems}</ul>

      <div className="toggle_switch flex-center">
        <p className="titleRecap">Service</p>
        <button onClick={handleToggle} className="buttonService flex-center">
          {isToggled ? <IoSunnyOutline className="buttonStyle" /> : <IoSunnyOutline className="buttonStyle hoverClick" />}
          {isToggled ? <FaRegMoon className="buttonStyle hoverClick" /> : <FaRegMoon className="buttonStyle" />}
        </button>
        {isToggled ? (
          <p className="titleRecap" style={{ color: 'black' }}>
            soir
          </p>
        ) : (
          <p className="titleRecap" style={{ color: 'black' }}>
            midi
          </p>
        )}
      </div>
      <Footer title={titleButton} />
    </>
  );
};

export default HeaderRecap;
