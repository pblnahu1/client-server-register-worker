<?php 

include 'conexion.php';
include 'access-control.php';
header('Content-Type: application/json');

$query = "SELECT * FROM USUARIOS";
$res = $conn->query($query);

$datos = array();

while($row = $res->fetch_assoc()){
    $datos[]=$row;
}

echo json_encode($datos);

?>