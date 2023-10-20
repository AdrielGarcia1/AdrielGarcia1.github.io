// Inicialización de variables
let currentIndex = 0; // Índice de la diapositiva actual
const slides = document.querySelectorAll('.slide'); // Selecciona todas las diapositivas
const container = document.querySelector('.slides'); // Selecciona el contenedor de las diapositivas
let autoSlideInterval; // Variable para el intervalo de cambio automático

// Función para mostrar la diapositiva actual
function showSlide(index) {
    container.style.transform = `translateX(-${index * 100}%)`;
}

// Función para cambiar la diapositiva
function changeSlide(offset) {
    currentIndex += offset; // Aumenta o disminuye el índice de la diapositiva

    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Vuelve a la última diapositiva si estamos en la primera
    } else if (currentIndex >= slides.length) {
        currentIndex = 0; // Vuelve a la primera diapositiva si estamos en la última
    }

    showSlide(currentIndex); // Muestra la diapositiva actual

    // Borra el intervalo actual (si existe)
    clearInterval(autoSlideInterval);

    // Inicia un nuevo intervalo después de 6 segundos (6000 milisegundos)
    autoSlideInterval = setTimeout(() => {
        autoSlideInterval = setInterval(() => {
            changeSlide(1); // Cambiar a la siguiente diapositiva
        }, 500); // Intervalo de 500 milisegundos (0.5 segundos)
    }, 6000); // Espera 6 segundos antes de reanudar el cambio automático
}

// Muestra la primera diapositiva al cargar la página
showSlide(currentIndex);

// Agrega un temporizador para cambiar de diapositiva automáticamente cada 0.5 segundos
autoSlideInterval = setInterval(() => {
    changeSlide(1); // Cambiar a la siguiente diapositiva
}, 500); // Intervalo de 500 milisegundos (0.5 segundos)

// Agrega eventos de clic a los botones de navegación
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    changeSlide(-1); // Cambiar a la diapositiva anterior
});

nextButton.addEventListener('click', () => {
    changeSlide(1); // Cambiar a la siguiente diapositiva
});