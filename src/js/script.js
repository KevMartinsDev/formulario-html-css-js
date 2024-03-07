function validarCampo(inputId, mensagemId, mensagemErro) {
    var input = document.getElementById(inputId);
    var mensagem = document.getElementById(mensagemId);

    if (input.checkValidity() === false) {
        input.classList.add("invalido");
        mensagem.textContent = mensagemErro;
        mensagem.classList.add("atencao");
        mensagem.classList.add("visivel");
        mensagem.hidden = false;
        return false;
    } else {
        input.classList.remove("invalido");
        mensagem.textContent = "";
        input.classList.add("validado");
        input.classList.remove("atencao");
        mensagem.classList.remove("visivel");
        mensagem.hidden = true;
        return true;
    }
    
}

function validarFormulario() {
    var camposValidos = true;

    camposValidos &= validarCampo("nome", "mensagem-nome", "campo obrigatório");
    camposValidos &= validarCampo("email", "mensagem-email", "campo obrigatório");
    camposValidos &= validarCampo("telefone", "mensagem-telefone", "campo obrigatório");
    camposValidos &= validarCampo("mensagem", "mensagem-texto", "campo obrigatório");

    return camposValidos;
}

document.getElementById("nome").addEventListener("blur", function() {
    validarCampo("nome", "mensagem-nome", "campo obrigatório");
});

document.getElementById("email").addEventListener("blur", function() {
    validarCampo("email", "mensagem-email", "campo obrigatório");
});

document.getElementById("telefone").addEventListener("blur", function() {
    validarCampo("telefone", "mensagem-telefone", "campo obrigatório");
});

document.getElementById("mensagem").addEventListener("blur", function() {
    validarCampo("mensagem", "mensagem-texto", "campo obrigatório");
});

