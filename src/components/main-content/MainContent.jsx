import React from "react";
import {listNames} from "../../datas/datas.js";
import { listTitle } from "../../datas/titleTab.js";
import { listTitleButton } from "../../datas/titleButtonBottom.js";
import Header from "../../layouts/Header/Header.jsx";
import Menu from "../menu/menu.jsx";
import Footer from "../../layouts/Footer/Footer.jsx";


const MainContent = () => {

    const titleRecap = listTitle()[0];
    const titleButton = listTitleButton()[0];

  const nameItems = listNames().map((name, index) =>
    <li key={index}>{name}</li>
    );
    return (
        <>
        <Header title={titleRecap}/>
        <Menu />
            <ul>{nameItems}</ul>
            <Footer title={titleButton}></Footer>
        </>
    );
}
export default MainContent;