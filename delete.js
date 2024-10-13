document.getElementById('delete').addEventListener('click', function(event) {
    // Capturar los datos del formulario
    const id = document.getElementById('id').value;
    //comprobar que el id no sea vacio
    if(id == ""){
        alert('El campo id no puede estar vacio');
        return;
    }
    
    // Enviar los datos con fetch
    fetch('delete.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            id: id,
        })
    })
    .then(response => response.text())
    .then(data => {
        alert('Registro eliminado exitosamente');
        // Limpiar el formulario después del registro exitoso
        document.getElementById('id').value = "";
    })
    .catch(error => {
        console.error(error);
        alert('Error al eliminar. Intenta nuevamente.');
    });

    // Evitar que se recargue la página
    event.preventDefault();
});