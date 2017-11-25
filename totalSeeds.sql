USE oc_office;

CREATE TABLE `3q17 office total` (
period VARCHAR(15) NULL,
inventory BIGINT NULL,
vacant_sf BIGINT NULL,
available_sf INT NULL,
net_absorption INT NULL,
leasing_volume INT NULL,
sales_volume INT NULL,
asking_rent DECIMAL(10,2) NULL,
sales_price DECIMAL(10,2) NULL
)

SELECT * FROM `3q17 office total`;

INSERT INTO `3q17 office total` (inventory)
SELECT CAST(`Inventory SF` AS DECIMAL(10,4))
FROM `3q17 oc office airport`;

INSERT INTO `3q17 office total` (period, inventory, vacant_sf, asking_rent)
SELECT `Quarter`, CAST(`Inventory SF` AS DECIMAL), CAST(`Vacant SF Total` AS DECIMAL), CAST(`Office Gross Rent Direct` AS DECIMAL)
FROM `3q17 oc office airport`;