/* ::: Exercicio 04 :::

Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório 
entre eles.
Ex:
Digite um valor: 8
Digite outro valor: 5
A soma entre 8 e 5 é igual a 13.
*/

const capturaValores = document.getElementById("btn-enviar");

capturaValores.addEventListener('click', function (e) {
    e.preventDefault();

    const num1 = document.getElementById("num1").value;
    console.log(num1);

    const num2 = document.getElementById("num2").value;
    console.log(num2);

    const soma = parseFloat(num1) + parseFloat(num2);

    const resultado = document.getElementById("resultado").innerHTML = `A soma entre ${num1} e ${num2} é igual a ${soma}`
});

