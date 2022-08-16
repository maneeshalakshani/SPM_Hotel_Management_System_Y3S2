const express = require('express')

const {addTaxi} = require('../controllers/Taxi');

const router = express.Router();

router.post('/add', addTaxi);

module.exports = router;