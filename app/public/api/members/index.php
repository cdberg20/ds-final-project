<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM members';
$vars = [];

if (isset($Get['memberID'])) {
  $sql = 'SELECT * FROM members WHERE memberID = ?';
  $vars = [ $_GET['memberID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

$json=json_encode($members, JSON_PRETTY_PRINT);

Header('Content-Type: application/json');
echo $json;



 ?>
