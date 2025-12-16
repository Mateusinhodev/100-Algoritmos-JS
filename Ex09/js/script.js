let btn = document.getElementById('btn-enviar');
let cotacaoDolar = 3.45;
let resultado = document.getElementById('input-saida');
let valorEmReais = document.getElementById("reais");

const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
})

valorEmReais.addEventListener("input", function() {
    let reais = valorEmReais.value.replace(/\D/g, "");
    reais = Number(reais)/100;
    valorEmReais.value = formatter.format(reais)
})

btn.addEventListener("click", function() {
    let reais = Number(valorEmReais.value.replace(/\D/g, ""))/100

    let conversão = reais / cotacaoDolar;

    resultado.value = `Você poderá comprar US$${conversão.toFixed(2)}`
})