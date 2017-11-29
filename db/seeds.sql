DROP TABLE burgers;
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT 0,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
);

INSERT INTO burgers(name) VALUES ("Bourbon Bacon Burger");
INSERT INTO burgers(name) VALUES ("Truffle Burger");
INSERT INTO burgers(name) VALUES ("Spicy Deluxe Chicken Sandwich");
INSERT INTO burgers(name) VALUES ("Animal Burger");
INSERT INTO burgers(name) VALUES ("Manly Burger");