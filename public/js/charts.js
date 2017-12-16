var analytics;
var quarters = [];
var vacancy = [];
var leasing = [];
var sales = [];
var rents = [];
var prices = [];


function getData() {
    $.get("/api/analytics", function(data) {
        // console.log(data);
        analytics = data;
        prepData(analytics);
        console.log("Length: " + analytics.length)
        
    })
};

function prepData(charts) {

    for (var i = 0; i < charts.length; i++) {
        var quarter = charts[i].quarter;
        quarters.push(quarter);
        var vacancy_rate = charts[i].vacant_total / charts[i].inventory;
        vacancy.push(vacancy_rate);
        var lease = charts[i].leasing_total;
        leasing.push(lease);
        var sale = charts[i].sales_total;
        sales.push(sale);
        var rent = charts[i].asking_rent;
        rents.push(rent);
        var price = charts[i].sale_price;
        prices.push(price);

    }

    console.log(quarters)
    console.log(leasing);
    console.log(sales);
    console.log(rents);
    console.log(prices);
}

// function drawLineChart() {

//   // Add a helper to format timestamp data
//   Date.prototype.formatMMDDYYYY = function() {
//       return (this.getMonth() + 1) +
//       "/" +  this.getDate() +
//       "/" +  this.getFullYear();
//   }

//   var jsonData = $.ajax({
//     url: 'http://d.microbuilder.io:8080/test/temp',
//     dataType: 'json',
//   }).done(function (results) {

//     // Split timestamp and data into separate arrays
//     var labels = [], data=[];
//     results["packets"].forEach(function(packet) {
//       labels.push(new Date(packet.timestamp).formatMMDDYYYY());
//       data.push(parseFloat(packet.payloadString));
//     });

//     // Create the chart.js data structure using 'labels' and 'data'
//     var tempData = {
//       labels : labels,
//       datasets : [{
//           fillColor             : "rgba(151,187,205,0.2)",
//           strokeColor           : "rgba(151,187,205,1)",
//           pointColor            : "rgba(151,187,205,1)",
//           pointStrokeColor      : "#fff",
//           pointHighlightFill    : "#fff",
//           pointHighlightStroke  : "rgba(151,187,205,1)",
//           data                  : data
//       }]
//     };

//     // Get the context of the canvas element we want to select
//     var ctx = document.getElementById("myChart").getContext("2d");

//     // Instantiate a new chart
//     var myLineChart = new Chart(ctx).Line(tempData);
//   });
// }

$(document).ready(function() { 

    console.log("test")
    getData();
  
});

