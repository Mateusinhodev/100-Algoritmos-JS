let btn = document.getElementById("btn-enviar");
let resultado = document.getElementById("input-saida");
let mensagem = document.getElementById("message")

btn.addEventListener("click", function() {
    let a = parseFloat(document.getElementById("valorA").value);
    let b = parseFloat(document.getElementById("valorB").value);
    let c = parseFloat(document.getElementById("valorC").value);

    console.log(a, b, c);

    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        mensagem.innerHTML = "É necessário que informe os valores para que o cálculo seja realizado.";
        return;
    }

    if (a == 0) {
        mensagem.innerHTML = "Valor inválido para o 2º grau, o valor de a deve ser dirente de 0.";
        return;
    } 

    mensagem.innerHTML = "";

    // Cálculo de Delta 
    // Delta = b² - 4ac
    let delta = ((b**2) - 4 * a * c);

    resultado.value = `O valor de delta é: ${delta}.`;
})