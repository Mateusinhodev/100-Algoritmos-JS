/* ::: Exercicio 08 :::

Desenvolva um programa que leia uma distância em metros e mostre os valores 
relativos em outras medidas.
Ex: 
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm
*/

const capturaValor = document.getElementById("btn-enviar");
capturaValor.addEventListener('click', function(e) {
    e.preventDefault();

    const distanciaEmMetros = parseFloat(document.getElementById('distancia').value);
    console.log(distanciaEmMetros);

    // Calculo de Conversões de Medidas

    const distanciaKm = (distanciaEmMetros/(10**3));
    const distanciaHm = (distanciaEmMetros/(10**2));
    const distanciaDam = (distanciaEmMetros/10);
    const distanciaDm = (distanciaEmMetros*10);
    const distanciaCm = (distanciaEmMetros*(10**2));
    const distanciaMm = (distanciaEmMetros*(10**3));

    const conversãoDeMedidas = document.getElementById("resultado").innerHTML = `A distância de ${distanciaEmMetros} corresponde a: <br/>
    ${distanciaKm}Km <br/> ${distanciaHm}Hm <br/> ${distanciaDam}Dam <br/> ${distanciaDm}dm <br/> ${distanciaCm}cm <br/> ${distanciaMm}mm <br/>` 
})