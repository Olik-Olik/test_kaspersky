import React from "react";
import './Header.css';
import logo from '../../util/lodo.png';
import header_desktop from '../../util/header_desktop.svg';
import Open from '../../util/Open.svg';
import Kaspersky_Logo_Green from '../../util/Kaspersky_Logo_Green.svg';
import kasperski from '../../util//kasperski.svg';
export default function Header(){
    return(
        <div className="d">
        <header className="header">
            <img alt="Kaspersky" className="header_title" src={kasperski}/>
            <img alt="GBP_open" className="header_gbp" src={Open}/>
        {/*  <img alt="logo" className="header" src={logo}/>*/}
       </header>
    </div>
    )
}