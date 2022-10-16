
import React from "react";
import '../../../CSS/Menu.css';
import cardimage from '../../../images/Menu_Images/food1.jpg';
import {Link} from "react-router-dom";

const Reportview =(props)=>{
    const{_id,menuname,menuprice, welcomedrinks,appetizers,salads,soups,riceNodl,chicken,beef,pork,vegitables,dessert}=props.adminview;
    return(
    <div className="menureportdiv">
         <table id="menureportdetails">
              
              
               <tr>
                       <td>{menuname}</td>
                       <td>{menuprice}</td>
                       <td>{welcomedrinks}</td>
                       <td>{appetizers}</td>
                       <td>{salads}</td>
                       <td>{soups}</td>
                       <td>{riceNodl}</td>
                       <td>{chicken}</td>
                       <td>{beef}</td>
                       <td>{pork}</td>
                       <td>{vegitables}</td>
                       <td>{dessert}</td>
                      
               </tr>
               
       
       </table>
  
    
    </div>
    )
};

export default Reportview;



