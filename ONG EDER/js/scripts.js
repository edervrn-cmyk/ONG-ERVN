// js/scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidade do Menu Hambúrguer
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // O roteador (router.js) já está cuidando do carregamento inicial
});