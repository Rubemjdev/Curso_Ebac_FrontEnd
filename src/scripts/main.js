function mensagem(){
    alert('Parabens voce concluiu a atividade')
}

let botao = document.getElementById('botao');

botao.onclick = function() {
    mensagem();
}