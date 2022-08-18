const express = require('express')
const router = express.Router();

const {addTaxi, deleteAllTaxis} = require('../controllers/Taxi');


router.post('/add', addTaxi);
router.delete('/deleteAll', deleteAllTaxis);


module.exports = router;