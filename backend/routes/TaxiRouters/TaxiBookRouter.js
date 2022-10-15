const express = require('express')
const router = express.Router();

const {
    bookTaxi,
    deleteAllBookedTaxis,
} = require('../../controllers/TaxiControllers/TaxiBookController');


router.post('/book', bookTaxi);
router.delete('/deleteAll', deleteAllBookedTaxis);
// router.delete('/deleteTaxi/:id', deleteTaxi);
// router.get('/getTaxi/:id', getTaxi);
// router.get('/getAllTaxis', getAllTaxis);
// router.put('/updateTaxi/:id', uploadImage, updateTaxi);


module.exports = router;