document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.header-burger');
    const headerNav = document.querySelector('.navigation');
    const menuBtn = document.querySelectorAll('.menu');
    burgerBtn.addEventListener('click', (event) => {
        headerNav.classList.toggle('active');
    });
    for(let i = 0; i < menuBtn.length; i++) {
        menuBtn[i].addEventListener('click', (event) => {
            headerNav.classList.toggle('active');
        });
    }
});