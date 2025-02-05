document.addEventListener('DOMContentLoaded', function() {
    const telegramButton = document.querySelector('.telegram-button');
    
    telegramButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 0 30px rgba(255, 51, 51, 0.7)';
    });

    telegramButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 0 20px rgba(255, 51, 51, 0.5)';
    });

    // Анимация городов с золотым эффектом
    const cities = document.querySelectorAll('.city-card');
    cities.forEach(city => {
        city.addEventListener('mouseenter', () => {
            city.style.transform = 'scale(1.05) rotate(2deg)';
            city.style.boxShadow = '0 4px 15px rgba(255,215,0,0.5)';
        });

        city.addEventListener('mouseleave', () => {
            city.style.transform = 'scale(1) rotate(0deg)';
            city.style.boxShadow = 'none';
        });
    });

    // Плавная прокрутка с золотым акцентом
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Эффект мерцания для кнопок
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'goldGlow 1.5s infinite alternate';
        });

        button.addEventListener('mouseleave', () => {
            button.style.animation = 'none';
        });
    });

    // Добавление стиля для анимации мерцания
    const style = document.createElement('style');
    style.textContent = `
        @keyframes goldGlow {
            from { box-shadow: 0 0 10px rgba(255,215,0,0.5); }
            to { box-shadow: 0 0 20px rgba(255,215,0,0.8); }
        }
    `;
    document.head.appendChild(style);

    // Интерактивность социальных иконок
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            icon.style.color = '#FFFFFF';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.color = '#FFD700';
        });
    });

    // Анимация городов при наведении
    const oldCities = document.querySelectorAll('.city');
    oldCities.forEach(city => {
        city.addEventListener('mouseenter', () => {
            city.style.transform = 'scale(1.05) rotate(2deg)';
            city.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });

        city.addEventListener('mouseleave', () => {
            city.style.transform = 'scale(1) rotate(0deg)';
            city.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        });
    });

    // Плавная прокрутка к секциям
    const oldNavLinks = document.querySelectorAll('.nav-link');
    oldNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Анимация кнопок при клике
    const oldButtons = document.querySelectorAll('.btn');
    oldButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('btn-clicked');
            setTimeout(() => {
                button.classList.remove('btn-clicked');
            }, 300);
        });
    });

    // Всплывающие подсказки для социальных иконок
    const oldSocialIcons = document.querySelectorAll('.social-icon');
    oldSocialIcons.forEach(icon => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        
        if (icon.querySelector('.fa-telegram')) tooltip.textContent = 'Telegram';
        if (icon.querySelector('.fa-vk')) tooltip.textContent = 'ВКонтакте';
        if (icon.querySelector('.fa-instagram')) tooltip.textContent = 'Instagram';

        icon.appendChild(tooltip);

        icon.addEventListener('mouseenter', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        icon.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
});
