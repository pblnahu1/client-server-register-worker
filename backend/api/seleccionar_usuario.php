<?php

include 'conexion.php';
include 'access-control.php';

$idUsuario=$_GET['idUsuario'];


$query = "SELECT * FROM USUARIOS WHERE idUsuario = $idUsuario";
$res = $conn->query($query);

if($res->num_rows>0){
    $usuario = $res->fetch_assoc();
    echo json_encode(array($usuario));
}else{
    echo json_encode(array());
}

?>