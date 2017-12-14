// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Comps = require("../models/comps.js");

// Routes
// =============================================================
 module.exports = function(app) {

	  app.get("/api/comps", function(req, res) {
	    Comps.findAll({}).then(function(results) {
	      res.json(results);
	    });
	  });
}

 module.exports = function(app) {

	  app.get("/api/analytics", function(req, res) {
	    Comps.findAll({}).then(function(results) {
	      res.json(results);
	    });
	  });
}