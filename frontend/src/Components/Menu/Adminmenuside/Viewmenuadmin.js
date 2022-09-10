import React, {useState, useEffect  } from 'react';
import axios from "axios";
import Adminview from "./Adminview";
import '../../../CSS/Menu.css';
import headerimg from '../../../images/Menu_Images/headerimg.jpg';

const URL="http://localhost:8082/menud/getAllMenu";
const fetchHandler = async()=>{
    return await axios.get(URL).then((res)=>res.data)
};
const Menu=()=>{
    const[menu, setMenu]=useState();
    useEffect(()=>{
        fetchHandler().then((data)=>setMenu(data.menu));
    },[]);
    console.log(menu);
    return (
        <div>
        <div className='headerimg'>
            <div className='hedertopic'>
                <br></br><br></br><br></br><h1 className='maintopic'>WEDDING BUFFET MENUS</h1><br></br><br></br>
                <h3>Ultimate Luxury at it's best</h3>
                <br></br><br></br><br></br>
            </div>
        </div>
        <br></br><br></br>
        <ul className='ulcard'>
            {menu && menu.map((menu,i)=>(
                <div className="menucards"key={i}>
                    <Adminview adminview={menu}/>
                   
                </div>
            ))}
        </ul>
    </div>
    )
};

export default Menu;