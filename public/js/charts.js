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

    console.log(quarters);
    console.log(vacancy);
    console.log(leasing);
    console.log(sales);
    console.log(rents);
    console.log(prices);

    var data1 = document.getElementById("chart-1").getContext("2d");

    var Chart1 = new Chart(data1, {
    type: 'bar',
    data: {
        labels: quarters,
        datasets: [{
            label: 'Leasing',
            data: leasing,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

}






$(document).ready(function() { 

    console.log("test")
    getData();
  
});

