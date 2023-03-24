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

  