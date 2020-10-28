const damModel = require('../models/damModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
      //assign the data to res.locals for use in future middleware
      res.locals.user = data.rows[0]
      
    }
  })
  .catch((err)=> {
    return next({
      log: `login controller error: no return from query error, ${err}`
    })
  })

}

loginController.checkpw = (req, res, next) => {
  //store pw
  const storedPw = res.locals.user.password
  //check password
  bcrypt.compare(req.body.password, storedPw)
  .then((bool) => {
    if (bool === true) {
      console.log('correct pw');
      return next();
    } else {
      console.log('incorrect pw')
      return res.redirect('/');
    }
  })
  .catch((err)=> {
    return next({
      log: `check pw controller, bcrypt compare threw error, ${err}`
    })
  }) 
}


loginController.checkrole = (req, res, next) => {
  //query the approved table for email  -- need to do a join with the accounts to get the correct email based on username 
  //add the role to the res.locals.user object --> this will get added to the jwt as well
  const query = 'SELECT r.access_id, r.level FROM roles r LEFT JOIN approved a on r.access_id = a.access_id WHERE a.email = $1'
  const params = [res.locals.user.email]
  damModel.query(text, params)
  .then((data)=> {
    console.log('recieved data in check role')
    
    if (data.rowCount === 0) {
      console.log('no permissions')
      //set permissions to public
      //query roles table for id for public
      const query = 'SELECT access_id FROM roles WHERE level="public"'
      const params = [];
      damModel.query(text, params, (err, role) => {
        if (err) {
          console.log('no role found')
          res.locals.level = null;
          return next()
        } else {
          //there was a result, grab the level
          res.locals.level = role.rows[0].level;
          return next()
        }
      })
    } else {
      console.log('level found')
      //assign the data to res.locals for use in future middleware
      res.locals.level = data.rows[0].level
      return next()
    }
  })
  .catch((err)=> {
    return next({
      log: `check roles error: no return from query error, ${err}`
    })
  })

  return next();
}

loginController.passJWT = (req, res, next) => {
  //sign a jwt
  const secret = "ssshhhhhhh!!!!! testing in progress!"
  res.locals.token = jwt.sign({user: res.locals.user.username, level: res.locals.level}, secret, {expiresIn: 120});
  console.log(res.locals.token)
  return next();
}

//createUser
loginController.createUser = (req, res, next) => {
  //get data from form
  const data = req.body;
  //create text for query
  const text = 'INSERT INTO accounts (user_id, username, password, email, created_on) VALUES (DEFAULT, $1, $2, $3, DEFAULT) RETURNING *'
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
      res.locals.user = queryResponse.rows[0]
      return next();
    }).catch((err) => {
      //failed to create new user -- redirect to login--don't crash app
      console.log('failed to create new user')
      res.redirect('/')
    });
  })
}

//get access --> query join table for the access code and description
//ssid controller --> add ssid to cookies using cookie session https://www.npmjs.com/package/cookie-session

module.exports = loginController;