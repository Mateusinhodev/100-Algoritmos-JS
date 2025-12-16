let btn = document.getElementById("btn-enviar");
let inputProduto = document.getElementById("produto");
let resultado = document.getElementById("input-saida");

const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
})

inputProduto.addEventListener("input", function(){
    let valorDoProduto = inputProduto.value.replace(/\D/g, "");
    valorDoProduto = Number(valorDoProduto)/100;
    inputProduto.value = formatter.format(valorDoProduto);
})

btn.addEventListener("click", function() {
    let valorDoProduto = Number(inputProduto.value.replace(/\D/g, ""))/100;

    console.log(valorDoProduto);

    let percentual = 5/100;
    let valorPromocional = valorDoProduto - (percentual * valorDoProduto);

    resultado.value = `PREÇO PROMOCIONAL do produto é: ${formatter.format(valorPromocional)}`;
})