CREATE TABLE accounts(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  password VARCHAR ( 255 ) NOT NULL, 
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL, 
  last_login TIMESTAMP
);

CREATE TABLE access (
  access_id serial PRIMARY KEY,
  description VARCHAR ( 50 ) NOT NULL
);

-- CREATE TABLE accounts_access(
--   user_id INT NOT NULL,
--   access_id INT NOT NULL,
--   PRIMARY KEY (user_id, access_id),
--   FOREIGN KEY (access_id),
--     REFERENCES access (access_id)
--   FOREIGN KEY (user_id),
--     REFERENCES accounts (user_id)
-- );

-- CREATE TABLE metadata (
--   _id serial NOT NULL PRIMARY KEY,
--   title VARCHAR ( max ) UNIQUE NOT NULL,
--   creator VARCHAR ( max )
-- )