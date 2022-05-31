import React from "react";
import './Menu.css';
import small_arrow from "../../util/small_arrow.svg";

export default function Menu() {


    return(
        <>
    <nav id = "nav">
        <ul>
        <li><div>
            <a href = "#" className="mainItem">3 Devices, 1 year
            <img className="arrow_small" alt="arrow_small" src={small_arrow}/></a>
        </div>
        <ul className = "buynow">
        <li><a href = "" className="menu_drop">1 Device, 1 year $27.99</a></li>
            <li><a href = "" className="menu_drop">3Devices,1 year $35.99</a></li>
            <li><a href = "" className="menu_drop">3Devices,2 year $63.99</a></li>
            <li><a href = "" className="menu_drop">1 Device, 1 year $27.99</a></li>
            <li><a href = "" className="menu_drop">1 Device, 2 year $43.99</a></li>
            <li><a href = "" className="menu_drop">5 Devices, 1 year $43.99</a></li>
            <li><a href = "" className="menu_drop">5 Devices, 2 year $71.99</a></li>
    </ul>
        </li>
        </ul>
    </nav>
    </>  )
}
