/* Exercicio 03
Crie um programa que leia o nome e o salário de um funcionário, mostrando no 
final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
*/

let capturarDados = document.querySelector("#enviar-btn");

capturarDados.addEventListener("click", function() {
    let nome = document.querySelector(".nome").value;
    let salario = parseInt(document.querySelector(".salario").value);

    let resultado = document.querySelector("#output").innerHTML = `Funcionário ${nome} tem um salário de R$ ${salario.toFixed(2)} em Junho`;
})
