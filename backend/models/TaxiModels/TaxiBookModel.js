const mongoose = require('mongoose');

var bookedTaxiSchema = new mongoose.Schema({
    vehicleId: {type: String, required: true, default: "DEFAULT TAXI ID"},
    startDate: {type: String, required: true, default: 'startDate'},
    endDate: {type: String, required: true, default: 'startDate'},
    purpose: {type: String, required: true, default: "Reason 1"},
    time: {type: String, required: true, default: "DEFAULT TIME"},
    location: {type: String, required: true, default: 'Hotel'}
});

module.exports = new mongoose.model('taxiBook', bookedTaxiSchema, 'booked-Taxis');