const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    userType: {type: String},
});

module.exports = new mongoose.model('users', userSchema);