const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const JWT_SECRET = 'ahrgaejhhdhfvheaearbjhagerg';

exports.register = async (req, res) => {
    const{name, email, password} = req.body;
    userType = 'user';
    try{
        const userObj = new User({name, email, password, userType})
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.send({error: "User exist"});
        }
        const user = await userObj.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.adminRegister = async (req, res) => {
    const{name, email, password} = req.body;
    userType = 'admin';
    try{
        const userObj = new User({name, email, password, userType})
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.send({error: "User exist"});
        }
        const user = await userObj.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
}


exports.login = async (req, res) => {
    const{email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.json({error: 'User Not Found'});
        }
        if(password == user.password){
            const token = jwt.sign({email: user.email}, JWT_SECRET);
            if(res.status(201)){
                return res.json({status: "OK", data: token});
            }else{
                return res.json({error: "error"});
            }
        }
        res.json({status: "error", error: "Invalid Password"})
    }catch(err){
        res.status(500).json(err);
    }
}

exports.getUserData = async (req, res) => {
    const{token} = req.body;
    try{
        const user = jwt.verify(token, JWT_SECRET);
        const userEmail = user.email;
        await User.findOne({email: userEmail}).then((data) => {
            res.send({status: "Ok", data: data})
        }).catch((error) => {
            res.send({status: "error", data: error})
        })
    }catch(err){

    }
}


exports.deleteAllUsers = async (req, res) => {
    try{
        await User.deleteMany();
        res.status(200).json({"message": "All Users Deleted"})
    }catch(err){
        res.status(500).json(err)
    }
}