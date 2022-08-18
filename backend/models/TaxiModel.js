const mongoose = require('mongoose');

var taxiSchema = new mongoose.Schema({
    taxiType: {type: String, required: true, default: "DEFAULT TAXI TYPE"},
    pricePerDay: {type: Number, required: true, default: 0},
    noOfSeats: {type: Number, required: true, default: 0},
    driver: {type: String, required: true, default: "DEFAULT TAXI DRIVER"},
});

module.exports = new mongoose.model('taxis', taxiSchema);