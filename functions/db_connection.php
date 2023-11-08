<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpassword = "";
$dbname = "ChiroHealthDB";

$conn = new mysqli($dbhost, $dbuser, $dbpassword, $dbname);

if($mysqli -> connect_error){
    echo 'Failed to connect to Database: ' . $mysqli -> connect_error;
    exit();
}

?>