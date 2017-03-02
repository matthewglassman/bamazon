var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "F3rmenter!",

	database: "Bamazon"
});

connection.connect(function(err){
	if (err) throw err;
	managerActions();
});

var managerActions = function(){
	inquirer.prompt({
		name: "action",
		type: "list",
		message: "What would you like to do?",
		choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
	}).then(function(answer) {

		switch(answer.action){
			case "View Products for Sale":
			listInventory();
			break;

			case "View Low Inventory":
			lowInventory();
			break;

			case "Add To Inventory":
			itemRestock();
			break;

			case "Add New Product":
			newItem();
			break;

			case "Leave System"
			connection.end();
			break;
		}
	});
};

var listInventory = function(){
	connection.query("SELECT * FROM products", function(err, products){
		if (err) throw err;
		console.table(products)
		managerActions();
	});
};

//var lowInventory = function(){};

//var itemRestor = function(){};

//var newItem = function(){};
//managerActions();