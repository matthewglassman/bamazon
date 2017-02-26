CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
item_id INTEGER (100) AUTO_INCREMENT NOT NULL,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (40) NOT NULL,
price DECIMAL (4, 2) NOT NULL,
stock_quantity INTEGER (4) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (