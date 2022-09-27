const express = require('express');
const mongoose = require('mongoose');

const Users = require('../models/user');


var Userrouter = express.Router();


const bodyParser = require('body-parser');

Userrouter.use(bodyParser.json());

Userrouter.post('/register',(req , res , next)=>{

  let email=req.body.email;
  let pass=req.body.password;

  let ins=Users({'email':email , 'password':pass}) //data assigned

  ins.save((err,data)=>{
    if(err) throw err
    res.json({msg:'inserted successfully'})
  })

});


module.exports = Userrouter;
