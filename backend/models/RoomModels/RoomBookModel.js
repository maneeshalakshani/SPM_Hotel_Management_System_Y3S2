const mongoose = require('mongoose');

const RmsBookingSchema = new mongoose.Schema({
    roomName: { type:String, required:true },
    type: { type:String, required:true},
    roomPrice: { type:Number, required:true},
    checkIn: { type:Date, required:true },
    checkOut: { type:Date, required:true},
    totalAmount: {type:Number, required:true},
    name: {type:String, required:true},
    email: {type:String, required:true},
});

const RoomsBookModel = mongoose.model("Rm-Booking", RmsBookingSchema);

module.exports = RoomsBookModel;