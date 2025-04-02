document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('contact-form2'); 

    function handleFormSubmit(event, form) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("¡Mensaje Enviado con éxito!");
                form.reset();
            } else {
                alert("Error al enviar el mensaje. Inténtalo de nuevo.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un problema al enviar el mensaje.");
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            handleFormSubmit(event, contactForm);
        });
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (event) {
            handleFormSubmit(event, newsletterForm);
        });
    }
});
