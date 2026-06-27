// Carousel Logic
let currentSlide = 0;
let autoplayInterval;
let isAutoplay = true;
const slides = document.querySelectorAll('.carousel-slide');
const pauseIcon = document.getElementById('pauseIcon');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));

    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}


function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
    isAutoplay = true;
    if (pauseIcon) {
        pauseIcon.className = 'fas fa-pause';
    }
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
    isAutoplay = false;
    if (pauseIcon) {
        pauseIcon.className = 'fas fa-play';
    }
}

function toggleAutoplay() {
    if (isAutoplay) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
}

// Initialize
startAutoplay();

// Nav link active state is set via HTML class on each page

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Vehicle Tabs
document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// FAQ Toggle
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    item.classList.toggle('open');
}