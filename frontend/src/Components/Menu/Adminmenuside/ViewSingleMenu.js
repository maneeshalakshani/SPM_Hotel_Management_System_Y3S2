import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../../CSS/Menu.css';


    const  ViewSingleMenu = () => {

        const [inputs, setInputs] = useState();
        const id = useParams().id;
  
        useEffect(() => {
          const fetchHandler = async () => {
            await axios
              .get(`http://localhost:8082/menud/${id}`)
              .then((res)=>res.data).then(data=>setInputs(data.menu));
              
          };
          fetchHandler()
        }, [id]);
        const handleSubmit=(e) =>{
            e.preventDefault();
        }
        const handleChange =(e)=>{
            console.log(e);
        }
        console.log(inputs);
   return(
    <div> 
        {inputs && (
            <div>
            <br></br><br></br>
            <div className="menuposter">
            <br></br><br></br>
                <div className="topic"><h1>{inputs.menuname}</h1><br></br></div>
                <h4>Welcome Drinks</h4>
                <p>{inputs.welcomedrinks}</p>
                <h4>Appetizers</h4>
                <p>{inputs.appetizers}</p>
                <h4>Salads</h4>
                <p>{inputs.salads}</p>
                <h4>Soups</h4>
                <p>{inputs.soups}</p>
                <h4>Rice and Noodles</h4>
                <p>{inputs.riceNodl}</p>
                <h4>Chiken</h4>
                <p>{inputs.chicken}</p>
                <h4>Beef</h4>
                <p>{inputs.beef}</p>
                <h4>Pork</h4>
                <p>{inputs.pork}</p>
                <h4>Vegitables</h4>
                <p>{inputs.vegitables}</p>
                <h4>Dessert</h4>
                <p>{inputs.dessert}</p>
                <br></br><br></br>

            </div>
            </div>
        
            )}
    </div>
   )
       
};

export default ViewSingleMenu;