CREATE DATABASE brokerhub;

USE brokerhub;

CREATE TABLE `3Q17_market_analytics` (
	id INT NOT NULL AUTO_INCREMENT,
	quarter varchar(10) NULL,
	inventory INT NULL,
	vacant_total INT NULL,
	available_total INT NULL,
	leasing_total INT NULL,
	leasing_ytd INT NULL,
	sales_total INT NULL,
	sales_ytd INT NULL,
	asking_rent Float(10,2) NULL,
	sale_price Float(10,2) NULL,
	PRIMARY KEY (id)
);

CREATE TABLE `3Q17_sales_comps` (
	id INT NOT NULL AUTO_INCREMENT,
	address varchar(255) NULL,
	city varchar(255) NULL,
	zip_code varchar(255) NULL,
	building_name varchar(255) NULL,
	latitude varchar(255) NULL,
	longitude varchar(255) NULL,
	square_feet INT NULL,
	building_type varchar(255) NULL,
	price_psf Float(10,2) NOT NULL,
	PRIMARY KEY (id)
)