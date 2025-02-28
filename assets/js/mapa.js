document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map', {
        center: [10, -50],
        zoom: 2,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: false,
        touchZoom: false,
        zoomControl: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var clientes = [
        { nombre: "ISA", pais: "Colombia", ciudad: "Tunja", lat:  5.5353, lon: -73.3678, img: "assets/images/clientes/1.png" },
        { nombre: "MORELCO", pais: "Colombia", ciudad: "Bucaramanga", lat: 7.1193, lon: -73.1227, img: "assets/images/clientes/9.png" },
        { nombre: "TRASMISORA COLOMBIANA DE ENERGIA S.A.S", pais: "Colombia", ciudad: "Cali", lat: 3.4516, lon: -76.5320, img: "assets/images/clientes/10.png" },

        { nombre: "INTERCHILE", pais: "Chile", ciudad: "Santiago", lat: -33.4489, lon: -70.6693, img: "assets/images/clientes/2.png" },

        { nombre: "REP", pais: "Perú", ciudad: "Lima", lat: -12.0464, lon: -77.0428, img: "assets/images/clientes/3.png" },
        { nombre: "CONSORCIO TRANSMANTARO", pais: "Perú", ciudad: "Arequipa", lat: -16.4090, lon: -71.5375, img: "assets/images/fabricantes/404.jpg" },

        { nombre: "OCHOA", pais: "Paraguay", ciudad: "Ciudad del Este", lat: -25.5085, lon: -54.6111, img: "assets/images/clientes/5.png" },

        { nombre: "CONCRET MIX", pais: "Paraguay", ciudad: "Asunción", lat: -25.2637, lon: -57.5759, img: "assets/images/clientes/6.png" },

        { nombre: "SKIPPER LIMITED", pais: "India", ciudad: "Nueva Delhi", lat: 28.6139, lon: 77.2090, img: "assets/images/clientes/7.png" },

        { nombre: "ELECNOR", pais: "Colombia", ciudad: "Bogotá", lat: 4.6570, lon: -74.0935, img: "assets/images/clientes/8.png" },

        { nombre: "EDEMSA", pais: "Colombia", ciudad: "Medellin", lat: 6.2518, lon: -75.5636, img: "assets/images/clientes/11.png" }
    ];

    clientes.forEach(cliente => {
        L.marker([cliente.lat, cliente.lon])
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <img src="${cliente.img}" class="popup-img" alt="Imagen de ${cliente.nombre}">
                    <p><b>${cliente.nombre}</b></p>
                </div>
            `);
    });

    setTimeout(() => {
        map.invalidateSize();
    }, 100);
});
