document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map', {
        center: [10, -50],
        zoom: 2,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: false,
        touchZoom: false,
        zoomControl: false,
        maxBounds: [
            [-60, -180], 
            [80, 180]
        ],
        maxBoundsViscosity: 1.0 
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var clientes = [
        { nombre: "ISA", pais: "Colombia", ciudad: "Tunja", lat: 5.5353, lon: -73.3678, img: "assets/images/clientes/1.png" },
        { nombre: "MORELCO", pais: "Colombia", ciudad: "Bucaramanga", lat: 7.1193, lon: -73.1227, img: "assets/images/clientes/9.png" },
        { nombre: "TRASMISORA COLOMBIANA <br> DE ENERGIA S.A.S", pais: "Colombia", ciudad: "Cali", lat: 3.4516, lon: -76.5320, img: "assets/images/clientes/10.png" },
        { nombre: "INTERCHILE", pais: "Chile", ciudad: "Santiago", lat: -33.4489, lon: -70.6693, img: "assets/images/clientes/2.png" },
        { nombre: "REP", pais: "Perú", ciudad: "Lima", lat: -12.0464, lon: -77.0428, img: "assets/images/clientes/3.png" },
        { nombre: "OCHOA", pais: "Paraguay", ciudad: "Ciudad del Este", lat: -25.5085, lon: -54.6111, img: "assets/images/clientes/5.png" },
        { nombre: "CONCRET MIX", pais: "Paraguay", ciudad: "Asunción", lat: -25.2637, lon: -57.5759, img: "assets/images/clientes/6.png" },
        { nombre: "SKIPPER LIMITED", pais: "India", ciudad: "Nueva Delhi", lat: 28.6139, lon: 77.2090, img: "assets/images/clientes/7.png" },
        { nombre: "ELECNOR", pais: "Colombia", ciudad: "Bogotá", lat: 4.6570, lon: -74.0935, img: "assets/images/clientes/8.png" },
        { nombre: "EDEMSA", pais: "Colombia", ciudad: "Medellin", lat: 6.2518, lon: -75.5636, img: "assets/images/clientes/11.png" }
    ];

    var fabricantes = [
        { nombre: "SKIPPER LIMITED", pais: "India", ciudad: "Kolkata", lat: 22.5726, lon: 88.3639, img: "assets/images/fabricantes/1.png" },
        { nombre: "KALPATARU POWER TRANSMISSION LIMITED", pais: "India", ciudad: "Gandhinagar", lat: 23.2156, lon: 72.6369, img: "assets/images/fabricantes/2.png" },
        { nombre: "KEC INTERNATIONAL LIMITED", pais: "India", ciudad: "Mumbai", lat: 19.0760, lon: 72.8777, img: "assets/images/fabricantes/3.jpg" },
        { nombre: "DECCAN", pais: "India", ciudad: "Pune", lat: 18.5204, lon: 73.8567, img: "assets/images/fabricantes/4.png" },
        { nombre: "KARAMTARA ENGINEERING PRIVATE LIMITED", pais: "India", ciudad: "Maharashtra", lat: 19.7515, lon: 75.7139, img: "assets/images/fabricantes/5.png" },
        { nombre: "ELECTROCOM", pais: "Perú", ciudad: "Lima", lat: -12.0464, lon: -77.0428, img: "assets/images/fabricantes/6.png" },
        { nombre: "PLP", pais: "Brasil", ciudad: "São Paulo", lat: -23.5505, lon: -46.6333, img: "assets/images/fabricantes/7.png" },
        { nombre: "ASBESCO", pais: "India", ciudad: "West Bengal", lat: 22.9868, lon: 87.8550, img: "assets/images/fabricantes/8.jpg" },
        { nombre: "HENGTONG", pais: "China", ciudad: "Suzhou", lat: 31.2989, lon: 120.5853, img: "assets/images/fabricantes/9.jpg" },
        { nombre: "SEDIVER", pais: "China, Italia", ciudad: "Tianjin", lat: 39.3434, lon: 117.3616, img: "assets/images/fabricantes/10.jpg" },
        { nombre: "DERVAUX", pais: "Francia", ciudad: "Lyon", lat: 45.7640, lon: 4.8357, img: "assets/images/fabricantes/11.png" },
        { nombre: "DESPROING", pais: "Colombia", ciudad: "Bogotá", lat: 4.7110, lon: -74.0721, img: "assets/images/fabricantes/12.png" },
        { nombre: "SADELEC", pais: "Colombia", ciudad: "Medellín", lat: 6.2442, lon: -75.5812, img: "assets/images/fabricantes/13.png" },
        { nombre: "HENAN DINGLI", pais: "China", ciudad: "Zhengzhou", lat: 34.7476, lon: 113.6241, img: "assets/images/fabricantes/14.jpg" },
        { nombre: "MITAS INDUSTRY", pais: "Turquía", ciudad: "Ankara", lat: 39.9208, lon: 32.8541, img: "assets/images/fabricantes/15.png" },
        { nombre: "POWER TRANSFORMER ENGINEERING", pais: "EE.UU.", ciudad: "Tennessee", lat: 35.5175, lon: -86.5804, img: "assets/images/fabricantes/16.png" },
        { nombre: "SANAY", pais: "Turquía", ciudad: "Istanbul", lat: 41.0082, lon: 28.9784, img: "assets/images/fabricantes/17.png" },
        { nombre: "Amitasha Enterprises Private Limited", pais: "India", ciudad: "Nagpur", lat: 21.1458, lon: 79.0882, img: "assets/images/fabricantes/18.png" },
        { nombre: "EROS FURNITURE PRIVATE LIMITED", pais: "India", ciudad: "Rajasthan", lat: 26.9124, lon: 75.7873, img: "assets/images/fabricantes/19.png" },
        { nombre: "Utkarsh India Limited", pais: "India", ciudad: "Kolkata", lat: 22.5726, lon: 88.3639, img: "assets/images/fabricantes/20.png" },
        { nombre: "SIMPLEX", pais: "India", ciudad: "Mumbai", lat: 19.0760, lon: 72.8777, img: "assets/images/fabricantes/21.png" }
    ];

    var iconCliente = L.icon({
        iconUrl: 'assets/images/iconos/24.png',
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -40]
    });

    var iconFabricante = L.icon({
        iconUrl: 'assets/images/iconos/25.png', 
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -40]
    });

    function agregarMarcadores(lista, icono) {
        lista.forEach(item => {
            var marker = L.marker([item.lat, item.lon], { icon: icono }).addTo(map);
            marker.bindTooltip(`
                <div style="text-align: center;">
                    <img src="${item.img}" class="popup-img" alt="Imagen de ${item.nombre}">
                    <p><b>${item.nombre}</b></p>
                </div>
            `, { permanent: false, direction: "top" }); 
            marker.on("mouseover", function () { this.openTooltip(); });
            marker.on("mouseout", function () { this.closeTooltip(); });
        });
    }

    agregarMarcadores(clientes, iconCliente);
    agregarMarcadores(fabricantes, iconFabricante);

    setTimeout(() => {
        map.invalidateSize();
    }, 100);
});
