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

    // Анимация городов при наведении
    const cities = document.querySelectorAll('.city');
    cities.forEach(city => {
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
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
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
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('btn-clicked');
            setTimeout(() => {
                button.classList.remove('btn-clicked');
            }, 300);
        });
    });

    // Всплывающие подсказки для социальных иконок
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
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
