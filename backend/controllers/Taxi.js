const Taxi = require('../models/TaxiModel');

exports.addTaxi = async (req, res) => {
    const {taxiType, pricePerDay, noOfSeats, driver} = req.body;

    const taxi = new Taxi({
        taxiType,
        pricePerDay,
        noOfSeats,
        driver
    })

    try{
        const taxiMsg = await taxi.save();
        res.status(200).json(taxiMsg);
    }catch(err){
        res.status(500).json(err);
    }
}