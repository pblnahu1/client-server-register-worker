<?php

include 'conexion.php';
include 'access-control.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata); // transformo json recibido en un objeto php
date_default_timezone_set('America/Argentina/Buenos_Aires');

if(isset($postdata) && !empty($postdata)){
    $idUsuario = $conn->real_escape_string($request->idUsuario);
    $nombre = $conn->real_escape_string($request->nombre);
    $telefono = $conn->real_escape_string($request->telefono);
    $email = $conn->real_escape_string($request->email);
    $puesto = $conn->real_escape_string($request->puesto);
    $estado = $conn->real_escape_string($request->estado);
    $fecha_actualizacion = date('Y-m-d H:i:s');

    if(empty($nombre) || empty($telefono) || empty($email) || empty($puesto) || empty($estado)){
        echo json_encode(array("resultado" => "ERROR", "mensaje" => "No puedes dejar campos vacíos. Todos los campos son obligatorios."));
        exit;
    }

    /*$queryCheckEmail = "SELECT idUsuario FROM USUARIOS WHERE email='$email' AND idUsuario!=$idUsuario";
    $resultadoEmail = $conn->query($queryCheckEmail);

    $queryCheckTelefono = "SELECT idUsuario FROM USUARIOS WHERE telefono='$telefono' AND idUsuario!=$idUsuario";
    $resultadoTelefono = $conn->query($queryCheckTelefono);

    if($resultadoEmail->num_rows>0){
        echo json_encode(array("resultado" => "ERROR", "mensaje" => "Ya existe un usuario con este mismo correo electrónico."));
        exit;
    }

    if($resultadoTelefono->num_rows>0){
        echo json_encode(array("resultado" => "ERROR", "mensaje" => "Ya existe un usuario con este mismo número de teléfono."));
        exit;
    }*/

    $query = "UPDATE USUARIOS SET nombre='$nombre', telefono='$telefono', email='$email', puesto='$puesto', estado='$estado', fecha_actualizacion='$fecha_actualizacion' WHERE idUsuario=$idUsuario";

    if($conn->query($query)){
        echo json_encode(array("resultado" => "OK", "mensaje" => "Usuario actualizado correctamente."));
    }else{
        echo json_encode(array("resultado" => "ERROR", "mensaje" => "Se produjo un error al editar el usuario."));
    }
}

?>