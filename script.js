    document.getElementById('empleadoForm').addEventListener('submit', function(event) {
        // Capturar los datos del formulario
        const nombre = document.getElementById('nombre').value+"conjs";
        const edad = document.getElementById('edad').value;
        const genero = document.getElementById('genero').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        
        // Enviar los datos con fetch
        fetch('insertar.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                nombre: nombre,
                edad: edad,
                genero: genero,
                fechaNacimiento: fechaNacimiento,
                register: true
            })
        })
        .then(response => response.text())
        .then(data => {
            alert('Registro insertado exitosamente');
            // Limpiar el formulario después del registro exitoso
            document.getElementById('empleadoForm').reset();
        })
        .catch(error => {
            console.error(error);
            alert('Error al registrar. Intenta nuevamente.');
        });

        // Evitar que se recargue la página
        event.preventDefault();
    });
