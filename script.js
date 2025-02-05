document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления элементов при прокрутке
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Наблюдаем за всеми карточками преимуществ и выгод
    document.querySelectorAll('.advantage-card, .benefit-card').forEach((card) => {
        observer.observe(card);
    });

    // Добавляем эффект пульсации для кнопки Telegram
    const telegramBtn = document.querySelector('.btn-telegram');
    if (telegramBtn) {
        setInterval(() => {
            telegramBtn.classList.add('pulse');
            setTimeout(() => {
                telegramBtn.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
});
