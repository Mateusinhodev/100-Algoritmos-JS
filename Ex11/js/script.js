/* Exercicio 11
Desenvolva uma lógica que leia os valores de A, B e C de uma equação do 
segundo grau e mostre o valor de Delta.
*/

let capturaDados = document.querySelector("#enviar-btn");

capturaDados.addEventListener("click", function() {
    let a = parseFloat(document.querySelector(".valorA").value);
    let b = parseFloat(document.querySelector(".valorB").value);
    let c = parseFloat(document.querySelector(".valorC").value);

    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Dados inválidos para o cálculo do Delta");
        return;
    }

    if(a != 0) {
        alert("Não é possivel calcular o Delta com o valor de A sendo igual a 0");
        return;
    }

    // Cálculando o Delta:

    let delta = (b**2 - (4*a*c));

    const resultado = document.querySelector("#output");
    resultado.innerHTML = `O valor de Delta é: <strong>${delta}</strong>`
})