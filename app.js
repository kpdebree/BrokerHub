var Excel = require('exceljs');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var inquirer = require('inquirer')
var password = require('./password')
var fs = require('fs');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root',

	password: password || 'root',
	database: 'brokerhub'
});

connection.connect(function(err) {
	if(err) throw err;
	console.log("Connected");
	startMenu();
});

function startMenu() {
	inquirer
		.prompt({
			name: "BrokerHub",
			type: "list",
			message: "Welcome to BrokerHub",
			choices: ["Read Analytics File", "Read Comps", "Upload Analytics", "Upload Comps", "Quit"]
		})
			.then(function(answer) {
				switch (answer.BrokerHub) 
				{
					case "Read Analytics File":
						readAnalytics();
					break;
					case "Read Comps":
						readComps();
					break;
					case "Upload Analytics":
						uploadAnalytics();
					break;

					case "Upload Comps":
						uploadComps();
					break;

					case "Quit":
						quitApplication();
					break;

			}
		})
}

function readAnalytics() {
	var inboundWorkbook = new Excel.Workbook();
	inboundWorkbook.xlsx.readFile('3Q17_market_analytics.xlsx').then(function() {
		var inboundWorksheet = inboundWorkbook.getWorksheet(1);
		var headers = [];
		var headerRow = inboundWorksheet.getRow(1);
		headerRow.eachCell({ includeEmpty: true}, function(cell, colNumber) {
				console.log("Column " + colNumber + ": " + cell.value)
				headers[colNumber] = cell.value
		})
		console.log("Headers: " + headers)

		for (var i = 1; i <= inboundWorksheet._rows.length; i ++) {
			var rawRow = inboundWorksheet.getRow(i);
				rawRow.eachCell({ includeEmpty: true}, function(cell, colNumber) {
						console.log(headers[colNumber] + " " + i + ": " + cell.value)
				})
		}


	startMenu();
	});
}

function readComps() {
	var inboundCompbook = new Excel.Workbook();
	inboundCompbook.xlsx.readFile('3Q17_sales_comps.xlsx').then(function() {
		var inboundCompsheet = inboundCompbook.getWorksheet(1);
		var headers = [];
		var headerRow = inboundCompsheet.getRow(1);
		headerRow.eachCell({ includeEmpty: true}, function(cell, colNumber) {
				console.log("Column " + colNumber + ": " + cell.value)
				headers[colNumber] = cell.value
		})
		console.log("Headers: " + headers)

		for (var i = 1; i <= inboundCompsheet._rows.length; i ++) {
			var rawRow = inboundCompsheet.getRow(i);
				rawRow.eachCell({ includeEmpty: true}, function(cell, colNumber) {
						console.log(headers[colNumber] + " " + i + ": " + cell.value)
				})
		}
		startMenu();
	});
}

function uploadAnalytics() {
	var inboundWorkbook = new Excel.Workbook();
	inboundWorkbook.xlsx.readFile('3Q17_market_analytics.xlsx').then(function() {
		var inboundWorksheet = inboundWorkbook.getWorksheet(1);
		var outboundJSON = [];
		for (var i = 2; i <= inboundWorksheet._rows.length; i ++) {
			var rawRow = inboundWorksheet.getRow(i);
			var rowConstructor = {};
			rawRow.eachCell({ includeEmpty: true }, function(cell, colNumber) {
    				switch (colNumber) {
    					case 1:
    						rowConstructor.quarter = cell.value;
    					break;
    					case 2:
    						rowConstructor.inventory = parseInt(cell.value);
    					break;
    					case 3:
    						rowConstructor.vacant = parseInt(cell.value);
    					break;
    					case 4:
    						rowConstructor.available = parseInt(cell.value);
    					break;
    					case 5:
    						rowConstructor.leasing = parseInt(cell.value);
    					break;
    					case 6:
    						rowConstructor.sales = parseInt(cell.value);
    					break;
    					case 7:
    						rowConstructor.rent = parseFloat(cell.value);
    					break;
    					case 8:
    						rowConstructor.price = parseFloat(cell.value);
    					break;
    				}
    				
			});
			outboundJSON.push(rowConstructor)

		}
		for (var i = 0; i < outboundJSON.length; i++) {
			connection.query(
				"INSERT INTO `3Q17_market_analytics` SET ?",
				[
				{
					quarter: outboundJSON[i].quarter,
					inventory: outboundJSON[i].inventory,
					vacant_total: outboundJSON[i].vacant,
					available_total: outboundJSON[i].available,
					leasing_total: outboundJSON[i].leasing,
					sales_total: outboundJSON[i].sales,
					asking_rent: outboundJSON[i].rent,
					sale_price: outboundJSON[i].price
				}
				],
				function(error) {
					console.log("Row " + i + " Added");
				}
			)

		}
		
		startMenu();
	});
	
}


function uploadComps() {
	console.log("Test")
	var inboundCompbook = new Excel.Workbook();
	inboundCompbook.xlsx.readFile('3Q17_sales_comps.xlsx').then(function() {
		var inboundCompsheet = inboundCompbook.getWorksheet(1);
		var outboundJSON = [];
		for (var i = 2; i <= inboundCompsheet._rows.length; i ++) {
			var rawRow = inboundCompsheet.getRow(i);
			var rowConstructor = {};
			rawRow.eachCell({ includeEmpty: true }, function(cell, colNumber) {
    				switch (colNumber) {
    					case 1:
    						rowConstructor.address = String(cell.value);
    					break;
    					case 2:
    						rowConstructor.city = String(cell.value);
    					break;
    					case 3:
    						rowConstructor.zipcode = String(cell.value);
    					break;
    					case 4:
    						rowConstructor.buildingname = String(cell.value);
    					break;
    					case 5:
    						rowConstructor.latitude = cell.value;
    					break;
    					case 6:
    						rowConstructor.longitude = cell.value;
    					break;
    					case 7:
    						rowConstructor.squarefeet = parseInt(cell.value);
    					break;
    					case 8:
    						rowConstructor.type = String(cell.value);
    					break;
    					case 9:
    						rowConstructor.price = parseFloat(cell.value);
    					break;
    				}
    				
			});
			outboundJSON.push(rowConstructor)
		}
		for (var i = 0; i < outboundJSON.length; i++) {
			console.log("Row " + i + ": " + outboundJSON[i].address)
		}
		for (var i = 0; i < outboundJSON.length; i++) {
			connection.query(
				"INSERT INTO `3Q17_sales_comps` SET ?",
				[
				{
					address: outboundJSON[i].address,
					city: outboundJSON[i].city,
					zip_code: outboundJSON[i].zipcode,
					building_name: outboundJSON[i].buildingname,
					latitude: outboundJSON[i].latitude,
					longitude: outboundJSON[i].longitude,
					square_feet: outboundJSON[i].squarefeet,
					building_type: outboundJSON[i].type,
					price_psf: outboundJSON[i].price
				}
				],
				function(error) {
					console.log(error)
					// console.log("Row " + i + " Added");
				}
			)

		}
		
		startMenu();
	});
}


function quitApplication() {
	console.log("Quitting...");
	connection.end();
}