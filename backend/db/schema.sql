
CREATE DATABASE IF NOT EXISTS my_crud_angular;
USE my_crud_angular;

CREATE TABLE IF NOT EXISTS USUARIOS (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    telefono VARCHAR(15),
    email VARCHAR(100)
);

ALTER TABLE USUARIOS
ADD COLUMN puesto VARCHAR(50) NOT NULL AFTER email,
ADD COLUMN estado ENUM('ONLINE', 'OFFLINE') DEFAULT 'OFFLINE' AFTER puesto,
ADD COLUMN fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP AFTER estado,
ADD COLUMN fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP AFTER fecha_registro;




-- codigo create sacado del sgbd
CREATE TABLE `usuarios` (
	`idUsuario` INT(11) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`telefono` VARCHAR(15) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`email` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`puesto` VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`estado` ENUM('ONLINE','OFFLINE') NULL DEFAULT 'OFFLINE' COLLATE 'utf8mb4_general_ci',
	`fecha_registro` TIMESTAMP NULL DEFAULT current_timestamp(),
	`fecha_actualizacion` TIMESTAMP NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`idUsuario`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=22
;
