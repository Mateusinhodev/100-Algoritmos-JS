let btn = document.getElementById('btn-enviar');
const litroDeTinta = 2; // Cada litro de tinta pinta 2m quadrado.

btn.addEventListener("click", function() {
    let altura = parseFloat(document.getElementById("altura").value);
    let largura = parseFloat(document.getElementById("largura").value);

    let area = altura * largura;
    let litroNecessarios = area / litroDeTinta;

    let resultado = document.getElementById("input-saida");
    resultado.value = `A área total: ${area.toFixed(2)}m² | Necessário para pintura: ${litroNecessarios.toFixed(2)}L`
})