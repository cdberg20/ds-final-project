<?php
$error='';
if(isset($_POST['submit'])){
  if(empty($_POST['user']) || empty($_POST['pass'])){
    $error = "Username or Password is Invalid";
  }
  else
  {
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $conn = mysqli_connect("database-practice.ccof2wosc4jl.us-east-1.rds.amazonaws.com", "practiceadmin", "Password123");
    $db = mysqli_select_db($conn, 'PRACTICE3_DS_PROJECT');
    $query = mysqli_query($conn,"SELECT * FROM users WHERE userpassword='$pass' AND username='$user'");
    $rows = mysqli_num_rows($query);
    if($rows == 1){
      header("Location: index.html");
    }
    else {
      $error = "Username or Password is Invalid";
    }
    mysqli_close($db);
    }

  }

 ?>
