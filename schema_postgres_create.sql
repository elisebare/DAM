-- To update schema
-- Drop table
-- Re-add table
-- run psql -d <URL> -f <path>

DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS approved;
DROP TABLE IF EXISTS roles;

DROP TABLE IF EXISTS keywords;


DROP TABLE IF EXISTS type_doc;
DROP TABLE IF EXISTS type;
DROP TABLE IF EXISTS relations;
DROP TABLE IF EXISTS relations_types;
DROP TABLE IF EXISTS metadata;

CREATE TABLE accounts(
  user_id serial PRIMARY KEY,
  username VARCHAR ( 50 ) UNIQUE NOT NULL,
  password VARCHAR ( 255 ) NOT NULL, 
  email VARCHAR ( 255 ) UNIQUE NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
  -- last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
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

-- PASSWORD IS plaintext testing1

INSERT INTO accounts 
VALUES  (DEFAULT, 'admin1', '$2b$05$.kkmLUHNopyUZLrmTvjdr.Cdlzor3TsyhUCitZkLr8g2CrMeFobWW', 'admin1@gmail.com', DEFAULT),
        (DEFAULT, 'submitter1', '$2b$05$.kkmLUHNopyUZLrmTvjdr.Cdlzor3TsyhUCitZkLr8g2CrMeFobWW', 'submitter1@gmail.com', DEFAULT),
        (DEFAULT, 'public1', '$2b$05$.kkmLUHNopyUZLrmTvjdr.Cdlzor3TsyhUCitZkLr8g2CrMeFobWW', 'public1@gmail.com', DEFAULT);


-- metadata table
CREATE TABLE metadata (
  document_id serial PRIMARY KEY,
  title VARCHAR (255) NOT NULL,
  subject VARCHAR (255) NOT NULL,
  description VARCHAR (1000) NOT NULL,
  source VARCHAR (255) NOT NULL
);

-- because each keyword will need to be look up able, they will be added separately to a join table that only contains keyword and document_id (foreign key)
CREATE TABLE keywords (
  id serial PRIMARY KEY,
  keyword VARCHAR (255) NOT NULL,
  document_id INT NOT NULL,
  FOREIGN KEY(document_id) 
    REFERENCES metadata(document_id)
);

-- types are predefined by Dublin Core (https://www.dublincore.org/specifications/dublin-core/dcmi-type-vocabulary/)
-- this table will have descriptions of each type w/ a type id
CREATE TABLE type (
  doc_type_id serial PRIMARY KEY, 
  type VARCHAR (255) NOT NULL
);

-- this is a join table that will contain document id and type id
CREATE TABLE type_doc (
  id serial PRIMARY KEY, 
  document_id INT NOT NULL,
  FOREIGN KEY (document_id)
    REFERENCES metadata(document_id),
  doc_type_id INT NOT NULL,
  FOREIGN KEY (doc_type_id)
    REFERENCES type(doc_type_id)
);

-- relations can be of different types, as described here by dublin core https://www.dublincore.org/specifications/dublin-core/usageguide/elements/
-- there will be a relationship definitions table, along with a table listing relations with document_id and relationship_type_id
CREATE TABLE relations_types (
  relationship_id serial PRIMARY KEY,
  description VARCHAR (255) NOT NULL
);

CREATE TABLE relations (
  id serial PRIMARY KEY,
  -- WHAT IS THE RELATIONSHIP REFERRING TO? EX// COLLECTION NAME
  relation VARCHAR (255) NOT NULL,
  -- TYPE OF RELATIONSHIP? EX// ISFORMATOF
  relationship_id INT NOT NULL,
  FOREIGN KEY (relationship_id)
    REFERENCES relations_types(relationship_id),
  document_id INT NOT NULL,
  FOREIGN KEY (document_id)
    REFERENCES metadata(document_id)
);