<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>
    
    <!-- <div class="button-container">
        <a href="../index.html"><div class="nav-button"  name="Home"><li>Home</li></a></div>
        <a href="Trips.html"><div class="nav-button" name="Trips"><li>Trips</li></a></div>
        <a href="Tickets.html"><div class="nav-button" name="Tickets"><li>Tickets</li></a></div>                    
</div> -->
<!--button-container--->

<!-- <a href="Tickets.html"><div class="trolley-ui"></div></a>
</div> -->
<!-- nav-bar   -->


<div class="main_container">
    <div class="inner_container">
        <div class="left">
            <div class="logo"></div>
        </div>
        <div class="right">
            <div class="inner_right_container">
                
                <div class="intro_container">
                    <h1 class="login_heading">Login</h1>
                    <p class="intro_login_text">Welcome back please login to your account</p>
                </div>

                <form method="post" action="../functions/userLogin.php" class="form_container">
                    <?php

                // Display error details about login attempt
                if (isset($_GET['error'])) {
                    echo '<div class="login_error_display">' . $_GET['error'] . '</div>';
                }
                ?>
                    <input name="email" class="email_input" type="email" placeholder="Email">
                <div class="spacer"></div>
          
                    <input name="password" class="email_input" type="password" placeholder="Password">

                    <p class="forgot_pass">Forgot Password?</p>

                    <button type="submit" class="login_btn">Login</button>
                    
                </form>
                

                <p class="new_user_text">New User?</p>
                <a href="Register.html" class="signup_link">Sign up</a>

            </div>
        </div>
    </div>
</div>


<!-- <div class="main_container">
    <form>
        <input placeholder="Name"
    </form>

</div> -->


</body>
</html>