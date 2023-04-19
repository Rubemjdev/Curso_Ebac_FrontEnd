const form = document.getElementById('form-validation');
const inputCampoA = document.getElementById('campoA');
const inputCampoB = document.getElementById('campoB');
const temLike = '<p id="like">Formulário Validado com Sucesso!!<img src="./images/like.jpg" alt="foto-like"/></p>';
const temDislike = '<p id="dislike">Formulário Inválido, campo B deve ser maior que o campo A<img src="./images/dislike.jpeg" alt="foto-dislaike"/></p>';
const valorIgual = '<p id="valor-igual">Formulário Inválido, você digitou dois valores iguais, para o formulário ser válido, o campo B deve ser maior que o campo A<img src="./images/dislike.jpeg" alt="foto-dislaike"/></p>';
const containerTemLike = document.querySelector('.like');
const containerTemDislike = document.querySelector('.dislike');
const containerValorIgual = document.querySelector('.valor-igual');
inputCampoA.value = '';
inputCampoB.value = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    validaFormulario();
});

function validaFormulario() {

    if(parseInt(inputCampoA.value) < parseInt(inputCampoB.value)){
        mensagemLike();
        
    } else if(parseInt(inputCampoA.value) === parseInt(inputCampoB.value)) {
        mensagemValorIgual();
    } else {
        mensagemDislike();
    }
}

function mensagemLike() {
    containerTemLike.innerHTML = temLike;
    containerTemLike.style.display = 'flex';
    containerTemDislike.style.display = 'none';
    containerValorIgual.style.display = 'none';
}

function mensagemDislike() {
    containerTemDislike.innerHTML = temDislike;
    containerTemDislike.style.display = 'flex';
    containerTemLike.style.display = 'none';
    containerValorIgual.style.display = 'none';

}

function mensagemValorIgual() {
    containerValorIgual.innerHTML = valorIgual;
    containerValorIgual.style.display = 'flex';
    containerTemLike.style.display = 'none';
    containerTemDislike.style.display = 'none';
}







