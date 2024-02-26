import React from "react";
import {listNames} from "../../datas/datas.js";

const MainContent = () => {
  const nameItems = listNames().map((name, index) =>
    <li key={index}>{name}</li>
    );
    return (
        <>
            <ul>{nameItems}</ul>
        </>
    );
}
export default MainContent;