import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../../CSS/Menu.css';
import {Link} from "react-router-dom";


    const  ViewSingleMenu = (props) => {

        const [inputs, setInputs] = useState();
        const id = useParams().id;
        const deleteHandler=()=>{
            axios.delete(`http://localhost:8082/menud/${id}`).then(res=>res.data)
        }
  
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
           
                <div className="deletebackground">
                    <div className="deletebackgroundshed">
                       
                    <br></br><br></br>
                        <div className="deletecard">
                            <h1>Are you sure you want to delete <br></br>{inputs.menuname} ?</h1><br></br>
                            <p>You won't be able to revert this.</p>
                            <ul className="deleteul">
                                <button onClick={deleteHandler} className="yesdeletebutton">Yes delete this</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                                <Link className="cancelbutton" to ={'/mainmenusetting'}>Cancel</Link>
                            </ul>
                            <br></br>
                            
                        </div>

                        <br></br><br></br>
                    </div>
                </div>
            </div>
        
            )}
    </div>
   )
       
};

export default ViewSingleMenu;