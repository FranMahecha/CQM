document.addEventListener("DOMContentLoaded", function () {
    console.log("entra inicio");

    let button = document.getElementById("muteButton");
    let video = document.getElementById("comp-lutiplyu_video2");

    if (!button || !video) {
        console.error("Elemento no encontrado.");
        return;
    }

    console.log("Botón y video encontrados.");

    button.addEventListener("click", function () {
        console.log("¡Botón clickeado!"); // Este es el log de prueba

        video.play().then(() => {
            video.muted = !video.muted;
            console.log("Nuevo estado de video.muted:", video.muted);

            button.textContent = video.muted ? "🔊" : "🔇"; 
        }).catch(error => {
            console.error("Error al intentar cambiar el mute:", error);
        });
    });
});
