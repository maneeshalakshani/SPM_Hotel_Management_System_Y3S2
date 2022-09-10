import React from "react";
import '../../../CSS/Menu.css';
import cardimage from '../../../images/Menu_Images/food1.jpg';
import {Link} from "react-router-dom";

const Adminview =(props)=>{
    const{_id,menuname,menuprice, welcomedrinks,appetizers,salads,soups,riceNodl,chicken,beef,pork,vegitables,dessert,image}=props.adminview;
    return(
    <div>
  
    <div className="cardofmenus">
        <img className="foodimage"src={cardimage} alt={menuname}></img>
        <h1>{menuname}</h1>
        <article>{menuprice}</article>
        <Link className="viewsinglemenu" to ={`/viewmenu/${_id}`}><p className='menuItem'>View menu</p></Link>
    </div>
    </div>
    )
};

export default Adminview;