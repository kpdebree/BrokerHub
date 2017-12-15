// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
module.exports = function(sequelize, Datatypes) {
  var Comps = sequelize.define("sales_comps", {
    address: {
      type: Datatypes.STRING
    },
    city: {
      type: Datatypes.STRING
    },
    zip_code: {
      type: Datatypes.STRING
    },
    building_name: {
    	type: Datatypes.STRING
    },
    latitude: {
    	type: Datatypes.STRING
    },
    longitude: {
    	type: Datatypes.STRING
    },
    square_feet: {
    	type: Datatypes.INTEGER
    },
    building_type: {
    	type: Datatypes.STRING
    },
    price_psf: {
    	type: Datatypes.FLOAT
    }
  }, {
    timestamps: false
  });

return Comps;
}

