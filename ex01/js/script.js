/* Exercicio 01
Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"
*/
const msg = "Olá Mundo!"

function exibirMensagem() {
    const elemento = document.querySelector(".msg");

    elemento.innerHTML = msg;
}

exibirMensagem();
