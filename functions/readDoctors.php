<?php

include 'scripts/db_connection.php';

$sql = "SELECT * FROM doctors;";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

if($resultCheck > 0){
    
    while($row = mysqli_fetch_assoc($result)){

        echo "
        
        <p><strong>id: </strong>". $row['doctor_id'] ."</p>

        <p><strong>Name: </strong> ". $row['name']." </p>

        <p><strong>Surname: </strong>". $row['surname']."</p>

        <p><strong>Age: </strong>". $row['age']."</p>

        <p><strong>Gender: </strong>". $row['gender']."</p>

        <p><strong>phone number: </strong>". $row['phone_number']."</p>

        <p><strong>Email: </strong>". $row['email']."</p>

        <p><strong>Room Number: </strong>". $row['room_number']."</p>

        <p><strong>specialisation: </strong>". $row['Specilisation']."</p>

    

        <p><strong>profile_image: </strong>". $row['profile_image']."</p>
        ";
    }


} else {
    
    echo "<h1>No Data Found</h1>";
}



?>