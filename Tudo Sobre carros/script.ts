function mudaFoto(foto){
    document.getElementById("img-home").src = foto;
}

//Habilitar e desabilitar o anuncio
setTimeout(showAdd, 5000);

function showAdd() {
    document.querySelector(".ad").style.display = "block";

    document.querySelector(".ad #btn-close").addEventListener("click", function(){
    document.querySelector(".ad").style.display = "none ";
    })
}

//Validando o formulário do fale conosco
document.querySelector("#btn_enviar").addEventListener("click", function(e){
    var name = form1.tNome.value;
    var regex = new RegExp("^[ 0-9a-z\-A-Zàèìòùáéíóúâêîôûãõ\b]+$")
    if (name == "") {
        alert("Preencha o campo Nome corretamente!");
        $("#nome").css("border", "1px solid red");
        document.form1.tNome.focus();
        e.preventDefault();
    }
    if (!regex.test(name)) {
        alert("Preencha o campo Nome corretamente!");
        $("#nome").css("border", "1px solid red");
        document.form1.tNome.focus();
        e.preventDefault();
    }
    else {
        var name = document.getElementById('nome').value;
        if (name.match('a')) {
            alert("encontrei a letra a");
        }
    }
})

//Fazendo a validação do nome antes de apertar o botão
$("#nome").keyup(function(){
    setTimeout(function(){

    }, 100)
})