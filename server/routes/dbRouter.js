const damModel = require('../models/damModel.js');
const express = require('express');
const router = express.Router();

//query db on get request

//add data on post request
router.post('/', function(req,res){
  const files = req.body;
  console.log(files);
  res.send('sick!');
})

module.exports = router;