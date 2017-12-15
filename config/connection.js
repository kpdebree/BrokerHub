var mysql = require("mysql");
var password = require("../password")

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: password,
	database: "brokerhub"
});

connection.connect(function(err) {
	if(err) {
		console.error("error connection: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;