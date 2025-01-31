document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        alert("¡Mensaje Enviado!");
        window.location.reload();
        event.reset();

        
        // form.submit();
    });
});
