/* ::: Exercicio 11 :::

Crie um programa que leia o preço de um produto, calcule e mostre o seu 
PREÇO PROMOCIONAL, com 5% de desconto.
*/

const capturaValores = document.getElementById("btn-enviar"); 

capturaValores.addEventListener('click', function(e) {
    // Elimina o recarregamento da página
    e.preventDefault();
    // Capturar valores
    const produto = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;

    console.log(produto, preco);

    // Calcular os 5% do produto

    const desconto = ((5/100)*preco);

    // Aplicando o desconto ao produto

    const precoDescontado = preco - desconto;

    const resultado = document.getElementById("resultado").innerHTML = `O ${produto} custa ${preco} com o desconto de 5% custará ${precoDescontado}.`
});