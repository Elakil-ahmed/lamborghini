import React, { useState } from "react";
import lamborghini from "../logoLamborghini.png";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css'; 
import SearchBody from "../pages/InputSearch";
import { Grid } from "@mui/material";

function header() {
    
    return (
        <header>
            <img src={lamborghini} alt="" />
            <ul>
                <li className="btn btn-success"><Link to="/">welcome</Link></li>
                <li className="btn btn-success"><Link to="/about">about us</Link></li>
                <li className="btn btn-success"><Link to="/services">services</Link></li>
                <li className="btn btn-success"><Link to="/contact">contact us</Link></li>
            </ul>
            <div  id="search">
                <box-icon name='search-alt-2' animation='burst' ></box-icon>
                <SearchBody />
            </div>
            <div>
                <box-icon id="car" name='car' type='solid' animation='tada' color='#9c2323' ></box-icon>
            </div>
            <div id="menu" >
                <box-icon name='menu-alt-right'onclick="menu" ></box-icon>
            </div>
        </header>
    );
}
export default header;
























{/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
<FontAwesomeIcon icon="fa-solid fa-headphones" />
<FontAwesomeIcon icon="fa-solid fa-car" size="2xl" style={{color: "#98fba3",}} /> 
import { BoxIconName } from '@boxicons/boxicons';
*/}