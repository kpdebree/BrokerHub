CREATE DATABASE oc_retail_DB;

USE oc_retail_DB;

CREATE TABLE 3Q17_airport (
	quarter varchar(10) NOT NULL,
	inventory INT NULL,
	vacant_total INT NULL,
	available_total INT NULL,
	leasing_total INT NULL,
	leasing_ytd INT NULL,
	sales_total INT NULL,
	sales_ytd INT NULL,
	asking_rent DECIMAL(10,2) NULL,
	sales_price DECIMAL(10,2) NULL,
	PRIMARY KEY (quarter)
);