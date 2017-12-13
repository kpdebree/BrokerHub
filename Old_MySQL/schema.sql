CREATE DATABASE oc_retail_DB;

USE oc_retail_DB;

CREATE TABLE 3Q17_airport (
	row_id INT NOT NULL AUTO_INCREMENT,
	'Quarter' varchar(10) NOT NULL,
	'Inventory' INT NULL,
	'Vacant Total' INT NULL,
	'Available Total' INT NULL,
	'Leasing Total' INT NULL,
	'Leasing YTD' INT NULL,
	'Sales Total' INT NULL,
	'Sales YTD' INT NULL,
	'Asking Rent' DECIMAL(10,2) NULL,
	'Sales Price' DECIMAL(10,2) NULL,
	PRIMARY KEY (row_id)
);