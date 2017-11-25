SELECT * FROM `3q17 oc office airport sales`;

SELECT `Building SF` FROM `3q17 oc office airport sales` WHERE `Period` = '2017 - Q3';

SET SQL_SAFE_UPDATES = 0;

UPDATE `3q17 oc office airport sales`
SET `Period` = REPLACE(`Period`, '-', '');

SET SQL_SAFE_UPDATES = 1;
