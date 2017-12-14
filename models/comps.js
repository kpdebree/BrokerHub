// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Comps = sequelize.define("3q17_sales_comps", {
  id: {
    type: Sequelize.INT
  },
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  zip_code: {
    type: Sequelize.STRING
  },
  building_name: {
  	type: Sequelize.STRING
  },
  latitude: {
  	type: Sequelize.STRING
  },
  longitude: {
  	type: Sequelize.STRING
  },
  square_feet: {
  	type: Sequelize.INT
  },
  building_type: {
  	type: Sequelize.STRING
  },
  price_psf: {
  	type: Sequelize.FLOAT
  }
}, {
  timestamps: false
});

// Syncs with DB
Comps.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Comps;


//Activity 15 - Sequelize - 08 ORM

