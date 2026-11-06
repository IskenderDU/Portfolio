const header = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

function closeMenu() {
    header.classList.remove('open');
}

burger.addEventListener('click', () => {
    header.classList.toggle('open');
});

// закрывать меню после выбора
document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

// если экран стал широким, закрыть меню
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
});