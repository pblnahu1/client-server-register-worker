<?php

include 'access-control.php';

$host = "localhost";
$user = "root";
$password = "";
$dbname = "my_crud_angular";

$conn = new mysqli($host, $user, $password, $dbname);
if($conn->connect_error) {
    die(json_encode(array("resultado"=>"ERROR","mensaje"=>"Error en la conexión...")));
}
?>