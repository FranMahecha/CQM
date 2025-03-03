// Cargar el header y footer en un contenedor
function loadHTML(file, containerId, callback) {
    fetch(file)
        .then((response) => {
            if (response.ok) {
                return response.text();
            } else {
                console.error(`Error al cargar ${file}: ${response.statusText}`);
            }
        })
        .then((html) => {
            if (html) {
                document.getElementById(containerId).innerHTML = html;
                if (callback) callback(); 
            }
        })
        .catch((error) => console.error(`Error en fetch: ${error}`));
}

/////////////////////////////////////////////////////////////////////

const GEO_API_URL = "http://ip-api.com/json/";

const countryLanguageMap = {
    "co": "es", // Colombia
    "us": "en", // Estados Unidos
    "fr": "fr", // Francia
    "de": "de", // Alemania
    "pt": "pt", // Portugal
};
let translations = {}; 

const loadTranslations = async (lang) => {
    try {
        const response = await fetch(`assets/translations/${lang}.json`);
        console.log(`Cargando archivo: ${lang}.json`);
        if (response.ok) {
            return await response.json();
        } else {
            console.error(`Error al cargar el archivo de traducción: translations/${lang}.json`);
            return {}; 
        }
    } catch (error) {
        console.error(`Error al obtener el archivo de traducción: ${error}`);
        return {}; 
    }
};

let elementsToTranslate = [];
function updateElementsToTranslate() {
    elementsToTranslate = document.querySelectorAll('[data-i18n]');
}

// Función para traducir elementos con data-i18n
const translatePage = (translations) => {
    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[key] || translations['en']?.[key];
        if (translation) {
            element.innerHTML  = translation;
        }
    });
};

const detectarIdiomaPorLocalizacion = async () => {
    try {
        const extraerLocalizacion = await fetch(GEO_API_URL);
        if (extraerLocalizacion.ok) {
            const convertir = await extraerLocalizacion.json();
            const obtenerCodigo = convertir.countryCode.toLowerCase();
            console.log("Código de país detectado:", obtenerCodigo);

            const idiomaDetectado = countryLanguageMap[obtenerCodigo] || "en";
            return idiomaDetectado;
        } else {
            console.error("Error al obtener la localización");
            return "en";
        }
    } catch (error) {
        console.error("Error al obtener la localización:", error);
        return "en";
    }
};

// Inicializar la página
const cargarPagina = async () => {
    const defaultLang = await detectarIdiomaPorLocalizacion();
    translations = await loadTranslations(defaultLang); 
    translatePage(translations); 
};

// Función para el desplazamiento suave
const setupSmoothScrolling = () => {
    document.querySelectorAll('.scrollto').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};

document.addEventListener("DOMContentLoaded", async () => {
    const defaultLang = await detectarIdiomaPorLocalizacion();
    translations = await loadTranslations(defaultLang); 

    loadHTML("header.html", "header-container", () => {
        updateElementsToTranslate();
        translatePage(translations); 

        const languageButtons = document.querySelectorAll('.language-switch');
        languageButtons.forEach((btn) => {
            btn.addEventListener('click', async (e) => {
                e.preventDefault();
                const selectedLang = e.target.dataset.lang;
                translations = await loadTranslations(selectedLang); 
                translatePage(translations); 
            });
        });
    });
    // Carga el footer
    loadHTML("footer.html", "footer-container", () => {
        updateElementsToTranslate();
        translatePage(translations); 
    });
});

