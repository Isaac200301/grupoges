document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const numSlides = slides.children.length;

    function showSlide(index) {
        currentIndex = index;
        const slideWidth = slides.children[0].offsetWidth; // Obtener el ancho de una diapositiva
        slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`; // Desplazar según el ancho de la diapositiva
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + numSlides) % numSlides;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % numSlides;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    window.addEventListener('resize', function() {
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});

