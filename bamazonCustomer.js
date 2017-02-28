var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "",
	database: "Bamazon"
});

//test connection
connection.connect(function(err){
	if (err) throw err;
	console.log("Connected as id " + connection.threadId);
});

//test selecting and showing all data from querying Products table
connection.query("SELECT * FROM products", function(err, res){
	if (err) throw err;
	console.log(res);

connection.end();
});

//Begin Actual Program
var consumerStart = function(){
	connection.query("SELECT * FROM products", function(err, products){
		if (err) throw err;
		console.log(products);
	});

	//Run inquirer module to pose two questions to the the Buy or Leave
	inquirer.prompt({
		name:"BuyOrLeave",
		type: "rawlist",
		message: "Would you like to [Buy Something] or [Leave]?",
		choices: ["Buy Something", "Leave"]
	}).then(function(answer){
		if (answer.BuyOrLeave.toLowerCase() === "leave"){
			leaveStore();
		}
		else{
			goShopping();
		}
	});
};

var leaveStore = function(){
	console.log("Thanks for stopping by. Come again soon!");
	connection.end();
};

var goShopping = function(){
	//User inquirer to ask two questions. 1. What is the ID of hte product to buy and 2. How many units would they like to buy.
	connection.query("SELECT * FROM products", function(err, products){
		console.log(products);
		inquirer.prompt({
			name: "items"
			type: "rawlist"
			choices: function(value){
				var productArray = [];
				for (var i = 0; i < products.length; i++){
					productArray.push(products[i].item_id),
								.push(products[i].product_name),
								.push(products[i].price),
								.push(products[i].stock_quantity);
				}
				return productArray;
			},
			message: "What product would you like to buy?"
		}).then(function(product){
			for (var i = 0; i < products.length; i++){
				if (products[i].item_id === product.choice){
					var chosenProduct = products[i];
					inquirer.prompt({
						name: "quantity",
						type: "input",
						message: "How many would you like?"
					}).then(function())  //build what should happen if amount of item requested is not in stock and what should happen if it is.
				}
			}
		})
	}
}