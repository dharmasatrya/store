<?php
    // Enable error reporting for debugging
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    // Database connection parameters
    $db_server = 'localhost';
    $db_user = 'root';
    $db_pass = '';
    $db_name = 'usersdb';

    // Fetching input values
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $password = filter_input(INPUT_POST, 'password');

    // Establishing database connection
    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

    if ($conn) {
        echo "Connected to db<br>";

        // Prepare the SQL statement
        $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

        // Execute the SQL statement
        if ($conn->query($sql) === TRUE) {
            echo "Success: New record created successfully.";
        } else {
            // Print error if the insert fails
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Connection failed: " . mysqli_connect_error();
    }

    // Close the database connection
    mysqli_close($conn);
?>
