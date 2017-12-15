// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
 module.exports = function(app) {

	  app.get("/api/comps", function(req, res) {
	    db.sales_comps.findAll({}).then(function(results) {
	      res.json(results);
	    });
	  });

	  app.get("/api/analytics", function(req, res) {
	    db.market_analytics.findAll({}).then(function(results) {
	      res.json(results);
	    });
	  });
}