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

exports.deleteTaxi = async (req, res) => {
    const {id} = req.params;
    try{
        await Taxi.deleteOne({_id: id});
        res.status(200).json({'message': 'Taxi deleted Sucessfuly'});
    }catch(err){
        res.status(500).json({'Error': err});
    }
}

exports.getTaxi = async (req, res) => {
    const {id} = req.params;
    try{
        const taxi = await Taxi.findById(id);
        res.status(200).json({'message': 'Taxi Recieved SucessFully', 'Result': taxi});
    }catch(err){
        res.status(500).json({'Error': 'Cannot get Taxi details'});
    }
}

exports.getAllTaxis = async (req, res) => {
    try{
        const taxis = await Taxi.find();
        res.status(200).json({'Result': taxis});
    }catch(err){
        res.status(500).json({'Error': 'Cannot get All Taxi details'});
    }
}