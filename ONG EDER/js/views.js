// js/views.js

const views = {
    home: () => `
        <section id="sobre">
            <h2>Sobre Nossa Organização</h2>
            <article>
                <h3>Nossa Missão, Visão e Valores</h3>
                <img src="https://via.placeholder.com/800x300" alt="Crianças sorrindo em uma de nossas ações">
                <p>Nossa missão é promover o desenvolvimento social e educacional em comunidades carentes, oferecendo oportunidades que transformam vidas. Acreditamos em um futuro onde todos têm o direito a uma vida digna e com esperança.</p>
            </article>
        </section>
        <section id="contato">
            <h2>Informações de Contato</h2>
            <ul>
                <li><strong>Email:</strong> contato@ongevrn.org</li>
                <li><strong>Telefone:</strong> (11) 99999-8888</li>
                <li><strong>Endereço:</strong> Rua Um, 123, Luminarias - MG</li>
            </ul>
        </section>
    `,

    projetos: () => `
        <section id="nossos-projetos">
            <h2>Conheça Nossos Projetos Sociais</h2>
            <div class="card-container">
                <article class="card">
                    <img src="https://i0.wp.com/abong.org.br/wp-content/uploads/2023/08/pessoas-de-cadeia-de-origami-vista-superior-com-globo-scaled.jpg?resize=2048%2C2048&ssl=1" alt="Sala de aula do projeto EducAção">
                    <div class="card-content">
                        <h3>Projeto "EducAção para o Futuro"</h3>
                        <p>Oferecemos reforço escolar, aulas de informática e atividades culturais...</p>
                    </div>
                </article>
                <article class="card">
                    <img src="https://via.placeholder.com/800x300" alt="Voluntários construindo uma casa">
                    <div class="card-content">
                        <h3>Projeto "Mão na Massa"</h3>
                        <p>Mutirões para a reforma e construção de moradias para famílias em situação de vulnerabilidade...</p>
                    </div>
                </article>
            </div>
        </section>
    `,

    cadastro: () => `
        <section id="formulario-cadastro">
            <h2>Formulário de Cadastro</h2>
            <p>Preencha o formulário abaixo para se tornar um voluntário ou apoiador.</p>
            <form id="cadastro-form" novalidate>
                <div id="form-feedback"></div> <fieldset>
                    <legend>Dados Pessoais</legend>
                    <div>
                        <label for="nome">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" required minlength="3">
                        <small class="error-message"></small>
                    </div>
                    <div>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                        <small class="error-message"></small>
                    </div>
                    <div>
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
                        <small class="error-message"></small>
                    </div>
                </fieldset>
                <button type="submit" class="button">Enviar Cadastro</button>
            </form>
        </section>
    `
};