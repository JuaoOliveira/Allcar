var name = form1.tNome.value.trim();
var email = form1.tEmail.value.trim();
var nasc = form1.tNasc.value.trim();
var regex = new RegExp("^[ a-z\-A-Zàèìòùáéíóúâêîôûãõ\b]+$");

function mudaFoto(foto) {
    document.getElementById("img-home").src = foto;
}

//Habilitar e desabilitar o anuncio
setTimeout(showAdd, 5000);

function showAdd() {
    document.querySelector(".ad").style.display = "block";

    document.querySelector(".ad #btn-close").addEventListener("click", function () {
        document.querySelector(".ad").style.display = "none ";
    })
}

//Validando o formulário do fale conosco
document.querySelector("#btn_enviar").addEventListener("click", function (e) {
    if (name === "" || !regex.test(name)) {
        alert("Preencha o(s) campo(s) corretamente!" + name);
        $("#nome").css("border", "1px solid red");
        document.form1.tNome.focus();
        e.preventDefault();
    }
    if (email === "" || email.indexOf('@') === 0 || email.indexOf(".com") === 0) {
        alert("Preencha o(s) campo(s) corretamente!");
        $("#email").css("border", "1px solid red");
        document.form1.tEmail.focus();
        e.preventDefault();
    } else {
        var name = document.getElementById('nome').value;
        if (name.match('a')) {
            alert("encontrei a letra a");
        }
    }
})

//Validando o nome antes de apertar o botão
$("#nome").keyup(function () {
    var name = form1.tNome.value.trim();
    setTimeout(function () {
        if (!regex.test(name)) {
            alert("O campo nome só pode conter letras e espaços!");
        }
    }, 100)
})

//Validando o campo E-mail antes do botão

$("#email").keyup(function(){
    var email = form1.tEmail.value.trim();
    if (email == "" || email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
            alert(" [{()}] O campo e-mail deve ser do formato: example@example.com");    
    }
    else {
        alert(email + ": valid email!")
    }
})
