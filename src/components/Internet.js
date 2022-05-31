import Group from "../util/Group.svg";
import Star_full from "./Sign/Star_full.svg";
import Star_semi from "./Sign/Star_semi.svg";
import Rectangle from "./Sign/Rectangle.svg";
import old_price from "../util/old_price.svg";
import new_price from "./Sign/new_price.svg";
import Menu from "./Menu/Menu";
import React from 'react';
import About from '../components/About/About.css';

function Internet(){
    return(

<section className="internet_background">
    <div className="internet">
<div className="logo_title_stars_price">
    <div className="logo_title_stars_review">
        <div className="logo_title">
            <img className="logo" alt="logo" src={Group}/>
            <h2 className="internet_title">Kaspersky Internet Security</h2>
        </div>
        <div className="reviews_stars">
            <div className="stars">
                <img className="star" alt="stars" src={Star_full}/>
                <img className="star" alt="stars" src={Star_full}/>
                <img className="star" alt="stars" src={Star_full}/>
                <img className="star" alt="stars" src={Star_full}/>
                <img className="star" alt="stars" src={Star_semi}/>
            </div>
            <p className="reviews">(1503 reviews)</p>
        </div>
    </div>
        <img className="line_price" alt="line price" src={Rectangle}/>
        <div className="price_two">
            <img className="old_price" src={old_price} alt="35.99"/>
            <img className="new_price" src={new_price} alt="34.99" />
        </div>
        <img className="line_price" alt="line price" src={Rectangle}/>
        {/*   <div className="input_field">3 Devices, 1 year</div>*/}

        <Menu/>
        {/*  <img className="rectangle" src={Rectangle} alt="rectangle"/>*/}
        <button className="buy_now">Buy Now</button>
</div>
    </div>
</section>
)}
export default Internet;