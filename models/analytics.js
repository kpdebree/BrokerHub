// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Analytics" model that matches up with DB

module.exports = function(sequelize, Datatypes) {
  var Analytics = sequelize.define("market_analytics", {
    quarter: {
      type: Datatypes.STRING
    },
    inventory: {
      type: Datatypes.INTEGER
    },
    vacant_total: {
      type: Datatypes.INTEGER
    },
    available_total: {
    	type: Datatypes.INTEGER
    },
    leasing_total: {
    	type: Datatypes.INTEGER
    },
    leasing_ytd: {
    	type: Datatypes.INTEGER
    },
    sales_total: {
    	type: Datatypes.INTEGER
    },
    sales_ytd: {
    	type: Datatypes.INTEGER
    },
    asking_rent: {
    	type: Datatypes.FLOAT
    },
    sale_price: {
      type: Datatypes.FLOAT
    }
  }, {
    timestamps: false
  });

return Analytics;

};

