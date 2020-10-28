-- To update schema
-- Drop table
-- Re-add table
-- run psql -d <URL> -f <path>

DROP TABLE IF EXISTS accounts;

DROP TABLE IF EXISTS approved;
DROP TABLE IF EXISTS roles;

CREATE TABLE accounts(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  password VARCHAR ( 255 ) NOT NULL, 
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE roles (
  access_id serial PRIMARY KEY,
  level VARCHAR ( 50 ) NOT NULL
);

CREATE TABLE approved (
  id serial PRIMARY KEY,
  -- the role id comes from roles table, access id
  email VARCHAR (100 ) UNIQUE NOT NULL,
  access_id INT NOT NULL,
  FOREIGN KEY(access_id) 
    REFERENCES roles(access_id)
);

INSERT INTO roles
VALUES  (DEFAULT, 'admin'),
        (DEFAULT, 'submitter'),
        (DEFAULT, 'public');

INSERT INTO approved 
VALUES  (DEFAULT, 'admin1@gmail.com', 1),
        (DEFAULT, 'admin2@gmail.com', 1),
        (DEFAULT, 'submitter1@gmail.com', 2),
        (DEFAULT, 'public1@gmail.com', 3);




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