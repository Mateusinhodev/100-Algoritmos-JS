/* Exercicio 07
Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a 
sua terça parte.
Ex: 
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666
*/

let capturaDados = document.querySelector("#enviar-btn");

capturaDados.addEventListener("click", function() {
    let num = parseFloat(document.querySelector(".num").value);

    let dobro = num * 2;
    let tercaParte = num / 3;

    let resultado = document.querySelector("#output");
    resultado.innerHTML = `O dobro de ${num} é ${dobro} <br/> A terça parte de ${num} é  ${tercaParte}.`;
})