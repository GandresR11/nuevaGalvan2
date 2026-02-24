
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
peluqueria: {
        title: "Peluquería (Hair Styling & Cutting)",
        desc: "Tu estilo, a tu manera. Creamos cortes y peinados pensados para resaltar tu personalidad y hacerte sentir bien en cada ocasión.<br><br>• Corte Femenino personalizado<br>• Peinado y Styling para tu dia a dia o eventos<br>• Recogidos para fiestas o eventos<br>• Ondas (Al agua y Rotas)<br>• Acabados profesionales de larga duración",
        video: "imagenes/Peinados2.mp4"
    },
    colorimetria: {
        title: "Colorimetría (Master Color Art)",
        desc: "Alquimia pura para tu cabello. Especialistas en técnicas de iluminación y matices que respetan la salud de tu fibra capilar.<br><br>• Coloración de Raíz Orgánica<br>• Balayage & High Lights de Lujo<br>• Mechas de Contorno y Precisión<br>• Matizados de Brillo Espejo<br>• Coloración Botánica y Barros",
        video: "imagenes/Balayage2.jpg" 
    },
    tratamientos: {
        title: "Tratamientos (Hair Care Rituals)",
        desc: "Rituales de reparación y rejuvenecimiento. Transformamos la textura de tu cabello con las fórmulas más avanzadas del mercado.<br><br>• Alisado Orgánico Premium<br>• Bótox y Rejuvenecimiento Capilar<br>• Terapias de Reconstrucción Intensiva<br>• Tratamientos Antifrizz y Nutrición<br>• Ampollas de Cuidado Específico",
        video: "imagenes/Servicios4.jpeg"
    },
    caballeros: {
        title: "Caballeros (The Gentlemen’s Club)",
        desc: "La distinción masculina en manos expertas. Un refugio de cuidado donde la tradición se fusiona con el estilismo contemporáneo.<br><br>• Corte con Lavado<br>• Ritual de Cuidado de Barba<br>• Estilismo Masculino a Medida<br>• Corte Junior de Alta Calidad",
        video: "imagenes/Caballeros1.jpeg"
    },
    estetica: {
        title: "Estética (Skincare & Beauty)",
        desc: "La excelencia del cuidado integral. Elevamos tu belleza natural con tratamientos de vanguardia y resultados excepcionales.<br><br>• Manicura y Pedicura de Alta Gama<br>• Diseño de Mirada (Microblading & Pestañas)<br>• Faciales Avanzados (Dermapen & Punta de Diamante)<br>• Masajes Terapéuticos y Relajantes<br>• Depilación y Diseño de Cejas con Hilo",
        video: "imagenes/Estetica1.jpeg"
    },
    jubilados: {
        title: "Días Dorados (Senior Excellence)",
        desc: "Experiencia y elegancia para nuestros clientes más distinguidos. Atención preferencial los días miércoles y jueves.<br><br>• Corte y Color Orgánico Especializado<br>• Peinado y Estilismo de Confort<br>• Packs de Cuidado Integral Senior<br>• Atención Personalizada de Alta Calidad",
        video: "imagenes/Cliente4.mp4"
    }
};

function showService(id, element) {
    // 1. Cambiar clase activa en el menú
    document.querySelectorAll('.service-item').forEach(li => li.classList.remove('active'));
    element.classList.add('active');

    // 2. Animación de salida
    const display = document.getElementById('service-display');
    const videoWrapper = document.querySelector('.video-wrapper'); // Contenedor del media
    display.style.opacity = 0;

    setTimeout(() => {
        // 3. Obtener datos
        const data = servicesData[id];
        document.getElementById('service-title').innerHTML = data.title;
        document.getElementById('service-desc').innerHTML = data.desc;
        
        // Detectar si el recurso es video o imagen por su extensión
        const esVideo = data.video.match(/\.(mp4|webm|ogg|mov)$/i);

        // Limpiar el contenedor para el nuevo recurso
        videoWrapper.innerHTML = '';

        if (esVideo) {
            // Crear elemento Video
            const video = document.createElement('video');
            video.id = 'service-video';
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.setAttribute('playsinline', '');
            video.setAttribute('poster', 'img/placeholder.jpg'); // Tu poster original
            
            const source = document.createElement('source');
            source.src = data.video;
            
            video.appendChild(source);
            videoWrapper.appendChild(video);
            
            video.load();
            video.play().catch(e => console.log("Autoplay bloqueado o carga fallida"));
        } else {
            // Crear elemento Imagen
            const img = document.createElement('img');
            img.id = 'service-media-img'; // ID único para imagen si necesitas CSS específico
            img.src = data.video; // Aunque el campo se llame 'video' en tu data, aquí va la imagen
            img.style.width = '100%'; 
            img.style.display = 'block';
            
            videoWrapper.appendChild(img);
        }

        // 4. Animación de entrada
        display.style.opacity = 1;
    }, 400);
}
function scrollToSlide(index) {
    const slider = document.getElementById('novias-slider');
    const dots = document.querySelectorAll('.nav-dot');
    const slideWidth = slider.querySelector('.slide-item').clientWidth;
    
    // Mover el scroll
    slider.scrollLeft = index * (slideWidth + 10); // +10 por el gap del CSS

    // Actualizar clase activa en los puntos
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

// Opcional: Actualizar el punto activo cuando el usuario desliza manualmente
document.getElementById('novias-slider').addEventListener('scroll', function() {
    const slider = this;
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    const dots = document.querySelectorAll('.nav-dot');
    
    dots.forEach(dot => dot.classList.remove('active'));
    if(dots[index]) dots[index].classList.add('active');
});
