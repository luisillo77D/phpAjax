document.getElementById('update').addEventListener('click', function(event) {
    // Capturar los datos del formulario
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    //comprobar que el id no sea vacio
    if(id == ""){
        alert('El campo id no puede estar vacio');
        return;
    }
    
    // Enviar los datos con fetch
    fetch('update.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            id: id,
            nombre: nombre,
            edad: edad,
            genero: genero,
            fechaNacimiento: fechaNacimiento,
        })
    })
    .then(response => response.text())
    .then(data => {
        alert('Registro actualizado exitosamente');
        // Limpiar el formulario después del registro exitoso
        document.getElementById('id').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('edad').value = "";
        document.getElementById('genero').value = "";
        document.getElementById('fechaNacimiento').value = "";
    })
    .catch(error => {
        console.error(error);
        alert('Error al actualizar. Intenta nuevamente.');
    });

    // Evitar que se recargue la página
    event.preventDefault();
});