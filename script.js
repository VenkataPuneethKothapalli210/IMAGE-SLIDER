const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const thumbnailNavigation = document.querySelector('.thumbnail-navigation');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentSlide = 0;
const slideWidth = slides[0].offsetWidth; // Get the width of a single slide

function showSlide(n) {
    currentSlide = n; // Update currentSlide

    sliderContainer.style.transform = `translateX(-${n * slideWidth}px)`; // Use pixel units and slideWidth
    sliderContainer.style.width = `${slides.length * slideWidth}px`; // Correctly set the width

    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active-thumbnail'));
    thumbnails[n].classList.add('active-thumbnail');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const slideIndex = parseInt(thumbnail.dataset.slide);
        showSlide(slideIndex);
    });
});


// Initialize the slider on load (important!)
showSlide(0); // Show the first slide initially

// Make the slider responsive (adjust slideWidth on resize)
window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth;
    showSlide(currentSlide); // Re-adjust the slider position
});