var Excel = require('exceljs')
var csvparser = require('csv-parser');
var fs = require('fs');


var inboundWorkbook = new Excel.Workbook();
inboundWorkbook.xlsx.readFile('Test Sheet.xlsx').then(function() {
	var inboundWorksheet = inboundWorkbook.getWorksheet(1);
	inboundWorksheet.eachRow({ includeEmpty: true}, function(row, rowNumber) {
		console.log("Row " + rowNumber + ": " + JSON.stringify(row.values));
	});
});