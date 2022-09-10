import React from "react";
import '../../../CSS/Menu.css';
import {Link} from "react-router-dom";


const Adminview =(props)=>{
    
      
    const{_id,menuname,menuprice, welcomedrinks,appetizers,salads,soups,riceNodl,chicken,beef,pork,vegitables,dessert,image}=props.adminview;
    return(
       
    <div className="menusettings">
        
         <table className="customers">
               
                    <tr>
                        <th ></th>
                        <th ></th>
                        <th ></th>
                    </tr>
                    <tr>
                            <td><h4>{menuname}</h4></td>
                            <td><Link className="updatebutton" to ={`/updatemenu/${_id}`}><p className='menuItem'><br></br>Update menu</p></Link></td>
                            <td><Link className="deletebutton" to ={`/deletemenu/${_id}`}><p className='menuItem'><br></br>Delete menu</p></Link></td>
                    </tr>
                    
            
            </table>
       
    </div>
    )
};

export default Adminview;

