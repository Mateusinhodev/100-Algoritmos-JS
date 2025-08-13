/* Exercicio 06
Faça um programa que leia um número inteiro e mostre o seu antecessor e seu 
sucessor.
Ex: 
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10
*/

let capturaDados = document.querySelector("#enviar-btn");

capturaDados.addEventListener("click", function() {
    let num = parseInt(document.querySelector(".num").value);

    let antecessor = num - 1;
    let sucessor = num + 1;

    let resultado = document.querySelector("#output");
    resultado.innerHTML = `O antecessor de ${num} é ${antecessor} <br/> O sucessor de ${num} é ${sucessor}`;
})