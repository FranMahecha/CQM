document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    const startCounter = (counter) => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 150; 

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.floor(count).toLocaleString("es-ES");;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString("es-ES");; 
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