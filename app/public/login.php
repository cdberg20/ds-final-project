<?php
include("loginserv.php");
?>

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Login</title>
</head>
<body>
  <div class = "login">
    <h1 align='center'>Login</h1>
    <form action="" method="post" style="text-align:center;">
      <input type="text" placeholder="Username" id="user" name="user"><br/><br/>
      <input type="text" placeholder="Password" id="password" name="password"><br/><br/>
      <input type="submit" value="Login" name="submit">
    <span><?php echo $error; ?></span>
    </body>
    </html>
