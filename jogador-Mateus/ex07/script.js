/* ::: Exercicio 07 :::

Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a 
sua terça parte.
Ex: 
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666
*/

const capturarValor = document.getElementById("btn-enviar");

capturarValor.addEventListener('click', function(e) {
    e.preventDefault();

    const num = parseFloat(document.getElementById("num").value);
    console.log(num);

    const dobro = num * 2;
    const tercaParte = num / 3;

    const resultado =  document.getElementById('resultado').innerHTML = `O dobro de ${num} é ${dobro} <br/> A terça parte de ${num} é ${tercaParte}`;
});