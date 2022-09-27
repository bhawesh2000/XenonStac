const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        unique:true,
        type: String
    },
    password:String,

    cur_date:{
        type:Date,
        default:Date.now()
    }
});

var Users = mongoose.model('User' , userSchema); // user is model name and UserSchema is schema

module.exports= Users;