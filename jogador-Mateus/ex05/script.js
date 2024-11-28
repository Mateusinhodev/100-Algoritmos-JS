/* ::: Exercicio 05 :::

Faça um programa que leia as duas notas de um aluno em uma matéria e mostre 
na tela a sua média na disciplina.
Ex: 
Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5
*/

const capturaValores = document.getElementById("btn-enviar");

capturaValores.addEventListener('click', function(e) {
    e.preventDefault();

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);


    const media = ((nota1 + nota2)/2);

    const resultado = document.getElementById("resultado").innerHTML = `A média das notas ${nota1} e ${nota2} é igual a ${media}`
    
});