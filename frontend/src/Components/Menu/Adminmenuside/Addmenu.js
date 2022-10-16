import React, { Component, useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function Addmenu(){

    const[menuname,setMenuname]=useState("");
    const[menuprice,setMenuprice]=useState("");
    const[welcomedrinks,setwelcomedrink]=useState("");
    const[soups,setsoup]=useState("");
    const[appetizers,setappetizers]=useState("");
    const[salads,setsalads]=useState("");
    const[riceNodl,setrnn]=useState("");
    const[chicken,setchicken]=useState("");
    const[beef,setbeef]=useState("");
    const[pork,setpork]=useState("");
    const[vegitables,setvegitables]=useState("");
    const[dessert,setdessert]=useState("");

    

    function sentMenudata(e){
        e.preventDefault();
        console.log(menuname)

        const newMenu={
            menuname,
            menuprice,
            welcomedrinks,
            appetizers,
            salads,
            soups,
            riceNodl,
            chicken,
            beef,
            pork,
            vegitables,
            dessert

        }
        axios.post("http://localhost:8082/menud/",newMenu).then(()=>{
            alert("Menu added")
           
        }).catch((err)=>{
            alert(err)
        })
    }

 
        return(
    <div className='container main-container'>
        <br></br>
         <div id="updatemenutopic"><h1>Add the Menu.</h1></div>
        <br></br><br></br><br></br>
        <div class="menuform">
        <br></br><br></br><br></br>
            <div class ="menuforminside col-md-9">
        <form onSubmit={sentMenudata}>
        <br></br>
            <div class="form-group col-md-8" >
                <label for="menuname">Menu Name</label>
                <input type="text" class="formfeild" id="menuname" onChange={(e)=>{setMenuname(e.target.value);}} required></input>
            </div>
            <br></br>
            <div class="form-group col-md-8" >
                <label for="menuprice">Menu Price</label>
                <input type="Number" class="formfeild" id="menuprice" onChange={(e)=>{setMenuprice(e.target.value);}} required></input>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="welcomedrink">Welcome Drink</label>
                <textarea class="formfeild" id="welcomedrink" rows="3" onChange={(e)=>{setwelcomedrink(e.target.value);}}required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="soup">Soup</label>
                <textarea class="formfeild" id="soup" rows="3" onChange={(e)=>{setsoup(e.target.value);}} required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="appetizers">Appetizers</label>
                <textarea class="formfeild" id="appetizers" rows="3" onChange={(e)=>{setappetizers(e.target.value);}}required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="salads">Salads</label>
                <textarea class="formfeild" id="salads" rows="3" onChange={(e)=>{setsalads(e.target.value);}} required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="rnn">Rice and Noodles</label>
                <textarea class="formfeild" id="ann" rows="3" onChange={(e)=>{setrnn(e.target.value);}} required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="chicken">Chicken</label>
                <textarea class="formfeild" id="chiken" rows="3" onChange={(e)=>{setchicken(e.target.value);}}required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="chicken">Beef</label>
                <textarea class="formfeild" id="beef" rows="3" onChange={(e)=>{setbeef(e.target.value);}} required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="chicken">Pork</label>
                <textarea class="formfeild" id="pork" rows="3" onChange={(e)=>{setpork(e.target.value);}} required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="vegitables">Vegitabels</label>
                <textarea class="formfeild" id="chiken" rows="3" onChange={(e)=>{setvegitables(e.target.value);}} required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-8">
                <label for="dessert">Dessert</label>
                <textarea class="formfeild" id="dessert" rows="3" onChange={(e)=>{setdessert(e.target.value);}}required></textarea>
            </div>
            <br></br>
            <div class="form-group col-md-6">
            <button type="submit" className="savebutton">Save menu</button>
            </div>
            <br></br>
            
  
        </form>
        </div>
        <br></br><br></br><br></br>
        </div>
    </div>

      
        )
    }
