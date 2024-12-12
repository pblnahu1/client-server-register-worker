<?php

include 'conexion.php';
include 'access-control.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata); // transformo json recibido en un objeto php
date_default_timezone_set('America/Argentina/Buenos_Aires');

if(isset($postdata) && !empty($postdata)){
    $nombre = $conn->real_escape_string($request->nombre);
    $telefono = $conn->real_escape_string($request->telefono);
    $email = $conn->real_escape_string($request->email);
    $puesto = $conn->real_escape_string($request->puesto);
    $estado = $conn->real_escape_string($request->estado);
    $fecha_registro = date('Y-m-d H:i:s');
    $fecha_actualizacion = date('Y-m-d H:i:s');
    
    if(!empty($nombre) && !empty($telefono) && !empty($email) && !empty($puesto) && !empty($estado)){
        $query = "INSERT INTO USUARIOS (nombre, telefono, email, puesto, estado, fecha_registro, fecha_actualizacion) VALUES ('$nombre', '$telefono', '$email', '$puesto', '$estado', '$fecha_registro', '$fecha_actualizacion')";
    }

    if($conn->query($query)){
        echo json_encode(array("resultado" => "OK", "mensaje" => "Usuario agregado correctamente."));
    }else{
        echo json_encode(array("resultado" => "ERROR", "mensaje" => "Error al agregar usuario."));
    }
}

?>