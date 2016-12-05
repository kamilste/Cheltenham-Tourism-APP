
<?php


$servername = "localhost";
$username = "s1206852";
$password = "Afghan55";
$dbname = "s1206852_Businesses";

function getEventList(){ 
    
	global $servername, $username, $password, $dbname;
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	$sql = "SELECT * FROM `BUSINESS_TYPE`";
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

getEventList();

?>





