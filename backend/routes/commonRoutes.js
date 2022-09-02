const express = require('express')
const router = express.Router()

//import controller
const {
    register,
    login,
    deleteAllUsers,
    getUserData,
} = require('../controllers/common')

//api routes
router.post('/register', register);
router.post('/login', login);
router.delete('/deleteAllUsers', deleteAllUsers);
router.post('/getData', getUserData);

module.exports = router;