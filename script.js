const form = document.querySelector('form');
const msg_erro = document.querySelector('#erro-msg');

form.addEventListener('submit', (e) => {e.preventDefault();

    const email = document.querySelector('#iusu').value;
    const senha = document.querySelector('#isen').value;

    //validação das credenciais
    if (email !== 'usuario@exemplo.com' || senha !== 'senha123'){
        msg_erro.textContent = 'Email ou senha incorretos. Tente novamente.';
        return;
    }

    //Validação do email
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        errorMsg.textContent = 'Por favor, insira um email válido';
        return;
      }

    //Se tudo estuver correto, envia o formulário
    form.submit();
    
});