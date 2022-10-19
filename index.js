alert ("Bem-vindo!")
window.confirm("Deseja continuar?")

var btns = document.querySelectorAll('input[name="botoes"]');

btns.forEach((radio) =>{
    radio.addEventListener("change", function (envento){
        evento.preventDefault();

        var botao = document.querySelector("button");

        if(evento.target.value == "decodificar") {
            botao.innerHTML = "Decodificar";
        } else {
            botao.innerHTML = "Codificar"
        }
    });
});

var escolhas = document.querySelector("select");
escolhas.addEventListener("change", function(evento){
    evento.preventDefault();
    
var chave = document.getElementById("numero");
if(evento.target.value == "cesar") {
    chave.style = "display: block";
} else {
    chave.style = "display: none";
}
});

var formulario = document.forms.formulario;

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    var texto = formulario.texto.value;
    var escolhas = formulario.escolhas.value;
    var numeroIncremento = formulario.numeroIncremento.value;
    var botoesRadiais = formulario.botoes.value;
    var mensagemFinal = "";

    if(escolhas =="cesar"){
        mensagemFinal = cesar(botoesRadiais, texto, numeroIncremento);
    } else {
        mensagemFinal = base64(botoesRadiais, texto);
    }

    var resultadoTexto = document.getElementById("mensagemFinal");
    resultadoTexto.innerHTML = `${mensagemFinal}`;

    formulario.texto.focus();

});

function cesar(botoes, texto, numeroIncremento) {
    numeroIncremento = Number (numeroIncremento);

    var mensagemFinal ="";

    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var codigo = letra.charCodeAt();

        if (botoes == "codificar") {
            codigo += numeroIncremento;
        } else {
            codigo -= numeroIncremento;
        }
        mensagemFinal += String.fromCharCode(codigo);
    }
    return mensagemFinal;
}

function base64(botoes, texto) {
    if (botoes == "codificar") {
        return btoa(texto);
    } else  {
        return atob(texto);
    }
}