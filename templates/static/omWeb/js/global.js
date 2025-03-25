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