document.addEventListener("DOMContentLoaded", function () {
    // Obtener la referencia a la imagen
    var imagen = document.querySelector("img");

    // Agregar un evento de clic a la imagen
    imagen.addEventListener("click", function () {
        mostrarMensaje("¡Haz hecho clic en la imagen!");
    });

    // Función para mostrar mensajes
    function mostrarMensaje(mensaje) {
        alert(mensaje);
    }
});
