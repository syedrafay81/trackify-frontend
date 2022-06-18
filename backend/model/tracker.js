const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");




const trackify = new mongoose.Schema({
  
    deviceID:{
        type : String,
        required:true,        
    },

    long:{
        type : String,
        required:true,        
    },

    lat:{
        type : String,
        required:true,        
    },
})
const Tracker = new mongoose.model('tracker', trackify)
module.exports = Tracker;