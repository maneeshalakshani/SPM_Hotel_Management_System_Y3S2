const multer =  require('multer');
const fs = require('fs');
const Hall = require('../../models/HallModels/HallModels');

//upload hall images to uploads/halls folder===========================================================
const config = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, '../frontend/src/images/Hall_Images/uploads/');
    },
    filename: (req, file, callback) => {
        const max = 999999999;
        const min = 100000000;
        callback(null, file.originalname);
    }
})

const upload = multer({
    storage: config,
})

exports.uploadImage = upload.single('images');



//Add a Hall===========================================================================================
exports.addHall = async (req, res) => {
    const {hallName, description, receiption, theatre, banquet, classroom, dimension, area, ceiling } = req.body;
    const images = req.file.path
 
    const hall = new Hall({hallName, description, receiption, theatre, banquet, classroom, dimension, area, ceiling, images})
    try{
        const hallMsg = await hall.save();
        res.status(200).json(hallMsg);
    }catch(err){
        res.status(500).json(err);
    }
}

//get all halls========================================================================================
exports.getAllHalls = async (req, res) => {
    try{
        const halls = await Hall.find();
        res.status(200).json({'Result': halls});
    }catch(err){
        res.status(500).json({'Error': "Cannot get All Halls' details"});
    }
}

//get a Hall===========================================================================================
exports.getHall = async (req, res) => {
    const {id} = req.params;
    try{
        const hall = await Hall.findById(id);
        res.status(200).json({'Result': hall});
    }catch(err){
        res.status(500).json({'Error': 'Cannot get Hall details'});
    }
}

//update a Hall========================================================================================
exports.updateHall = async (req, res) => {
    try{
        const {id} = req.params;
        let {hallName, description, receiption, theatre, banquet, classroom, dimension, area, ceiling} = req.body;
        let image;
        
        const HallToUpdate = await Hall.findById(id);
        
        try{
            image = req.file.path;
        }catch(err){
            image = HallToUpdate.image;
            console.log(image);
        }

        var HallObj = {
            "hallName": hallName,
            "description": description,
            "receiption": receiption,
            "theatre": theatre,
            "banquet": banquet,
            "classroom": classroom,
            "dimension": dimension,
            "area": area,
            "ceiling": ceiling,
            "image": image
        }

        const obj = await Hall.findByIdAndUpdate(id, HallObj);
        res.status(200).json({'message': 'Hall Details Updated Sucessfully', 'Result': HallObj})

    }catch(err){
        res.status(500).json({'Error': err});
    }
}

//delete a Hall========================================================================================
exports.deleteHall = async (req, res) => {
    const {id} = req.params;
    try{
        await Hall.deleteOne({_id: id});
        res.status(200).json({'message': 'Hall deleted Sucessfuly'});
    }catch(err){
        res.status(500).json({'Error': err});
    }
}