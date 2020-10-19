<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM certifications';
$vars = [];

if (isset($Get['certID'])) {
  $sql = 'SELECT * FROM certifications WHERE certID = ?';
  $vars = [ $_GET['certID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certifications = $stmt->fetchAll();

$json=json_encode($certifications, JSON_PRETTY_PRINT);

Header('Content-Type: application/json');
echo $json;
