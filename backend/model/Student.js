const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");




const trackify = new mongoose.Schema({
    fathername: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        // required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalide email")
            }
        }
    },

    driveremail: {
        type: String,
        // required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalide email")
            }
        }
    },




    studentname: {
        type: String,
        required: true,
    },
    fathermobile: {
        type: String,
        required: true,
    },
    studentnumber: {
        type: String,

    },
    schoolname: {
        type: String,
        required: true,
    },

    drivername: {
        type: String,
        required: true,
    },

    busnumberplate: {
        type: String,
        required: true,
    },
    Trackerid: {
        type: String,
        required: true,
    },
    drivernumber: {
        type: String,
        required: true,
    },

    pick: {
        type: String,
        required: true,
    },

    drop: {
        type: String,
        required: true,
    },
    studentimage: {
        type: String,
        required: true,
    },



});



const Student = new mongoose.model('Student', trackify)
module.exports = Student;