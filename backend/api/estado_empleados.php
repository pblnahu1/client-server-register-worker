<?php 

include 'conexion.php';
include 'access-control.php';
header('Content-Type: application/json');

$query = "SELECT COUNT(*) AS total_empleados, SUM(CASE WHEN estado='ONLINE' THEN 1 ELSE 0 END) AS empleados_online FROM USUARIOS";

$res = $conn->query($query);

if($res->num_rows>0){
    $data=$res->fetch_assoc();
    $total_empleados=$data['total_empleados'];
    $empleados_online=$data['empleados_online'];

    $porcentaje_online = ($total_empleados>0) ? ($empleados_online / $total_empleados) * 100 : 0;

    echo json_encode([
        'totalEmpleados'=>$total_empleados,
        'empleadosOnline'=>$empleados_online,
        'porcentajeOnline'=>round($porcentaje_online,2)
    ]);
}else{
    echo json_encode(["error"=>"No se encontraron datos"]);
}

?>