document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('indicators');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    // Criar dinamicamente as bolinhas indicadoras
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('w-3', 'h-3', 'rounded-full', 'transition-all', 'duration-300', 'cursor-pointer');
        if (index === currentIndex) {
            dot.classList.add('bg-emerald-400', 'w-8');
        } else {
            dot.classList.add('bg-emerald-800/60', 'hover:bg-emerald-600/60');
        }
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        indicatorsContainer.appendChild(dot);
    });

    const indicators = indicatorsContainer.querySelectorAll('button');

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Atualizar indicadores
        indicators.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.remove('bg-emerald-800/60', 'w-3');
                dot.classList.add('bg-emerald-400', 'w-8');
            } else {
                dot.classList.remove('bg-emerald-400', 'w-8');
                dot.classList.add('bg-emerald-800/60', 'w-3');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        updateSlides();
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Eventos de clique nos botões de navegação
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Navegação por teclado (Setas Esquerda e Direita)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Inicializar o primeiro slide
    updateSlides();
});