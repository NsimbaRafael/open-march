                               // MENU MOBILE
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('header nav');

mobileMenuButton.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Oculta o menu ao redimensionar a tela
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
});






//  SLIDES PARA COVER SCRIPTS


let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let slider = document.querySelector('.slider');
let sliderList = document.querySelector('.slider .list');
let thumbnail = document.querySelector('.thumbnail');
let thumbnailItem = document.querySelectorAll('.item');

thumbnail.appendChild(thumbnailItem[0]);

// Intervalo para autoplay
let autoplayInterval;

// Função para mover o slider
function moveSlider(direction) {
    let sliderItems = slider.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.thumbnail .item');

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItem[0]);
        slider.classList.add('next');
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItem[thumbnailItem.length - 1]);
        slider.classList.add('prev');
    }

    slider.addEventListener('animationend', function() {
        if (direction === 'next') {
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, { once: true });
}

// Função para iniciar o autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        moveSlider('next');
    }, 5000); // 3000 ms = 3 segundos
}

// Função para parar o autoplay
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Iniciar o autoplay ao carregar a página
startAutoplay();

// Interromper o autoplay ao clicar nos botões
nextBtn.onclick = function() {
    moveSlider('next');
    stopAutoplay(); // Para o autoplay
    startAutoplay(); // Reinicia o autoplay
};

prevBtn.onclick = function() {
    moveSlider('prev');
    stopAutoplay(); // Para o autoplay
    startAutoplay(); // Reinicia o autoplay
};











const carouselContainer = document.querySelector('.carousel-container');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
const totalItems = carouselItems.length;
const itemsPerView = 3;
let itemWidth = carouselContainer.offsetWidth / itemsPerView;

function goToSlide(index) {
    if (index < 0) {
        currentIndex = Math.floor((totalItems - 1) / itemsPerView) * itemsPerView;
    } else if (index >= totalItems - itemsPerView) {
        currentIndex = 0;
    } else {
        currentIndex = Math.floor(index / itemsPerView) * itemsPerView;
    }
    carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    updateDots();
}

function prevSlide() {
    goToSlide(currentIndex - itemsPerView);
}

function nextSlide() {
    goToSlide(currentIndex + itemsPerView);
}

function createDots() {
    const numberOfDots = Math.ceil(totalItems / itemsPerView);
    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i * itemsPerView));
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    const activeIndex = Math.floor(currentIndex / itemsPerView);
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

window.addEventListener('resize', () => {
    itemWidth = carouselContainer.offsetWidth / itemsPerView;
    goToSlide(currentIndex);
});

createDots();

let intervalId = setInterval(nextSlide, 3000);

carouselContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
carouselContainer.addEventListener('mouseleave', () => intervalId = setInterval(nextSlide, 3000));

if(prevButton){
    prevButton.addEventListener('click', prevSlide);
}

if(nextButton){
    nextButton.addEventListener('click', nextSlide);
}