/* ::: Exercicio 06 :::

Faça um programa que leia um número inteiro e mostre o seu antecessor e seu 
sucessor.
Ex: 
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10
*/

const capturaValores = document.getElementById('btn-enviar');
capturaValores.addEventListener('click', function(e) {
    e.preventDefault();

    const num = parseFloat(document.getElementById('num').value);
    console.log(num);

    const sucessor = num + 1;
    console.log(sucessor);

    const antecessor = num - 1;
    console.log(antecessor);

    const resultado = document.getElementById('resultado').innerHTML = `O antecessor de ${num} é ${antecessor} <br/> O sucessor de ${num} é ${sucessor}`
});