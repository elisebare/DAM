//require model to do db queries
const damModel = require('../models/damModel.js');
const express = require('express');
const router = express.Router();
//require login controller file
const loginController = require('../controllers/loginController.js');


//when user logs in, they send a post request
//login controller sequence -->
  //verify user --> queries db, checks pw --> if err, redirect to signup?
  //set JWT for response
  //get access --> query join table for the access code and description

  //send level && token

  //chose NOT to implement session ssid controller --> add ssid to cookies using cookie session https://www.npmjs.com/package/cookie-session
router.post('/', loginController.verifyUser, 
  loginController.checkpw,
  loginController.checkrole, 
  loginController.passJWT,
  (req, res) => {
    console.log('about to send jwt')
    console.log({username: res.locals.user.username, level: res.locals.level, token: res.locals.token})
    return res.status(200).json({username: res.locals.user.username, level: res.locals.level, token: res.locals.token})
  }
  
);

//when user is created, post request sent to login/new
//create the user --> add user data to res.locals.user
//check the role
//pass the jwt
//if failed - redirect to home
router.post('/new', loginController.createUser,
  loginController.checkrole, 
  loginController.passJWT,
  (req, res) => {
    console.log('about to send jwt')
    console.log({username: res.locals.user.username, level: res.locals.level, token: res.locals.token})
    return res.status(200).json({username: res.locals.user.username, level: res.locals.level, token: res.locals.token})
  }
)


//verify login on load
router.post('/check', loginController.verifyJWT, (req, res) => {
  console.log('about to send jwt')
  console.log(res.locals.username);
  console.log(res.locals.level);
  console.log(res.locals.token);
  console.log({username: res.locals.username, level: res.locals.level, token: res.locals.token})
  return res.status(200).json({username: res.locals.username, level: res.locals.level, token: res.locals.token})
})

router.use(
  (req, res) => {
  res.status(404).send("The page you requested cannot be found")
});

module.exports = router;