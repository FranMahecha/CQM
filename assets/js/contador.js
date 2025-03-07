document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    const formatNumber = (num) => {
        if (num < 10000) {
            return num.toString().replace(/(\d)(\d{3})$/, '$1.$2'); 
        }
        return num.toLocaleString("es-ES"); 
    };

    const startCounter = (counter) => {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        let count = 0;

        // 🔹 Ajuste dinámico del incremento
        let increment, speed;
        if (target < 100) {
            increment = 1;
            speed = 100;
        } else if (target < 1000) {
            increment = Math.ceil(target / 50);
            speed = 80;
        } else {
            increment = Math.ceil(target / 50);
            speed = 50;
        }

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = formatNumber(count);
                setTimeout(updateCounter, 50); // Mantiene la animación fluida
            } else {
                counter.innerText = formatNumber(target);
            }
        };

        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
});
