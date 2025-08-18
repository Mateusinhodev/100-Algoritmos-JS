/* Exercicio 09
Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
*/

let capturaDados = document.querySelector("#enviar-btn");

capturaDados.addEventListener("click", function() {
    const cotacao = 5.42;

    let real = parseFloat(document.querySelector(".real").value)

    let conversao = real / cotacao;

    let resultado = document.querySelector("#output");
    resultado.innerHTML = `Pode ser comprado ${conversao.toFixed(2)}US$`;
})