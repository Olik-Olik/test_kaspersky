import React from "react";

import Vector from '../Sign/Vector.svg';
import Vector_green from '../Sign/Vector_green.svg';
import Vector_grey from '../Sign/Vector_grey.svg';
import Vector_grey_small from '../Sign/Vector_grey_small.svg';
import Vector_white_small from '../Sign/Vector_white_small.svg';
import Vector_nout from '../Sign/Vector_nout.svg';
import Vector_oval from '../Sign/Vector_oval.svg';
import Vector_red from '../Sign/Vector_red.svg';
import Vector_white from '../Sign/Vector_white.svg';
import Vector_blue from '../Sign/Vector_blue.svg';


import './Logo_main.css';
function Logo_main(){
    return(
        <>
            <div className="position">
    <img className = "Vector" alt="c" src={Vector}/>
    <img className = "Vector_green" alt="cq" src={Vector_green}/>
    <img className="Vector_grey" alt="c" src={ Vector_grey}/>
    <img className="Vector_grey_small " alt="c" src={Vector_grey_small }/>
    <img className="Vector_white_small " alt="c" src={Vector_white_small }/>
    <img className="Vector_nout " alt="c" src={Vector_nout }/>
    <img className="Vector_oval " alt="c" src={Vector_oval }/>
    <img className="Vector_red" alt="c" src={Vector_red }/>
    <img className="Vector_white" alt="c" src={Vector_white }/>
    <img className="Vector_blue" alt="c" src={Vector_blue}/>
            </div>
        </>
 )
}
        export default  Logo_main;