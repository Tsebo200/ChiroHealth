<?php

include 'db_connection.php';

// 

$selectedPatient = $_POST['selectedUser'];

$sql = "SELECT * FROM patients WHERE name = '$selectedPatient';";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

if($resultCheck > 0){

    while($row = mysqli_fetch_assoc($result)){

        if(empty($_POST['name'])){
            $name = $row['name'];
        } else {
            $name = $row['name'];
        }

        if(empty($_POST['name'])){
            $name = $row['name'];
        } else {
            $name = $row['name'];
        }

        if(empty($_POST['name'])){
            $name = $row['name'];
        } else {
            $name = $row['name'];
        }

$sql2 = "UPDATE patients SET, name='$name';";

    }
} else {
    echo "There are no users with that name";
}

?>