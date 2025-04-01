document.addEventListener('wheel', (event) => {
    if (!event.ctrlKey) { 
        window.scrollBy(0, event.deltaY * 10); // Incrementa el factor hasta 10 o más
        event.preventDefault(); 
    }
}, { passive: false });
