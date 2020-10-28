const { Pool } = require('pg');

//get environment vars
require('dotenv').config();

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI
})

/**
 * We export an object that contains a query, the function invoked by pool.query()
 * Controllers will use the query to read and write to the db
 */

module.exports = ({
  query: (text, params) => {
    console.log('executed query', params, text); 
    return pool.query(text, params);
  }
});