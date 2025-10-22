document.addEventListener('DOMContentLoaded', () => {
    // --- MANTÉM O CÓDIGO DAS MÁSCARAS ---
    const cpfInput = document.getElementById('cpf');
    // ... (seu código de máscaras existente)

    // --- NOVO: FUNCIONALIDADE DO MENU HAMBÚRGUER ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // --- NOVO: EXEMPLO DE FEEDBACK (MODAL/ALERT) ---
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio real para este exemplo
            
            // Exibe um alerta de sucesso
            const feedbackArea = document.getElementById('feedback-area');
            if (feedbackArea) {
                feedbackArea.innerHTML = `
                    <div class="alert alert-sucesso">
                        <strong>Sucesso!</strong> Seu cadastro foi enviado e será analisado.
                    </div>
                `;
            } else {
                // Se não houver área de feedback, usa o alert padrão
                alert('Cadastro enviado com sucesso!');
            }
            form.reset();
        });
    }
});