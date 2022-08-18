const express = require('express')
const router = express.Router();

const {
    addTaxi, 
    deleteAllTaxis,
    deleteTaxi,
    getTaxi,
    getAllTaxis,
    uploadImage,
    updateTaxi
} = require('../../controllers/TaxiControllers/TaxiController');


router.post('/add', uploadImage, addTaxi);
router.delete('/deleteAll', deleteAllTaxis);
router.delete('/deleteTaxi/:id', deleteTaxi);
router.get('/getTaxi/:id', getTaxi);
router.get('/getAllTaxis', getAllTaxis);
router.put('/updateTaxi/:id', uploadImage, updateTaxi);


module.exports = router;