$(document).ready(function() {

    $('#telefone').mask('(00)0000-00000', {
        placeholder: '(00)00000-0000'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '111.111.111-11'
    })

    $('#cep').mask('00000-000', {
        placeholder: '53432-144'
    })
});