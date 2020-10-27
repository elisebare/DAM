const { Pool } = require('pg');

const PG_URI = 'postgres://symbkdvp:3v_In4H2A-RnRQ1Wx3dAso91PAoKX689@lallah.db.elephantsql.com:5432/symbkdvp';

const pool = new Pool({
  connectionString: PG_URI
})

/**
 * We export an object that contains a query, the function invoked by pool.query()
 * Controllers will use the query to read and write to the db
 */

module.exports = ({
  query: (text, params, callback) => {
    console.log('executed query', params, text); 
    return pool.query(text, params, callback);
  }
});