const express = require('express')
const router = express.Router()

//import controller
const {
    register,
    adminRegister,
    login,
    deleteAllUsers,
    getUserData,
} = require('../controllers/common')

//api routes
router.post('/register', register);
router.post('/adminRegister', adminRegister);
router.post('/login', login);
router.delete('/deleteAllUsers', deleteAllUsers);
router.post('/getData', getUserData);

module.exports = router;