<?php

$servername = "localhost";
$username = "*****";
$password = "*****";
$dbname = "*****_Businesses";

$evReference = $_GET['REFERENCE'];

function getEventOne(){ 
    
	global $servername, $username, $password, $dbname, $evReference;
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = "SELECT `LATITUDE`, `LONGITUDE`, `NAME` FROM `BUSINESSES` where `REFERENCE` = '" . $evReference . "'";
	$result = $conn->query($sql);
	$rows = array();
	
	if ($result->num_rows > 0) {
		// output data of each row
		while($row = $result->fetch_assoc()) {
			$rows[] = $row;
		}
	} else {
		//echo "0 results" . "<br>";
	}
echo json_encode($rows, JSON_FORCE_OBJECT);
	$conn->close();
}

getEventOne();

?>
