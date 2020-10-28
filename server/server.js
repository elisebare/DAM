const path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); 
const loginRouter = require('./routes/loginRouter.js');


const app = express();

const PORT = 3000;

//parse requests with json (express global middleware)
app.use(bodyParser.json());

//static rendering
app.use('/assets', express.static(path.resolve(
  __dirname,
  '../client/assets'
)));

//home page
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(
    __dirname,
    '../client/index.html'
  ))
});

//login
app.use('/login', loginRouter)


//not found 404
app.use((req, res) => {
  res.status(404).send("The page you requested cannot be found")
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown middleware error',
    status: 400,
    message: {err: 'Internal server error'}
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});

//set up server by listening at port
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});

//export app
module.exports = app;

