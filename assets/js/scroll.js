document.addEventListener('wheel', (event) => {
    if (!event.ctrlKey) { 
        window.scrollBy({
            top: event.deltaY * 1.5,
            behavior: 'smooth'
        });
        event.preventDefault(); 
    }
}, { passive: false });