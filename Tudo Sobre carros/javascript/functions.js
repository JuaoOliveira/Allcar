/* ESTE SCRIPT ESTÁ FUNCIONAL ATÉ O MOMENTO! 10/02/18 - 23:19 */

var regex = new RegExp("^[ a-z\-A-Zàèìòùáéíóúâêîôûãõ\b]+$");
var regEmail = new RegExp("^[ a-z0-9\-A-Zàèìòùáéíóúâêîôûãõ\b]+$");

function mudaFoto(foto) {
    document.getElementById("img-home").src = foto;
}

//Habilitar e desabilitar o anuncio
setTimeout(showAdd, 5000);

function showAdd() {
    document.querySelector(".ad").style.display = "block";

    document.querySelector(".ad #btn-close").addEventListener("click", function() {
        document.querySelector(".ad").style.display = "none";
    })
}

//Colocar data atual no campo de data
$(document).ready(function() {
    var data = new Date();
    var nascMask = $("#nasc");
    nascMask.mask('00/00/0000', {placeholder: 'DD/MM/AAAA'});
})

//Validando o formulário do fale conosco
document.querySelector("#btn_enviar").addEventListener("click", function(e) {
    var name = form1.tNome.value.trim();
    var email = form1.tEmail.value.trim();
    var nasc = form1.tNasc.value.trim();
    var msg = form1.cMsg.value.trim();

    console.log(name)
    if (name === "" || !regex.test(name)) {
        alert("Preencha o(s) campo \"nome\" corretamente!" + name);
        $("#nome").css("border", "1px solid red");
        document.form1.tNome.focus();
        e.preventDefault();
    }
    if (email === "" || email.indexOf('@') === -1 || email.indexOf(".com") === -1 || email.substr(email.length - 4) !== ".com") {
        alert("Preencha o(s) campo \"email\" corretamente!");
        $("#email").css("border", "1px solid red");
        document.form1.tEmail.focus();
        e.preventDefault();
    }
    if (nasc === "") {
        alert("Preencha o(s) campo \"Data de nascimento\" corretamente!");
        $("#nasc").css("border", "1px solid red");
        document.form1.tNasc.focus();
        e.preventDefault();
    }
    if (msg.length === 0) {
        alert("Preencha o(s) campo \"Mensagem\" corretamente!");
        $("#msg").css("border", "1px solid red");
        document.form1.cMsg.focus();
        e.preventDefault();
    }
})

//Validando o nome antes de apertar o botão
$("#nome").keyup(function(e) {
    var name = form1.tNome.value.trim();
    if (!regex.test(name)) {
        $(".invalidName").text("Preencha o campo corretamente!");
    } else {
        $(".invalidName").text("");
    }
    e.preventDefault();
})

//Validando o campo E-mail antes do botão
$("#email").keyup(function(e) {
    var email = form1.tEmail.value.trim();
    if (email == "" || email.indexOf("@") == -1 || email.indexOf(".com") == -1 || email.substr(email.length - 4) !== ".com") {
        $(".invalidEmail").text("Preencha o campo corretamente!");
    } else {
        $(".invalidEmail").text("");
    }
    e.preventDefault();
})

//Validar o campo mensagem automaticamente
$("#msg").keyup(function(e) {
    var msg = form1.cMsg.value.trim();
    var showWordCounter = form1.cMsg.value.length;
    $(".word-counter").text("caracteres digitados: " + showWordCounter);
})
