<?php
include("conexion.php");

if(isset($_POST['register'])){
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $genero = $_POST['genero'];
    $fechaNacimiento = $_POST['fechaNacimiento'];

    // Preparar y ejecutar la consulta SQL
    $sql = "INSERT INTO empleados (nombre, edad, genero, fecha_nacimiento) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("siss", $nombre, $edad, $genero, $fechaNacimiento);

    if ($stmt->execute()) {
        echo "Registro insertado exitosamente";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Cerrar la conexión
    $stmt->close();
    $conn->close();
}
