const express = require('express');
const { addHall, uploadImage, getAllHalls, getHall, updateHall, deleteHall } = require('../../controllers/HallControllers/HallController');
const router = express.Router();

router.post('/', uploadImage, addHall);
router.get('/', getAllHalls);
router.get('/:id', getHall);
router.put('/:id', uploadImage, updateHall);
router.delete('/:id', deleteHall);

module.exports = router;