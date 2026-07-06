<?php
$host = "sql206.infinityfree.com";
$dbname = "if042300926_wp950";
$user = "if0_42300926";
$pass = "f0DPy9irC1hdki";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
