document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map', {
        center: [10, -50],
        zoom: 2,
        minZoom: 2, 
        maxZoom: 18,
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

    // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    //     attribution: '&copy; Esri & contributors'
    // }).addTo(map);
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; OpenStreetMap contributors'
    // }).addTo(map);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri & contributors'
    }).addTo(map);
    
    
    
    
    
    

    var clientes = [
        { nombre: "ISA", pais: "Colombia", ciudad: "Medellín", lat: 6.2442, lon: -75.5812, img: "assets/images/clientes/1.png" },
        { nombre: "MORELCO", pais: "Colombia", ciudad: "Bogotá", lat: 4.7110, lon: -74.0721, img: "assets/images/clientes/9.png" },
        { nombre: "TRASMISORA COLOMBIANA <br> DE ENERGIA S.A.S", pais: "Colombia", ciudad: "Bogotá", lat: 4.7210, lon: -74.0621, img: "assets/images/clientes/10.png" },
        { nombre: "INTERCHILE", pais: "Chile", ciudad: "Santiago", lat: -33.4489, lon: -70.6693, img: "assets/images/clientes/2.png" },
        { nombre: "REP", pais: "Perú", ciudad: "Lima", lat: -12.0464, lon: -77.0428, img: "assets/images/clientes/3.png" },
        { nombre: "OCHOA", pais: "Paraguay", ciudad: "Asunción", lat: -25.2637, lon: -57.5759, img: "assets/images/clientes/5.png" },
        { nombre: "CONCRET MIX", pais: "Paraguay", ciudad: "Asunción", lat: -25.2737, lon: -57.5659, img: "assets/images/clientes/6.png" },
        { nombre: "SKIPPER LIMITED", pais: "India", ciudad: "Kolkata", lat: 22.5726, lon: 88.3639, img: "assets/images/clientes/7.png" },
        { nombre: "ELECNOR", pais: "España", ciudad: "Madrid", lat: 40.4168, lon: -3.7038, img: "assets/images/clientes/8.png" },
        { nombre: "EDEMSA", pais: "Argentina", ciudad: "Mendoza", lat: -32.8895, lon: -68.8458, img: "assets/images/clientes/11.png" }
    ];
    
    var fabricantes = [
        { nombre: "SKIPPER LIMITED", pais: "India", ciudad: "Kolkata", lat: 22.5826, lon: 88.3739, img: "assets/images/fabricantes/1.png" },
        { nombre: "KALPATARU POWER <br> TRANSMISSION LIMITED", pais: "India", ciudad: "Mumbai", lat: 19.0860, lon: 72.8877, img: "assets/images/fabricantes/2.png" },
        { nombre: "KEC INTERNATIONAL LIMITED", pais: "India", ciudad: "Mumbai", lat: 19.0960, lon: 72.8977, img: "assets/images/fabricantes/3.jpg" },
        { nombre: "DECCAN", pais: "India", ciudad: "", lat: 18.5204, lon: 73.8567, img: "assets/images/fabricantes/4.png" },
        { nombre: "KARAMTARA ENGINEERING <br> PRIVATE LIMITED", pais: "India", ciudad: "Mumbai", lat: 19.0760, lon: 72.8677, img: "assets/images/fabricantes/5.png" },
        { nombre: "ELECTROCOM", pais: "Perú", ciudad: "Lima", lat: -12.0364, lon: -77.0328, img: "assets/images/fabricantes/6.png" },
        { nombre: "PLP", pais: "Brasil", ciudad: "Cajamar", lat: -23.5505, lon: -46.6333, img: "assets/images/fabricantes/7.png" },
        { nombre: "ASBESCO", pais: "India", ciudad: "Kolkata", lat: 22.5926, lon: 88.3839, img: "assets/images/fabricantes/8.jpg" },
        { nombre: "HENGTONG", pais: "Brasil", ciudad: "Pouso Alegre", lat: -22.2166, lon: -45.9264, img: "assets/images/fabricantes/9.jpg" },
        { nombre: "SEDIVER", pais: "Francia", ciudad: "Courbevoie", lat: 48.8967, lon: 2.2567, img: "assets/images/fabricantes/10.jpg" },
        { nombre: "DERVAUX", pais: "Francia", ciudad: "Le Chambon-Feugerolles", lat: 45.4008, lon: 4.3206, img: "assets/images/fabricantes/11.png" },
        { nombre: "DESPROING", pais: "Colombia", ciudad: "Bogotá", lat: 4.7310, lon: -74.0521, img: "assets/images/fabricantes/12.png" },
        { nombre: "SADELEC", pais: "Colombia", ciudad: "Medellín", lat: 6.2542, lon: -75.5712, img: "assets/images/fabricantes/13.jpg" },
        { nombre: "HENAN DINGLI", pais: "China", ciudad: "Zhengzhou", lat: 34.7576, lon: 113.6341, img: "assets/images/fabricantes/14.jpg" },
        { nombre: "MITAS INDUSTRY", pais: "Turquía", ciudad: "Ankara", lat: 39.9308, lon: 32.8641, img: "assets/images/fabricantes/15.png" },
        { nombre: "POWER TRANSFORMER ENGINEERING", pais: "Colombia", ciudad: "Bogotá", lat: 4.7410, lon: -74.0421, img: "assets/images/fabricantes/16.png" },
        { nombre: "SANAY", pais: "India", ciudad: "Mumbai", lat: 19.0660, lon: 72.8577, img: "assets/images/fabricantes/17.png" },
        { nombre: "AMITASHA ENTERPRISES <br> PRIVATE LIMITED", pais: "India", ciudad: "Nagpur", lat: 21.1558, lon: 79.0982, img: "assets/images/fabricantes/18.png" },
        { nombre: "EROS FURNITURE PRIVATE LIMITED", pais: "India", ciudad: "Rajasthan", lat: 26.9224, lon: 75.7973, img: "assets/images/fabricantes/19.png" },
        { nombre: "UTKARSH INDIA LIMITED", pais: "India", ciudad: "Kolkata", lat: 22.6026, lon: 88.3939, img: "assets/images/fabricantes/20.png" },
        { nombre: "SIMPLEX", pais: "India", ciudad: "Mumbai", lat: 19.1060, lon: 72.9177, img: "assets/images/fabricantes/21.png" }
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
