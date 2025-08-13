/* Exercicio 03
Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório 
entre eles.
Ex:
Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13.
*/

let capturarDados = document.querySelector("#enviar-btn");

capturarDados.addEventListener("click", function() {
    let num1 = parseFloat(document.querySelector(".num1").value);
    let num2 = parseFloat(document.querySelector(".num2").value);

    const somatorio = num1 + num2;

    let resultado = document.querySelector("#output");
    resultado.innerHTML = `A soma entre ${num1} e ${num2} é igual a ${somatorio}`;
}) 