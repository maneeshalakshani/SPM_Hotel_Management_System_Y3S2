const express = require('express')
const router = express.Router();

const {
    bookTaxi,
    deleteAllBookedTaxis,
    getAllBookedTaxis,
    deleteBookedTaxi,
} = require('../../controllers/TaxiControllers/TaxiBookController');


router.post('/book', bookTaxi);
router.delete('/deleteAll', deleteAllBookedTaxis);
router.delete('/deleteTaxi/:id', deleteBookedTaxi);
// router.get('/getTaxi/:id', getTaxi);
router.get('/getAllBookedTaxis', getAllBookedTaxis);
// router.put('/updateTaxi/:id', uploadImage, updateTaxi);


module.exports = router;