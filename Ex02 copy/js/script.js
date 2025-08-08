/* Exercicio 02
Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas vindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer!
*/

let btnEnviar = document.querySelector("#enviar-btn");

btnEnviar.addEventListener("click", function() {
    let nome = document.querySelector("#input").value;

    console.log(nome)

    let resultado = document.querySelector("#output")
    resultado.innerHTML = `Olá ${nome}, é um prazer te conhecer!`;
})

