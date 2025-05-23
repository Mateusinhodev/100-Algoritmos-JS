/* ::: Exercicio 09 :::

Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) 
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
*/

const capturaValor = document.getElementById("btn-enviar");
capturaValor.addEventListener('click', function(e) {
    e.preventDefault();

    const real = parseFloat(document.getElementById("real").value);
    console.log(real);

    // Convertendo REAL para DÓLAR

    const dolar = 3.45;

    const conversao = real/dolar;
    
    const mensagem = document.getElementById('resultado').innerHTML = `Com essa quantia na carteira, pode ser comprado US$${conversao.toFixed(2)}`
});