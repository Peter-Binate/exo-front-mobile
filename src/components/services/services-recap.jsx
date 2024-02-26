import React from 'react'
import { listTitle } from '../../datas/titleTab.js'
import Header from '../../layouts/Header/Header'
import Menus from '../menu/menu.jsx'
import Footer from '../../layouts/Footer/Footer'
import {listTitleButton} from '../../datas/titleButtonBottom.js'
import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";


const HeaderRecap = () => {

  const titleRecap = listTitle()[1];
  const titleButton = listTitleButton()[1];

  return (
    <>
     <div className="header-in-scroll">
    <Header title={titleRecap}/>
    <Menus />
    </div>
        <p className='titleRecap'>Employés selectionnés</p>

        <div className='container-button-service flex-center'>
            <p className='titleRecap'>Service</p>
            <button className='buttonService flex-center'>

            <div className='buttonStyle'><IoSunnyOutline /></div>
            <div className='buttonStyle'><FaRegMoon /></div>

            </button>
            <p className='titleRecap'>midi</p>
        </div>
        <Footer title={titleButton}/>
    </>
  )
}

export default HeaderRecap