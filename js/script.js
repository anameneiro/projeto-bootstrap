$(document).ready(function (){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validade ({
        rules: {
            nome:{
                required: true
            },
            telefone:{
                required: true
            },

        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Olá! ${camposIncorretos} campos estão incorretos.`)
            }
        }
    })
});