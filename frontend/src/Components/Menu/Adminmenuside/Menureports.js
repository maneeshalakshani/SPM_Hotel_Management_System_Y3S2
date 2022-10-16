import React, {useState, useEffect,useRef  } from 'react';
import axios from "axios";
import Reportview from "./Menureportview";
import '../../../CSS/Menu.css';
import headerimg from '../../../images/Menu_Images/headerimg.jpg';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';



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

    const DOWNPDF = () => {
        const doc = new jsPDF("landscape","pt",[1000,1500]);
        doc.html(document.querySelector("#INVENTORY_REPORT"),{
            callback:function(pdf) {
                pdf.save("inventory report.pdf")
            }
        })
    }

  
        return (
            <div className="menureportdiv">
    <button class="btn btn-outline-success" onClick={() =>DOWNPDF()} >DOWNLOAD REPORT PDF FILE </button>
                 <br></br><br></br>
                <h1>Menu Report</h1>
                 <br></br><br></br>
        
            <table id="menureport">
                   
                   <tr>
                       <th >Menu Name</th>
                       <th >Menuprice</th>
                       <th >Welcomedrinks</th>
                       <th >Appetizers</th>
                       <th >Salads</th>
                       <th >Soups</th>
                       <th >Rice and Noodles</th>
                       <th >Chicken</th>
                       <th >Beef</th>
                       <th >Pork</th>
                       <th >Vegitables</th>
                       <th >Dessert</th>
                   </tr>
                   </table>
          
                {menu && menu.map((menu,i)=>(
                    <div key={i}>
                        <Reportview adminview={menu}/>
                       
                    </div>
                ))}
       
    
    
            
        </div>
    
        
        )

    
};

export default Menu;