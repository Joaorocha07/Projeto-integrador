// Manda para o proximo formulario de verificação
document.addEventListener("DOMContentLoaded", function() {
    const formEmail = document.getElementById("form-email");
    const formNovaSenha = document.getElementById("form-nova-senha");
    const formCodigo = document.getElementById("form-codigo");
    const btnEnviar = document.getElementById("btn-enviar");
    const btnVerificar = document.getElementById("btn-verificar");
    const btnReenviar = document.getElementById("btn-reenviar");

    btnEnviar.addEventListener("click", function() {
        formEmail.style.display = "none";
        formCodigo.style.display = "flex";
        formCodigo.style.justifyContent = "center";
        formCodigo.style.alignItems = "center";
        formCodigo.style.height = "100vh";
    });

    // gerar um código aleatório de 6 dígitos
    var codigo = Math.floor(Math.random() * 900000) + 100000;
    console.log("Seu codigo de verificação é: " + codigo)

    btnVerificar.addEventListener("click", function() {
        if(codigoInput.value == codigo) {
            console.log("Você digitou certo")
            console.log("Campo input: " + codigoInput.value)
            console.log("Codigo: " + codigo)
        } else if(codigoInput.value != codigo) {
            console.log("Você digitou errado!")
            console.log("Campo input: " + codigoInput.value)
            console.log("Codigo: " + codigo)
        } else if(codigoInput.value == this.novoCodigo) {
            console.log("Você digitou certo")
            console.log("Campo input: " + codigoInput.value)
            console.log("Codigo: " + novoCodigo)
        } else if(codigoInput.value != this.novoCodigo) {
            console.log("Você digitou errado!")
            console.log("Campo input: " + codigoInput.value)
            console.log("Codigo: " + this.novoCodigo)
        } else {
            console.log("Deu errado!")
        }
        
        formCodigo.style.display = "none";
        formNovaSenha.style.display = "flex";
        formNovaSenha.style.justifyContent = "center";
        formNovaSenha.style.alignItems = "center";
        formNovaSenha.style.height = "100vh";
    });

    btnReenviar.addEventListener("click", function() {
        var novoCodigo = Math.floor(Math.random() * 900000) + 100000;
        console.log("Seu novo codigo de verificação é: " + novoCodigo)
    })
});

// Seleciona os elementos do HTML
const formEmail = document.getElementById('form-email');
const formCodigo = document.getElementById('form-codigo');
const btnEnviar = document.getElementById('btn-enviar');
const btnVerificar = document.getElementById('btn-verificar');
const btnReenviar = document.getElementById('btn-reenviar');
const emailInput = document.getElementById('email');
const codigoInput = document.getElementById('codigo');
const tempoRestante = document.getElementById('tempo-restante');

// Função que inicia a contagem regressiva
function iniciarContagem() {
btnReenviar.disabled = true;
let segundos = 60;
const intervalId = setInterval(() => {
    segundos--;
    tempoRestante.textContent = segundos;
    if (segundos === 0) {
        clearInterval(intervalId);
        btnReenviar.disabled = false;
        tempoRestante.textContent = '60';
    }
}, 1000);
}

// Evento de clique no botão "Enviar"
btnEnviar.addEventListener('click', () => {
// Aqui você pode fazer a validação do e-mail
    formEmail.style.display = 'none';
    formCodigo.style.display = 'block';
    iniciarContagem();
    btnEnviar.disabled = true;
});

// Evento de clique no botão "Verificar"
btnVerificar.addEventListener('click', () => {
    // Aqui você pode fazer a validação do código
});

// Evento de clique no botão "Reenviar código"
btnReenviar.addEventListener('click', () => {
    btnReenviar.disabled = true; // Adicione essa linha
    iniciarContagem();
    // Aqui você pode reenviar o e-mail com o novo código
});

// Aplicando a máscara para o telefone
const inputTelefone = document.getElementById('telefone');

inputTelefone.addEventListener('input', function (event) {
  const telefone = event.target.value.replace(/\D/g, '');

  if (telefone.length === 11) {
    event.target.value = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else {
    event.target.value = telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
});
