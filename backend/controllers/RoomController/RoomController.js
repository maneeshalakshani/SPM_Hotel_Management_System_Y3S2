const multer = require('multer');
const fs = require('fs');
const Room = require('../../models/RoomModels/RoomModel');

//upload room images to uploads/rooms folder===========================================================
const config = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, '../frontend/src/images/Rooms_Images/uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({
    storage: config,
})

exports.uploadImage = upload.single('images');


//Add a Room===========================================================================================
exports.addRoom = async (req, res) => {
    const {roomType, roomPrice, roomFeatures, description} = req.body;
    const images = req.file.path
 
    const room = new Room({roomType, roomPrice, roomFeatures, description, images})
    try{
        const roomMsg = await room.save();
        res.status(200).json(roomMsg);
    }catch(err){
        res.status(500).json(err);
    }
}

//get all rooms========================================================================================
exports.getAllRooms = async (req, res) => {
    try{
        const rooms = await Room.find();
        res.status(200).json({'Result': rooms});
    }catch(err){
        res.status(500).json({'Error': "Cannot get All Rooms' details"});
    }
}

//get a Room===========================================================================================
exports.getRoom = async (req, res) => {
    const {id} = req.params;
    try{
        const room = await Room.findById(id);
        res.status(200).json({'Result': room});
    }catch(err){
        res.status(500).json({'Error': 'Cannot get Room details'});
    }
}

//update a Room========================================================================================
exports.updateRoom = async (req, res) => {
    try{
        const {id} = req.params;
        let {roomType, roomPrice, roomFeatures, description} = req.body;
        let image;
        
        const RoomToUpdate = await Room.findById(id);
        
        try{
            image = req.file.path;
        }catch(err){
            image = RoomToUpdate.image;
            console.log(image);
        }

        var RoomObj = {
            "roomType": roomType,
            "roomPrice": roomPrice,
            "roomFeatures": roomFeatures,
            "description": description,
            "image": image
        }

        const obj = await Room.findByIdAndUpdate(id, RoomObj);
        res.status(200).json({'message': 'Room Details Updated Sucessfully', 'Result': RoomObj})

    }catch(err){
        res.status(500).json({'Error': err});
    }
}

//delete a Room========================================================================================
exports.deleteRoom = async (req, res) => {
    const {id} = req.params;
    try{
        await Room.deleteOne({_id: id});
        res.status(200).json({'message': 'Room deleted Sucessfuly'});
    }catch(err){
        res.status(500).json({'Error': err});
    }
}