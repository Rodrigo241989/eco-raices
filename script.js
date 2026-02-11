document.addEventListener('DOMContentLoaded', () => {
    const enlacesMenu = document.querySelectorAll('.lista');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            if(targetId.startsWith('#')) {
                e.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    console.log("JavaScript de EcoRaíces cargado correctamente")
});

const formulario = document.querySelector('form[name="contacto"]');

if (formulario) {
    formulario.addEventListener('submit', function(e) {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        
        if (nombre === "" || email === "" || mensaje === "") {
            e.preventDefault(); 
            alert("Por favor, completa todos los campos antes de enviar.");
            return false;
        }
        
        
        console.log("Formulario válido, enviando a Netlify...");
    });

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-activo');
    } else {
        header.classList.remove('header-activo');
    }
});