<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection parameters
$db_server = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'usersdb';

// Fetching input values from the form
$first_name = filter_input(INPUT_POST, 'first_name');
$last_name = filter_input(INPUT_POST, 'last_name');
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$dob = filter_input(INPUT_POST, 'dob');
$info = filter_input(INPUT_POST, 'info');

// Establishing database connection
$conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

if ($conn) {
    echo "Connected to db<br>";

    // Prepare the SQL statement using prepared statements to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO newsletters (first_name, last_name, email, dob, info) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $first_name, $last_name, $email, $dob, $info);

    if ($stmt->execute()) {
        echo "Success: New record created successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Connection failed: " . mysqli_connect_error();
}

mysqli_close($conn);
?>
