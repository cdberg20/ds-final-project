<?php

require 'common.php';


// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// As part of this step, create a new GUID to use as primary key (suitable for cross-system use)
// If we weren't using a GUID, allowing auto_increment to work would be best (don't pass `id` to `INSERT`)
// $guid = Uuid::uuid4()->toString(); // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'UPDATE members SET first_name = ?, last_name = ?, street = ?, city = ?, zip = ?, date_of_birth = ?, start_date = ?, is_active = ?, gender = ?, position = ?, radio_number = ?, station_num = ?, phone = ?, email = ? WHERE memberID = ?'

);

$stmt->execute([
  $_POST['memberID'],
  $_POST['first_name'],
  $_POST['last_name'],
  $_POST['street'],
  $_POST['city'],
  $_POST['zip'],
  $_POST['date_of_birth'],
  $_POST['start_date'],
  $_POST['is_active'],
  $_POST['gender'],
  $_POST['position'],
  $_POST['radio_number'],
  $_POST['station_num'],
  $_POST['phone'],
  $_POST['email']
]);

$members=$stmt->fetchAll();
$json=json_encode($members, JSON_PRETTY_PRINT);

// If needed, get auto-generated PK from DB
// $pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../members/');
echo json;
