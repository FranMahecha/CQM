document.querySelectorAll('.servicio-btn').forEach(button => {
    button.addEventListener('click', function () {
        let text = this.previousElementSibling; 
        text.classList.toggle('hidden'); 

        
        if (text.classList.contains('hidden')) {
            this.innerHTML = '<i class="fas fa-chevron-up"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-chevron-down"></i>';
        }
    });
});