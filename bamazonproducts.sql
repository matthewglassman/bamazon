CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
item_id INTEGER (100) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (40) NOT NULL,
price DECIMAL (6, 2) NOT NULL,
stock_quantity INTEGER (4) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bed Sheets", "Home/Kitchen", 17.50, 50),
	   ("DVD", "Electronics", 26.96, 100),
	   ("Poster", "Home/Kitchen", 18.25, 150),
	   ("Moisturizer", "Health/Beauty", 10.15, 40),
	   ("Baseball Hat", "Clothing", 20.00, 15),
	   ("Blouse", "Clothing", 45.00, 200),
	   ("Electric Toothbrush", "Health/Beauty", 48.50, 55),
	   ("Food Container Set", "Home/Kitchen", 38.65, 76),
	   ("Legal Pad", "Office/School", 7.90, 225),
	   ("Digital Camera", "Electronics", 1830.85, 125),
	   ("Men's Fedora", "Clothing", 60.00, 10);