//require model to do db queries
const damModel = require('../models/damModel.js');
const express = require('express');
const router = express.Router();
//require login controller file
const loginController = require('../controllers/loginController.js')

//when user logs in, they send a post request
//login controller sequence -->
  //verify user --> queries db, checks pw --> if err, redirect to signup?
  //set JWT for response
  //get access --> query join table for the access code and description
  //chose NOT to implement session ssid controller --> add ssid to cookies using cookie session https://www.npmjs.com/package/cookie-session
router.post('/', loginController.verifyUser, 
  loginController.checkrole, 
  loginController.passJWT,
  
);

//when user is created, post request sent to login/new
router.post('/new', loginController.createUser,
  //middleware sequence --> 
  //unique username? --> queries db for username --> if err redirect to signup w/ error message
  //otherwise insert data into accounts table
  (req, res, next) => {
    res.status(200).send('user created yay')
  }
)

//when user logs out get request sent 
router.get('/', )

router.use(
  (req, res) => {
  res.status(404).send("The page you requested cannot be found")
});

module.exports = router;