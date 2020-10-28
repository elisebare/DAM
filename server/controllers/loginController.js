const damModel = require('../models/damModel');
const bcrypt = require('bcrypt')
const loginController = {};

//login controller sequence -->
//verify user --> queries db, checks pw --> if err, redirect to signup
loginController.verifyUser = (req, res, next) => {
  //store data from body
  const data = req.body;
  //query accounts table for username 
  const text = 'SELECT user_id, username, password FROM accounts WHERE username = ($1)';
  const params = [req.body.username];
  damModel.query(text, params)
  .then((data)=> {
    console.log('recieved data in verify user')
    
    if (data.rowCount === 0) {
      console.log('no user found')
      return res.redirect('/')
    } else {
      console.log('user found')
      //check password
      bcrypt.compare(req.body.password, data.rows[0].password)
      .then((bool) => {
        if (bool === true) {
          console.log('correct pw');
          return next();
        } else {
          console.log('incorrect pw')
          return res.redirect('/');
        }
      }) 
    }
  })
  .catch((err)=> {
    return next({
      log: `login controller error: no return from query error, ${err}`
    })
  })

}

loginController.checkpw = (req, res, next) => {
 

  return next();
}

loginController.passJWT = (req, res, next) => {
  return next();
}

//createUser
loginController.createUser = (req, res, next) => {
  //get data from form
  const data = req.body;
  //create text for query
  const text = 'INSERT INTO accounts (user_id, username, password, email, created_on) VALUES (DEFAULT, $1, $2, $3, DEFAULT)'
  /**For reference, the schema is below
   * user_id serial PRIMARY KEY,
   * username VARCHAR ( 50 ) UNIQUE NOT NULL, 
   * password VARCHAR ( 255 ) NOT NULL, 
   * email VARCHAR ( 255 ) UNIQUE NOT NULL,
   * created_on TIMESTAMP NOT NULL, 
   * last_login TIMESTAMP
   */

  const saltRounds = 5;
  bcrypt.hash(req.body.password, saltRounds)
  .then(hashedpw => {
    //params are the data from the form
    const values = [data.username, hashedpw, data.email]
    //perform query on model
    damModel.query(text, values)
    .then((queryResponse) => {
      console.log(queryResponse);
      return next();
    }).catch((err) => {
      console.log(err)
      return next({
        log: `the create user failed in loginController.js`
      })
    });
  })
}

//get access --> query join table for the access code and description
//ssid controller --> add ssid to cookies using cookie session https://www.npmjs.com/package/cookie-session

module.exports = loginController;