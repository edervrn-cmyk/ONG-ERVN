// js/validator.js

// Função para exibir mensagens de erro
function showError(inputElement, message) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.add('invalid');
    errorElement.textContent = message;
}

// Função para limpar mensagens de erro
function clearError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.remove('invalid');
    errorElement.textContent = '';
}

// Função principal de validação do formulário
function validateForm() {
    let isValid = true;
    const form = document.getElementById('cadastro-form');
    
    // Valida Nome
    const nome = form.nome;
    if (nome.value.trim().length < 3) {
        showError(nome, 'O nome deve ter no mínimo 3 caracteres.');
        isValid = false;
    } else {
        clearError(nome);
    }

    // Valida E-mail
    const email = form.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Por favor, insira um e-mail válido.');
        isValid = false;
    } else {
        clearError(email);
    }

    // Valida CPF (formato simples)
    const cpf = form.cpf;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf.value)) {
        showError(cpf, 'O CPF deve estar no formato 000.000.000-00.');
        isValid = false;
    } else {
        clearError(cpf);
    }

    return isValid;
}

// Inicializa os listeners do formulário
function initializeFormValidation() {
    const form = document.getElementById('cadastro-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio
            const feedbackArea = document.getElementById('form-feedback');
            
            if (validateForm()) {
                feedbackArea.className = 'alert alert-sucesso';
                feedbackArea.textContent = 'Cadastro enviado com sucesso!';
                form.reset();
            } else {
                feedbackArea.className = 'alert alert-perigo';
                feedbackArea.textContent = 'Por favor, corrija os erros no formulário.';
            }
        });
        
        // Adiciona validação em tempo real ao sair do campo
        Array.from(form.elements).forEach(input => {
            input.addEventListener('blur', validateForm);
        });
    }
}