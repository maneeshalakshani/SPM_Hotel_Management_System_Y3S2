const express = require('express');
const { addRoom, uploadImage, getAllRooms, getRoom, updateRoom, deleteRoom } = require('../../controllers/RoomController/RoomController');
const router = express.Router();

router.post('/', uploadImage, addRoom);
router.get('/', getAllRooms);
router.get('/:id', getRoom);
router.put('/:id', uploadImage, updateRoom);
router.delete('/:id', deleteRoom);


module.exports = router;