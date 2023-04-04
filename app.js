const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navList = document.querySelector('.nav-list');
const body = document.querySelector('body');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    close.classList.toggle('active');
    navList.classList.toggle('show-navlist');
    body.style.overflowY = 'hidden';
})
close.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    close.classList.toggle('active');
    navList.classList.toggle('show-navlist');
    body.style.overflowY = 'scroll';
})