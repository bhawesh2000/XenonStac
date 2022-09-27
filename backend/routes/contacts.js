const express = require('express');
const mongoose = require('mongoose');

const Contact=require('../models/contact');

var contactrouter = express.Router();

const bodyParser = require('body-parser');

contactrouter.use(bodyParser.json());

contactrouter.post('/',(req , res , next)=>{

    let firstname=req.body.firstname;
    let lastname=req.body.lastname;
    let email=req.body.email;
    let telnum=req.body.mobileNo;
    let feedback=req.body.feedback;
  
    let ins=Contact({'firstname':firstname,'lastname':lastname ,'email':email , 'telnum':telnum , 'feedback':feedback}) 
  
    ins.save((err,data)=>{
      if(err) throw err
      res.json({msg:'inserted successfully'})
    })
  
  });

  module.exports = contactrouter;
  