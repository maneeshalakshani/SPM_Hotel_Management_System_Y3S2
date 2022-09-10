import React, {useState, useEffect  } from 'react';
import axios from "axios";
import Menusetting from "./Menusetting";
import '../../../CSS/Menu.css';

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
        <div className="menusettings">
            <br></br>
            <h1>Menu Settings</h1><br></br>
        <ul>
            {menu && menu.map((menu,i)=>(
                <div className="menucards"key={i}>
                    <Menusetting adminview={menu}/>
                   
                </div>
            ))}
        </ul>
    </div>
    )
};

export default Menu;