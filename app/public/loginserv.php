<?php
require common.php
$error='';
if(isset($_POST['submit'])){
  if(empty($_POST['user']) || empty($_POST['pass'])){
    $error = "Username or Password is Invalid";
  }
  else
  {
    $user=$_POST['user'];
    $pass=$_POST['pass'];
    $db = DbConnection::getConnection();
    $query = "SELECT * FROM users WHERE password='$pass' AND username='$user'";
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
