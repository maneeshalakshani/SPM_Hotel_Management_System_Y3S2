const mongoose = require('mongoose');

const RoomsSchema = new mongoose.Schema({
    roomName: { type:String, required:true },
    type: { type:String, required:true},
    maxCount: { type:Number, required:true},
    roomPrice: { type:Number, required:true },
    description: { type:String, required:true },
    images: { type:String },
});

const RoomsModel = mongoose.model("Room", RoomsSchema);

module.exports = RoomsModel;