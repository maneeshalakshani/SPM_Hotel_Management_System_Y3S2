import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


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
            setInputs((prevState)=>({
                ...prevState,
                [e.target.name]:e.target.value,
            }));
            console.log(e);
        };
        console.log(inputs);
   return(
    <div> 
        {inputs && (
        <form onSubmit={handleSubmit}>
        <br></br>
            <div class="form-group col-md-8" >
                <label for="menuname">Menu Name</label>
                <input value={inputs.menuname}type="text" class="form-control" id="menuname" onChange={handleChange}></input>
            </div>
            <br></br>
            <div class="form-group col-md-8" >
                <label for="menuprice">Menu Price</label>
                <input value={inputs.menuname}type="text" class="form-control" id="menuprice" onChange={handleChange}></input>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="welcomedrink">Welcome Drink</label>
                <textarea value={inputs.welcomedrinks}class="form-control" id="welcomedrink" rows="3" onChange={handleChange}></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="soup">Soup</label>
                <textarea value={inputs.soups}class="form-control" id="soup" rows="3" onChange={handleChange} ></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="appetizers">Appetizers</label>
                <textarea value={inputs.appetizers}class="form-control" id="appetizers" rows="3" onChange={handleChange}></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="salads">Salads</label>
                <textarea value={inputs.salads}class="form-control" id="salads" rows="3" onChange={handleChange} ></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="rnn">Rice and Noodles</label>
                <textarea value={inputs.riceNodl}class="form-control" id="ann" rows="3" onChange={handleChange} ></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="chicken">Chicken</label>
                <textarea value={inputs.chicken}class="form-control" id="chiken" rows="3" onChange={handleChange} ></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="beef">Beef</label>
                <textarea value={inputs.beef}class="form-control" id="beef" rows="3" onChange={handleChange}></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="pork">Pork</label>
                <textarea value={inputs.pork}class="form-control" id="pork" rows="3" onChange={handleChange}></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="vegitables">Beef</label>
                <textarea value={inputs.vegitables} class="form-control" id="vegitables" rows="3" onChange={handleChange}></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for=" dessert">Dessert</label>
                <textarea value={inputs. dessert} class="form-control" id=" dessert" rows="3" onChange={handleChange} ></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-6">
            <button type="submit" className="savebutton">Update Menu</button>
            </div>
            <br></br>
            
  
        </form>
        )}
    </div>
   )
       
};

export default ViewSingleMenu;