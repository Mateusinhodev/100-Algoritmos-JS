/* ::: Exercicio 10 :::

Faça um algoritmo que leia a largura e altura de uma parede, calcule e 
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, 
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
*/

const capturaValores = document.getElementById('btn-enviar');
capturaValores.addEventListener('click', function(e) {
    e.preventDefault();

    const altura = parseFloat(document.getElementById("altura").value);
    const largura = parseFloat(document.getElementById("largura").value);

    console.log(altura, largura);

    // Calculando a área: Área (m²) = Altura (m) x Largura (m).

    const area = altura * largura;

    // Calculando a quantidade de litros de tintas necesário para pintar a parede.

    const qtdLitrosDeTintas = area / 2;

    const resultado = document.getElementById('resultado').innerHTML = `Área a ser pintada é: ${area.toFixed(2)}m <br/> Quantidade de tinta necessária é de: ${qtdLitrosDeTintas.toFixed(2)}L`
});