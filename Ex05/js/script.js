/* Exercicio 05
Faça um programa que leia as duas notas de um aluno em uma matéria e mostre 
na tela a sua média na disciplina.
Ex: 
Nota 1: 4.5
Nota 2: 8.5
A média entre 4.5 e 8.5 é igual a 6.5
*/

let capturaDados = document.querySelector("#enviar-btn")

capturaDados.addEventListener("click", function() {
    let nota1 = parseFloat(document.querySelector(".nota1").value);
    let nota2 = parseFloat(document.querySelector(".nota2").value);

    if(nota1 < 0 || nota2 < 0) {
        alert("Notas inválidas! Verifique os valores e digite novamente.");
        return;
    }

    const media = ((nota1 + nota2)/2);

    let resultado = document.querySelector("#output");
    resultado.innerHTML = `A media entre ${nota1} e ${nota2} é igual a ${media}`;

})
