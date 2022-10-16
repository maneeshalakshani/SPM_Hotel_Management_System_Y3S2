const Taxi = require('../../models/TaxiModels/TaxiBookModel');

//Add Taxi==========================================================================================
exports.bookTaxi = async (req, res) => {
    const {vehicleId, startDate, endDate, purpose, time, location, taxiType, image} = req.body;
 
    const taxi = new Taxi({vehicleId, startDate, endDate, purpose, time, location, taxiType, image})
    try{
        const bookMsg = await taxi.save();
        res.status(200).json(bookMsg);
    }catch(err){
        res.status(500).json(err);
    }
}

//delete All taxis=====================================================================================
exports.deleteAllBookedTaxis = async (req, res) => {
    try{
        await Taxi.deleteMany();
        res.status(200).json({'message': 'Deleted All Booked Taxis Successfully'});
    }catch(err){
        res.status(500).json({"Error": err});
    }
}

//delete a taxi========================================================================================
exports.deleteBookedTaxi = async (req, res) => {
    const {id} = req.params;
    try{
        await Taxi.deleteOne({_id: id});
        res.status(200).json({'message': 'Booked Taxi deleted Sucessfuly'});
    }catch(err){
        res.status(500).json({'Error': err});
    }
}

//get all booked taxi========================================================================================
exports.getAllBookedTaxis = async (req, res) => {
    try{
        const taxis = await Taxi.find();
        res.status(200).json({'Result': taxis});
    }catch(err){
        res.status(500).json({'Error': 'Cannot get All Taxi details'});
    }
}