/* Exercicio 10
Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
*/

let capturaDados = document.querySelector("#enviar-btn");

capturaDados.addEventListener("click", function() {
    let largura = parseFloat(document.querySelector(".largura").value);
    let altura = parseFloat(document.querySelector(".altura").value);

    // Calcular a área

    let area = largura * altura;

    let qtdTinta = area / 2;

    let resultado = document.querySelector("#output");
    resultado.innerHTML = `É necessário ${qtdTinta} litros de tinta para pintar a parede`;
})
