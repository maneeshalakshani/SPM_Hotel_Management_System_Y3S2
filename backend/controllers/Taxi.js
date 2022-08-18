const Taxi = require('../models/TaxiModel');

exports.addTaxi = async (req, res) => {
    const {taxiType, pricePerDay, noOfSeats, driver} = req.body;

    const taxi = new Taxi({taxiType, pricePerDay, noOfSeats, driver})
    console.log(taxiType);
    try{
        const taxiMsg = await taxi.save();
        res.status(200).json(taxiMsg);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.deleteAllTaxis = async (req, res) => {
    try{
        await Taxi.deleteMany();
        res.status(200).json({'message': 'Deleted All Taxis Successfully'});
    }catch(err){
        res.status(500).json({"Error": err});
    }
}