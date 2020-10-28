<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT * FROM certifications_records, members, certifications
Where certifications.certID = certifications_records.certID and certifications_records.memberID = members.memberID and certifications_records.expiration < current_date();';
$vars = [];

if (isset($Get['memberID'])) {
  $sql = 'SELECT * from certifications_records, members, certifications
Where certifications.certID = certifications_records.certID and certifications_records.memberID = members.memberID and certifications_records.expiration < current_date();';
  $vars = [ $_GET['memberID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$members = $stmt->fetchAll();

$json=json_encode($members, JSON_PRETTY_PRINT);

Header('Content-Type: application/json');
echo $json;
