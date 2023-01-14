CREATE DATABASE all_animals;
USE all_animals;
CREATE TABLE animals (
    id integer PRIMARY KEY AUTO_INCREMENT,
    animal_name VARCHAR(255) NOT NULL,
    species TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO animals (animal_name,species)
VALUES
('Kulka','Rabbit'),
('Nitka','Bat');