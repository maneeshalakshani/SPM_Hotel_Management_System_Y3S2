const mongoose = require('mongoose');

var menudSchema = new mongoose.Schema({

    menuname : {
        type: String,
        required: true
    },
    menuprice:{
        type: String,
        required: true
    },
    welcomedrinks:{
        type: String,
        required: true
    },
    appetizers:{
        type: String,
        required: true
    },
    salads:{
        type: String,
        required: true
    },
    soups:{
        type: String,
        required: true
    },
    riceNodl:{
        type: String,
        required: true
    },
    chicken:{
        type: String,
        required: true
    },
    beef:{
        type: String,
        required: true
    },
    pork:{
        type: String,
        required: true
    },
    vegitables:{
        type: String,
        required: true
    },
    dessert:{
        type: String,
        required: true
    },
    

   
});

module.exports = new mongoose.model('menud', menudSchema);