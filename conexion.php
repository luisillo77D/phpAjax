<?php
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'phpsero';

    $conn = new mysqli($host, $user, $password, $database);

    if ($conn->connect_error) {
        die("Falló la conexión: " . $conn->connect_error);
    }

?>