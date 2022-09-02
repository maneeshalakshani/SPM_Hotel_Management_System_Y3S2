const mongoose = require('mongoose');

const RoomsSchema = new mongoose.Schema({
    roomType: { type:String, required:true },
    roomPrice: { type:Number, required:true },
    roomFeatures: { type:String, required:true },
    description: { type:String, required:true },
    images: { type:String }
});

const RoomsModel = mongoose.model("Room", RoomsSchema);

module.exports = RoomsModel;