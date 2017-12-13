<?php
require("connect.php");

// Select all the rows in the markers table
$query = "SELECT * FROM markers WHERE 1";
$result = $db -> query($query);
if (!$result) {
  die('Invalid query: ' . $db -> connect_error);
}

$rows = $result -> fetch_all();
$json_array = json_encode($rows);
echo '<script>var locations = ' . json_encode($rows) . ';</script>'; 
