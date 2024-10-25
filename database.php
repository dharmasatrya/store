<?php
    $db_server = 'localhost';
    $db_user = 'root';
    $_pass = '';
    $db_name = 'usersdb';
    $conn = '';

    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

    if($conn){
        echo"Connected to db";
    }else{
        echo"Connection failed";
    }
?>