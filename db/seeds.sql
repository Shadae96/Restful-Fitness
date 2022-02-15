-- CREATE TABLE user (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(50) NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     password VARCHAR(50) NOT NULL,
--     age INT NOT NULL,
--     weight INT NOT NULL,
--     height INT NOT NULL,
--     PRIMARY KEY(id)
-- );

-- commented out the user table because it is being created with the seed.js file
-- need to check that the two tables are effectively referencing each other
-- need to check why the name values are highlighted blue
-- passwords include special characters and numbers but are set to varchar is this a problem.

CREATE TABLE blog (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(300) NOT NULL,
    textarea VARCHAR(300) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id),
    REFERENCES users,
);
