const multer = require('multer')
const fs = require('fs')

const Taxi = require('../../models/TaxiModels/TaxiModel');


//upload taxi image to uploads/taxi folder============================================================
const multerConfig = multer.diskStorage({
    destination: (req, res, callback) => {
        // callback(null, 'uploads/taxi/');
        // callback(null, '../frontend/src/images/Taxi_Images/uploads/');
        callback(null, '../frontend/public/images/Taxi_Images/uploads/');
    },
    filename: (req, file, callback) => {
        const max = 999999999;
        const min = 100000000;
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        let extension = file.mimetype.split('/')[1];
        callback(null, `${random}.${extension}`);
    }
})

const upload = multer({
    storage: multerConfig,
})

exports.uploadImage = upload.single('image');


//Add Taxi==========================================================================================
exports.addTaxi = async (req, res) => {
    const {taxiType, pricePerDay, noOfSeats, driver} = req.body;
    let image = req.file.path;

    let i = image;
    // image = '../../../..' + i.split("frontend")[1].replace(/\\/g, '/').toString();
    image = i.split("public")[1].replace(/\\/g, '/').toString();
 
    const taxi = new Taxi({taxiType, pricePerDay, noOfSeats, driver, image})
    try{
        const taxiMsg = await taxi.save();
        res.status(200).json(taxiMsg);
    }catch(err){
        res.status(500).json(err);
    }
}

//delete All taxis=====================================================================================
exports.deleteAllTaxis = async (req, res) => {
    try{
        await Taxi.deleteMany();
        res.status(200).json({'message': 'Deleted All Taxis Successfully'});
    }catch(err){
        res.status(500).json({"Error": err});
    }
}

//delete a taxi========================================================================================
exports.deleteTaxi = async (req, res) => {
    const {id} = req.params;
    try{
        await Taxi.deleteOne({_id: id});
        res.status(200).json({'message': 'Taxi deleted Sucessfuly'});
    }catch(err){
        res.status(500).json({'Error': err});
    }
}

//get a taxi=============================================================================================
exports.getTaxi = async (req, res) => {
    const {id} = req.params;
    try{
        const taxi = await Taxi.findById(id);
        res.status(200).json({'message': 'Taxi Recieved SucessFully', 'Result': taxi});
    }catch(err){
        res.status(500).json({'Error': 'Cannot get Taxi details'});
    }
}

//get all taxis===========================================================================================
exports.getAllTaxis = async (req, res) => {
    try{
        const taxis = await Taxi.find();
        res.status(200).json({'Result': taxis});
    }catch(err){
        res.status(500).json({'Error': 'Cannot get All Taxi details'});
    }
}

exports.updateTaxi = async (req, res) => {
    try{
        const {id} = req.params;
        let {taxiType, pricePerDay, noOfSeats, driver} = req.body;
        let image;
        
        const taxiToUpdate = await Taxi.findById(id);
        
        try{
            image = req.file.path;
            let i = image;
            image = i.split("public")[1].replace(/\\/g, '/').toString();
        }catch(err){
            image = taxiToUpdate.image;
            console.log(image);
        }

        var taxiObj = {
            "taxiType": taxiType,
            "pricePerDay": pricePerDay,
            "noOfSeats": noOfSeats,
            "driver": driver,
            "image": image
        }

        const obj = await Taxi.findByIdAndUpdate(id, taxiObj);
        res.status(200).json({'message': 'Updated Sucessfully', 'Result': taxiObj})

    }catch(err){
        res.status(500).json({'Error': err});
    }
}