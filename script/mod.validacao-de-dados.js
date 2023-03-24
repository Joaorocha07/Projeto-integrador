const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required');
const select = document.querySelector('genero');
const emailRegex = /^\w+([-=.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault()
    nomeValidacao()
    emailValidacao()
    telefoneValidacao()
    senhaPrincipalValidacao()
    compararSenhas()
})

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nomeValidacao() {
    if(campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0)
    }
}

function emailValidacao() {
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    } else {
        removeError(1)
    }
}

function telefoneValidacao() {
    if(campos[2].value.length < 13){
        setError(2)
    } else {
        removeError(2)
    }
}

function senhaPrincipalValidacao() {
    if(campos[3].value.length < 8) {
        setError(3);
    } else {
        removeError(3)
        compararSenhas()
    }
}

function compararSenhas() {
    if(campos[3].value == campos[4].value && campos[4].value.length >= 8) {
        removeError(4)
    } else {
        setError(4)
    }
}
