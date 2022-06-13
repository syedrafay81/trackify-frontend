const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");




const trackify = new mongoose.Schema({
    drivername:{
        type : String,
        required:true,        
    },
    
    driveemail:{
            type:String,
            required:true,
            // unique:[true, "email is already present"],
            //  validate(value){
            //   if(!validator.isEmail(value)){
            //       throw new Error("invalide email")
            //   }
            // }
        },
 
        driverpassword:{
            type : String,
            required:true,        
        },
    
        drivercnic:{
            type : String,
            required:true,        
        },

        drivermobile:{
            type : String,
            required:true,        
        },

        driverbus:{
            type : String,
            required:true,        
        },

        drivertracker:{
            type : String,
            required:true,       
        },

        driverschool:{
            type : String,
            required:true,        
        },
        
        driverpickup:{
            type : String,
            required:true,        
        },
        
        driverdropoff:{
            type : String,
            required:true,        
        },
        

        


});

trackify.pre('save', async function(next){

    next();
});

trackify.methods.generateAuthToken = async function(){
    try{
        let token =jwt.sign({_id:this._id},MYNAMEISKHAWAJAWAQASURREHMANGHOR);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;

    }catch(err){
        console.log(err)
    }
}



const Userdriver = new mongoose.model('Userdriver', trackify)
module.exports = Userdriver;