$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const inputLista = $('#tarefa').val();
        const novaTarefa = $(`<li>${inputLista}</li>`);
        
        $(novaTarefa).appendTo('ul');
        $('#tarefa').val('');

        $('li').click(function() {
            $(this).addClass("click-marcar");
        });
        
    });

});





