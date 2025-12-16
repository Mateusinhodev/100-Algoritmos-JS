let btn = document.getElementById("btn-enviar");
let inputSalario = document.getElementById("salario");
let resultado = document.getElementById("input-saida");

const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
})

inputSalario.addEventListener("input", function(){
    let salario = inputSalario.value.replace(/\D/g, "");
    salario = Number(salario)/100;
    inputSalario.value = formatter.format(salario);
})

btn.addEventListener("click", function() {
    let salario = Number(inputSalario.value.replace(/\D/g, ""))/100;

    console.log(salario);

    let percentual = 15/100;
    let novoSalario = salario + (percentual * salario);

    resultado.value = `Novo salario com 15% de aumento é: ${formatter.format(novoSalario)}`;
})