const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");




const trackify = new mongoose.Schema({
  
      id:{
        type : String,
        required:true,        
    },

    long:{
        type : String,
        required:true,        
    },

    lati:{
        type : String,
        required:true,        
    },
})
const Tracker = new mongoose.model('tracker', trackify)
module.exports = Tracker;