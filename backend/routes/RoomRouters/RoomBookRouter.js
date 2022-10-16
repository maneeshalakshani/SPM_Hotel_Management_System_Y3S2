const { json } = require("express");
const express = require("express");
const router = express.Router();
const RoomBooking = require("../../models/RoomModels/RoomBookModel");

//Add New Booking
router.post("/", (req, res) => {
  const newRmBooking = new RoomBooking({
    roomName: req.body.roomName,
    type: req.body.type,
    roomPrice: req.body.roomPrice,
    checkIn: req.body.checkIn,
    checkOut: req.body.checkOut,
    totalAmount: req.body.totalAmount,
    name: req.body.name,
    email: req.body.email,
  });

  newRmBooking
    .save()
    .then(() => res.json("Room Booked Successfully!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//Get Bookings
router.get('/', (req,res) => {
  RoomBooking.find().then(rmbookings => res.json(rmbookings)).catch(err => res.status(400).res.json(`Error: ${err}`))
})

module.exports = router;