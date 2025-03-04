  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("header nav ul");
    const links = document.querySelectorAll("header nav ul li a");
    const header = document.querySelector("header");
    const sections = document.querySelectorAll('.section');
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;

     // Función para actualizar el indicador amarillo
     function updateActiveMenu() {
        const sections = document.querySelectorAll('.section');
        const links = document.querySelectorAll('header nav ul li a');
        let foundActive = false; // Evitar múltiples actualizaciones
    
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100 && !foundActive) { // Margen para la detección
                // Remover la clase 'active' de todos los enlaces
                links.forEach(link => link.classList.remove('active'));
    
                // Activar el enlace correspondiente
                const activeLink = links[index];
                activeLink.classList.add('active');
                foundActive = true; // Evitar que se active más de una sección
            }
        });
    }

    function detectScroll() {
        let isScrolling;
    
        // Escuchar el evento de scroll
        window.addEventListener('scroll', function () {
            // Limpiar el timeout anterior (para evitar múltiples ejecuciones)
            window.clearTimeout(isScrolling);
    
            // Indicar que el scroll está activo
            console.log("Scroll activo");
    
            // Ejecutar la lógica después de que el scroll se detenga
            isScrolling = setTimeout(function () {
                console.log("Scroll detenido");
                // Aquí puedes llamar a la función que actualiza el indicador amarillo
                updateActiveMenu();
            }, 100); // Ajusta el tiempo de espera según sea necesario
        });
    }
    detectScroll();
    

    // Desplazamiento suave y actualización del indicador al hacer clic en los enlaces
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();


            // Remover la clase 'active' de todos los enlaces
            links.forEach(link => link.classList.remove('active'));

            // Añadir la clase 'active' al enlace clickeado
            this.classList.add('active');

            const targetId = this.getAttribute("href").substring(1); // Obtén el ID de la sección
            const targetElement = document.getElementById(targetId); // Encuentra la sección

            if (targetElement) {
                // Desplazamiento suave
                targetElement.scrollIntoView({
                    behavior: "smooth", // Desplazamiento suave
                    block: "start"      // Ajusta el scroll al inicio de la sección
                });
            }
        });
    });


    // Función para abrir el menú
    function openMenu() {
        navMenu.classList.add("show");
        menuToggle.style.opacity = "0"; 
        menuToggle.style.pointerEvents = "none"; // Desactiva el botón mientras el menú está abierto
    }

    // Función para cerrar el menú
    function closeMenu() {
        navMenu.classList.remove("show");

        // Esperar 300ms antes de reactivar el botón
        setTimeout(() => {
            menuToggle.style.opacity = "1";
            menuToggle.style.pointerEvents = "auto"; // Vuelve a activar el botón
        }, 300);
    }

    // Evento para el botón hamburguesa
    menuToggle.addEventListener("click", function () {
        if (!navMenu.classList.contains("show")) {
            openMenu();
        }
    });

    // Detectar gestos táctiles y de mouse
    function startSwipe(e) {
        touchStartX = e.touches ? e.touches[0].clientX : e.clientX;
        isDragging = true;
    }

    function moveSwipe(e) {
        if (!isDragging) return;
        touchEndX = e.touches ? e.touches[0].clientX : e.clientX;
    }

    function endSwipe() {
        let touchDiff = touchEndX - touchStartX;

        if (touchDiff > 50) {
            openMenu();
        } else if (touchDiff < -50 && navMenu.classList.contains("show")) {
            closeMenu();
        }

        isDragging = false;
    }

    // Eventos táctiles (para móviles)
    document.addEventListener("touchstart", startSwipe);
    document.addEventListener("touchmove", moveSwipe);
    document.addEventListener("touchend", endSwipe);

    // Eventos de mouse (para PC)
    document.addEventListener("mousedown", startSwipe);
    document.addEventListener("mousemove", moveSwipe);
    document.addEventListener("mouseup", endSwipe);

    // Cerrar menú si se hace clic fuera
    document.addEventListener("click", function (e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

});
