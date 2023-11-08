<?php

include 'db_connection.php';

header("Access-Control-Allow-Origin: *");
// permission update CORS

header("Access-Control-Allow-Header: *");

$REQUEST_BODY = file_get_contents('php://input');
$data = json_decode($REQUEST_BODY);

$name = $data->name;
$surname = $data->surname;
$username = $data->username;
$email = $data->email;
$age = $data->age;
$gender = $data->gender;
$phone = $data->phone;
$rank = $data->rank;
$password = $data->password;

echo ($names . " " .  $email);

$sql = "INSERT INTO receptionist(receptionist_id, name, surname, username, email, profile_image, age, gender, phone_number, rank, doctor_id) VALUES ('', '$name', '$surname', '$username', '$email', '$profile_image' ,'$age','$gender','$phone_number','$rank','$doctor_id')";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo("Error Description: " . mysqli_error($conn));
} else {
    echo("All is Good! Added User!");
}


?>