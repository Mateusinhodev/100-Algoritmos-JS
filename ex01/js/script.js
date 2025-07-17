const msg = "Olá Mundo!"

function exibirMensagem() {
    const elemento = document.querySelector(".msg");

    elemento.innerHTML = msg;
}

exibirMensagem();
