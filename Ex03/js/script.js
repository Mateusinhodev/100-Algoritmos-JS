let inputNome = document.getElementById('input-nome');
let inputSalario = document.getElementById('input-salario');
let resultado = document.getElementById('input-saida');
let btn = document.getElementById('btn-enviar');
let mensagem = document.getElementById('message');

const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
})

inputSalario.addEventListener("input", function(){
    let salario = inputSalario.value.replace(/\D/g, "");
    salario = Number(salario)/100;
    inputSalario.value = formatter.format(salario);
});

btn.addEventListener("click", function() {
    let nome = inputNome.value.trim();

    let salario = Number(
        inputSalario.value.replace(/\D/g, "")
    ) / 100;

    console.log(nome, salario);

    if(nome === "" || isNaN(salario) || salario <= 0) {
        return mensagem.innerHTML = "Valores inseridos são inválidos!"
    } 
    
    mensagem.textContent = "";
    resultado.value = `O funcionario(a) ${nome} tem um salário de ${formatter.format(salario)}R$`;
    
});
