<?php 

include 'conexion.php';
include 'access-control.php';

$idUsuario = $_GET['idUsuario'];

$query = "DELETE FROM USUARIOS WHERE idUsuario = $idUsuario";

if($conn->query($query)){
    echo json_encode(array("resultado" => "OK", "mensaje" => "Usuario eliminado correctamente."));
}else{
    echo json_encode(array("resultado" => "ERROR", "mensaje" => "Error al eliminar usuario"));
}

?>