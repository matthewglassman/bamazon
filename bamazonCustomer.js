var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "",
	database: "bamazonproducts"
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
});