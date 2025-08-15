/* Exercicio 08
Desenvolva um programa que leia uma distância em metros e mostre os valores 
relativos em outras medidas.
Ex: 
Digite uma distância em metros: 185.72
A distância de 185.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm
*/

let capturaDados = document.querySelector("#enviar-btn");

capturaDados.addEventListener("click", function() {
    let metros = parseFloat(document.querySelector(".metros").value);

    // Conversões

    let km = (metros / Math.pow(10, 3));
    let hm = (metros / Math.pow(10, 2));
    let dam = (metros / Math.pow(10, 1));
    let dm = (metros * Math.pow(10, 1));
    let cm = (metros * Math.pow(10, 2));
    let mm = (metros * Math.pow(10, 3));

    let resultado = document.querySelector("#output");
    resultado.innerHTML = `A distância de ${metros}m corresponde a: <br/> ${km}Km <br/> ${hm}Hm <br/> ${dam}Dam <br/> ${dm}dm <br/> ${cm}cm <br/> ${mm}`
})