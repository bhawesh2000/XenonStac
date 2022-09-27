const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstname: {
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        unique:true,
        type: String
    },
    telnum:{
        unique:true,
        type:String
    },
    feedback:String,

    cur_date:{
        type:Date,
        default:Date.now()
    }
});

var contacts = mongoose.model('contact' , contactSchema); // user is model name and UserSchema is schema

module.exports= contacts;