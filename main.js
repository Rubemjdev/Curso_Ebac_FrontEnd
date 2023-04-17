const form = document.getElementById('form-validation');
const inputCampoA = document.getElementById('campoA');
const inputCampoB = document.getElementById('campoB');
const temLike = '<p id="like">Formulário Validado com Sucesso!!<img src="./images/like.jpg" alt="foto-like"/></p>';
const temDislike = '<p id="dislike">Formulário Inválido!!<img src="./images/dislike.jpeg" alt="foto-dislaike"/></p>';
const containerTemLike = document.querySelector('.like');
const containerTemDislike = document.querySelector('.dislike');

form.addEventListener('submit', function(e){
    e.preventDefault();

    validaFormulario();
});

function validaFormulario() {

    if(parseInt(inputCampoA.value) < parseInt(inputCampoB.value)){
        mensagemLike();
        inputCampoA.value = '';
        inputCampoB.value = '';
    } else {
        mensagemDislike();
        inputCampoA.value = '';
        inputCampoB.value = '';
    }
}

function mensagemLike() {
    containerTemLike.innerHTML = temLike;
    containerTemLike.style.display = 'flex';
    containerTemDislike.style.display = 'none';
}

function mensagemDislike() {
    containerTemDislike.innerHTML = temDislike;
    containerTemDislike.style.display = 'flex';
    containerTemLike.style.display = 'none';
}








