// js/router.js

const app = document.getElementById('app');

const routes = {
    '/': views.home,
    '/projetos': views.projetos,
    '/cadastro': views.cadastro
};

function router() {
    const path = window.location.hash.slice(1) || '/';
    const view = routes[path];

    if (view) {
        app.innerHTML = view();
        // Após carregar a view de cadastro, inicializa os validadores
        if (path === '/cadastro') {
            initializeFormValidation();
        }
    } else {
        app.innerHTML = '<h2>Página não encontrada</h2>';
    }
}

// Ouve as mudanças na URL (hash) e o carregamento inicial da página
window.addEventListener('hashchange', router);
window.addEventListener('load', router);