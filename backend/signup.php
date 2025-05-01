<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root"; 
$password = "";     
$dbname = "seniorproject";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die(json_encode(["success" => false, "message" => "Database connection failed."]));
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

$fname = $data["fname"];
$lname = $data["lname"];
$type = $data["type"];
$email = $data["email"];
$raw_password = $data["password"];

// Hash the password
$hashed_password = password_hash($raw_password, PASSWORD_BCRYPT);

// Insert into database
$sql = "INSERT INTO user (fname, lname, type, email, password) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $fname, $lname, $type, $email, $hashed_password);

if ($stmt->execute()) {
  echo json_encode(["success" => true, "message" => "User registered successfully."]);
} else {
  echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
