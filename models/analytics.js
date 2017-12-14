// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Analytics" model that matches up with DB
var Analytics = sequelize.define("3q17_market_analytics", {
  id: {
    type: Sequelize.INT
  },
  quarter: {
    type: Sequelize.STRING
  },
  inventory: {
    type: Sequelize.INT
  },
  vacant_total: {
    type: Sequelize.INT
  },
  available_total: {
  	type: Sequelize.INT
  },
  leasing_total: {
  	type: Sequelize.INT
  },
  leasing_ytd: {
  	type: Sequelize.INT
  },
  sales_total: {
  	type: Sequelize.INT
  },
  sales_ytd: {
  	type: Sequelize.INT
  },
  asking_rent: {
  	type: Sequelize.FLOAT
  },
  sales_price: {
    type: Sequelize.FLOAT
  }
}, {
  timestamps: false
});

// Syncs with DB
Analytics.sync();

// Makes the Analytics Model available for other files (will also create a table)
module.exports = Analytics;


//Activity 15 - Sequelize - 08 ORM

