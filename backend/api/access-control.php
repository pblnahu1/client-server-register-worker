<?php 

// Configuro CORS para que Angular haga peticiones al servidor PHP desde el dominio que le paso

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type");

?>