<?php

include 'db_connection.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


if (isset($_POST['email']) && isset($_POST['password'])) {
    session_start();

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $email = validate($_POST['email']);
    $password = validate($_POST['password']);

    if (empty($email) || empty($password)) {
        header("location: ../Pages/Login.php?error=Email and password are required.");
        exit();
    } else {

    // Use prepared statements to prevent SQL injection
    $sql = "SELECT * FROM receptionist WHERE email = '$email' AND password = '$password'";
    $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result)) {
            echo "hellow";
            header("Location: ../index.html");
        }
    } 

    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);

    $result = mysqli_stmt_get_result($stmt);
    

    if (!$result) {
        error_log("SQL Error: " . mysqli_error($conn)); // Log the SQL error
    }
    

    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);

        if (password_verify($password, $row['password'])) {
            $_SESSION['id'] = $row['receptionist_id'];
            $_SESSION['email'] = $row['email'];
            $_SESSION['name'] = $row['name'];
            $_SESSION['surname'] = $row['surname'];
            // $_SESSION['profile'] = $row['profile_image'];
            $_SESSION['age'] = $row['age'];
            $_SESSION['gender'] = $row['gender'];
            $_SESSION['phone_number'] = $row['phone_number'];
            $_SESSION['status'] = 'Logged In';
            
            // Regenerate session ID for added security
            session_regenerate_id();
            
            header('location: ../index.php?date=' . date('D-d-M'));
            exit();
        } else {
            header("location: ../Pages/Login.php?error=Incorrect username or password, Try again.");
            exit();
        }
    } else {
        error_log("Login failed. No matching record found."); // Log the login failure
        header("location: ../Pages/Login.php?error=Invalid username or password, Try again.");
        exit();
    }
} else {
    header("location: ../index.html");
    exit();
}
?>
