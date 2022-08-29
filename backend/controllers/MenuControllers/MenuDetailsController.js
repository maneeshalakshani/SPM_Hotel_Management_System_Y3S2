const multer = require('multer')
const fs = require('fs')

const MenuDetails = require('../../models/MenuModels/MenuDetailsModel');
const router = require('../../routes/TaxiRouters/TaxiRoute');


//Add menu=========================

const addMenud = async(req, res, next)=>{
    const {menuId,menuname,menuprice,appetizers,salads,soups,riceNodl,chicken,beef,pork,vegitables,dessert
    } = req.body;
   
    let menud;
    try{
        menud=new MenuDetails({
            menuId,menuname,menuprice,appetizers,salads,soups,riceNodl,chicken,beef,pork,vegitables,dessert

        });
        await menud.save();
    } catch (err){
        console.log(err);
    }
    if (!menud){
        return res.status(500).jason({message:'Unable to add'})
    }
    return res.status(201).json({menud});
    };

    exports.addMenud= addMenud;  



//get all taxis===========================================================================================
   
const getAllMenu =async (req, res, next) =>{
    let menu;
    try{
        menu= await MenuDetails.find();
    }catch(err){
    console.log(err);
    }

    if(!menu){
        return res.status(404).json({message:"No menu found"});
    }
    return res.status(200).json({menu});
}

exports.getAllMenu= getAllMenu;  


//get a menu=============================================================================================
const getmenu = async (req, res, next) => {
   
    const id = req.params.id; 
    let menu;
    try{
        menu = await MenuDetails.findById(id);
       
    }catch(err){
        console.log(err);
    }
    if(!menu){
        return res.status(404).json({message:"No menu found"});
    }
    return res.status(200).json({menu});
    
}

exports.getmenu=getmenu;


//update menu details========================================

const updateMenu= async(req, res, next)=>{
    const id = req.params.id;
    const{menuname,menuprice,appetizers,salads,soups,riceNodl,chicken,beef,pork,vegitables,dessert} = req.body;
    let menu;
    try{
        menu = await MenuDetails.findByIdAndUpdate(id,{
            menuname,
            menuprice,
            appetizers,
            appetizers,
            salads,
            soups,
            riceNodl,
            chicken,
            beef,
            pork,
            vegitables,
            dessert
        });
        menu=await menu.save()
    }catch(err){
        console.log(err);
    }
    if(!menu){
        return res.status(404).json({message:"Unable to update"});
    }
    return res.status(200).json({menu});
}

exports.updateMenu = updateMenu;


//Menu delete=================================================
const deletemenu = async (req, res, next)=>{
    const id = req.params.id;
    let menu;
    try{
        menu =await MenuDetails.findByIdAndRemove(id)
    }catch(err){
        console.log(err);
    }
    if(!menu){
        return res.status(404).json({message:"Unable to delete"});
    }
    return res.status(200).json({menu});
};

exports.deletemenu = deletemenu;