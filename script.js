
// Referencias de elementos del DOM
const modal = document.getElementById("calendarModal");

// Función para abrir el modal del calendario
function openCalendar() {
    modal.style.display = "block";
    // Bloquear el scroll del cuerpo para mejorar UX
    document.body.style.overflow = "hidden";
}

// Función para cerrar el modal del calendario
function closeCalendar() {
    modal.style.display = "none";
    // Restaurar el scroll
    document.body.style.overflow = "auto";
}

// Cerrar el modal si el usuario hace clic fuera de la caja del calendario
window.onclick = function(event) {
    if (event.target == modal) {
        closeCalendar();
    }
}

// Efecto de cambio de fondo en el Header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.padding = '0.8rem 5%';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.padding = '1.2rem 5%';
    }
});

// Menú Móvil toggle
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica del Menú Móvil ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Solo ejecutamos si el botón existe
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Cerrar menú al hacer clic en un link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // --- Lógica de las Cards (Acordeón) ---
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Si el clic fue dentro de la lista, no hacemos nada
            if (e.target.closest('.lista-servicios')) return;

            const currentList = this.querySelector('.lista-servicios');
            if (!currentList) return; // Seguridad

            const isOpen = currentList.classList.contains('show');

            // 1. Ocultar TODAS las listas
            document.querySelectorAll('.lista-servicios').forEach(lista => {
                lista.classList.remove('show');
            });

            // 2. Si la actual no estaba abierta, abrirla
            if (!isOpen) {
                currentList.classList.add('show');
            }
        });
    });
});
const modalSq = document.getElementById("bookingModal");
const btnSq = document.getElementById("openModalSq");
const closeBtnSq = document.querySelector(".close-button");

// Abrir modal
btnSq.onclick = function() {
    modalSq.style.display = "block";
}

// Cerrar modal al hacer clic en la X
closeBtnSq.onclick = function() {
    modalSq.style.display = "none";
}

// Cerrar modal al hacer clic fuera de la caja blanca
window.onclick = function(event) {
    if (event.target == modalSq) {
        modalSq.style.display = "none";
    }
}
const servicesData = {
    balayage: {
        title: "Balayage Premium",
        desc: "Técnica de aclarado natural para dar luminosidad y dimensión a tu cabello.",
        video: "video/balayage.mp4"
    },
    corte: {
        title: "Corte de Tendencia",
        desc: "Estilos personalizados que resaltan tus facciones siguiendo las últimas modas.",
        video: "video/corte.mp4"
    },
    hidratacion: {
        title: "Hidratación Profunda",
        desc: "Tratamiento intensivo para recuperar el brillo y la suavidad natural de tu fibra capilar.",
        video: "video/hidratacion.mp4"
    }
};

function showService(id, element) {
    // 1. Cambiar clase activa en el menú
    document.querySelectorAll('.service-item').forEach(li => li.classList.remove('active'));
    element.classList.add('active');

    // 2. Animación de salida
    const display = document.getElementById('service-display');
    display.style.opacity = 0;

    setTimeout(() => {
        // 3. Cambiar datos
        const data = servicesData[id];
        document.getElementById('service-title').innerText = data.title;
        document.getElementById('service-desc').innerText = data.desc;
        
        const video = document.getElementById('service-video');
        const source = document.getElementById('video-source');
        source.src = data.video;
        
        video.load(); // Recarga el video con la nueva fuente
        video.play();

        // 4. Animación de entrada
        display.style.opacity = 1;
    }, 400);
}

