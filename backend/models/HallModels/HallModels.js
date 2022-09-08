const mongoose = require('mongoose');

const HallSchema = new mongoose.Schema({
    hallName: {type:String, required:true},
    description: {type:String, required:true},
    receiption: { type:Number, required:true },
    theatre: { type:Number, required:true },
    banquet: { type:Number, required:true },
    classroom: { type:Number, required:true },
    dimension: { type:Number, required:true },
    area: { type:Number, required:true },
    ceiling: { type:Number, required:true },
    images: {type:String}
});

const HallslModel = mongoose.model("Hall", HallSchema);

module.exports = HallslModel;
