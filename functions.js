const header = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

function closeMenu() {
    header.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
});

// закрывать меню после выбора пункта
document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

// если экран стал широким, закрыть меню
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
});