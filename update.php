<?php

include("conexion.php");

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$edad = $_POST['edad'];
$genero = $_POST['genero'];
$fechaNacimiento = $_POST['fechaNacimiento'];

// Preparar y ejecutar la consulta SQL
$sql = "UPDATE empleados SET nombre = ?, edad = ?, genero = ?, fecha_nacimiento = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sissi", $nombre, $edad, $genero, $fechaNacimiento, $id);

if ($stmt->execute()) {
    echo "Registro actualizado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar la conexión
$stmt->close();
$conn->close();