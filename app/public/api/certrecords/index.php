<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM certifications_records';
$vars = [];

if (isset($Get['cert_recordID'])) {
  $sql = 'SELECT * FROM certifications_records WHERE cert_recordID = ?';
  $vars = [ $_GET['cert_recordID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certifications_records = $stmt->fetchAll();

$json=json_encode($certifications_records, JSON_PRETTY_PRINT);

Header('Content-Type: application/json');
echo $json;
