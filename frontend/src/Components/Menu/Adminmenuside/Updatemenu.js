import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../../../CSS/Menu.css';


    const  ViewSingleMenu = () => {

        const [inputs, setInputs] = useState();
        const id = useParams().id;
        const history =useNavigate(); 
  
        useEffect(() => {
          const fetchHandler = async () => {
            await axios
              .get(`http://localhost:8082/menud/${id}`)
              .then((res)=>res.data).then(data=>setInputs(data.menu));
              
          };
          fetchHandler()
        }, [id]);

        const sendRequest =async()=>{
            await axios.put(`http://localhost:8082/menud/${id}`,{
                menuname:String(inputs.menuname),
                menuprice:String(inputs.menuprice),
                welcomedrinks:String(inputs.welcomedrinks),
                appetizers:String(inputs.appetizers),
                salads:String(inputs.salads),
                soups:String(inputs.soups),
                riceNodl:String(inputs.riceNodl),
                chicken:String(inputs.chicken),
                beef:String(inputs.beef),
                pork:String(inputs.pork),
                vegitables:String(inputs.vegitables),
                dessert:String(inputs.dessert)
            }).then(res=>res.data)
        }
        const handleSubmit=(e) =>{
            e.preventDefault();
            sendRequest().then(()=>history("/viewmenu"))
            
        }
        const handleChange = (e) =>{
            setInputs((prevState)=>({
                ...prevState,
                [e.target.name]:e.target.value,
            }));
            console.log(e);
        };
        console.log(inputs);
   return(
    <div> 
        <div className='container main-container'>
        
        <br></br><br></br><br></br>
        <div class="menuformupdate">
        <br></br> 
        <div id="updatemenutopic"><h1>Update the Menu.</h1></div>
        <br></br><br></br>
        {inputs && (
        <form onSubmit={handleSubmit}>
        <br></br>
            <div class="form-group col-md-8" >
                <label for="menuname">Menu Name</label>
                <input value={inputs.menuname}type="text"  class="formfeildupdate" id="menuname" onChange={handleChange} name="menuname"></input>
            </div>
            <br></br>
            <div class="form-group col-md-8" >
                <label for="menuprice">Menu Price</label>
                <input value={inputs.menuprice}type="text" class="formfeildupdate" id="menuprice" onChange={handleChange} name="menuprice"></input>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="welcomedrink">Welcome Drink</label>
                <textarea value={inputs.welcomedrinks} class="formfeildupdate" id="welcomedrink" rows="3" onChange={handleChange} name="welcomedrinks"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="soup">Soup</label>
                <textarea value={inputs.soups} class="formfeildupdate" id="soup" rows="3" onChange={handleChange} name="soups"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="appetizers">Appetizers</label>
                <textarea value={inputs.appetizers} class="formfeildupdate" id="appetizers" rows="3" onChange={handleChange} name="appetizers"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="salads">Salads</label>
                <textarea value={inputs.salads} class="formfeildupdate" id="salads" rows="3" onChange={handleChange} name="salads"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="rnn">Rice and Noodles</label>
                <textarea value={inputs.riceNodl} class="formfeildupdate" id="ann" rows="3" onChange={handleChange} name="riceNodl"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="chicken">Chicken</label>
                <textarea value={inputs.chicken} class="formfeildupdate" id="chiken" rows="3" onChange={handleChange} name="chicken"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="beef">Beef</label>
                <textarea value={inputs.beef} class="formfeildupdate" id="beef" rows="3" onChange={handleChange}name="beef"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="pork">Pork</label>
                <textarea value={inputs.pork} class="formfeildupdate" id="pork" rows="3" onChange={handleChange} name="pork"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="vegitables">Beef</label>
                <textarea value={inputs.vegitables}  class="formfeildupdate" id="vegitables" rows="3" onChange={handleChange} name="vegitables"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for=" dessert">Dessert</label>
                <textarea value={inputs. dessert}  class="formfeildupdate" id=" dessert" rows="3" onChange={handleChange} name="dessert"></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-6">
            <button type="submit" className="savebutton">Update Menu</button>
            </div>
            <br></br><br></br><br></br>
            
            
  
        </form>
        )}
        </div>
        </div>
    </div>
   )
       
};

export default ViewSingleMenu;
