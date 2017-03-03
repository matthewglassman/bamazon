var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "",

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
		choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Leave Manager System"]
	}).then(function(answer) {

		switch(answer.action){
			case "View Products for Sale":
			listInventory();
			break;

			case "View Low Inventory":
			lowInventory();
			break;

			case "Add to Inventory":
			itemRestock();
			break;

			case "Add New Product":
			newItem();
			break;

			case "Leave Manager System":
			leave();
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

var lowInventory = function(){
	connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, products){
		console.table(products);
		managerActions();
	});
};

var itemRestock = function(){
	//console.log("This is running");
	connection.query("SELECT * FROM products", function(err, res){
		console.table(res);
		console.log("\n")
	});

	inquirer.prompt([{
		name: "item",
		type: "input",
		message: "Enter the ID of the item you would like to restock?"
	}, {
		name: "quantity",
		type: "input",
		message: "How many more would you like to add?"
	}]).then(function(answer){
		connection.query("SELECT * FROM products", function(err, res){ 
			var units = parseInt(answer.quantity);
			var itemID = parseInt(answer.item)-1;

		var newQuantity = res[itemID].stock_quantity + units;
		//console.log(newQuantity);
		var query = "UPDATE products SET ? WHERE ?";
		console.log(answer.item, answer.quantity);
		connection.query(query, [{stock_quantity: newQuantity}, {item_id: answer.item}], function(err, res){
			//console.log(res);
			managerActions();
		});
	});
		

	});

};

//var newItem = function(){};

var leave = function(){
	connection.end();
};
//managerActions();