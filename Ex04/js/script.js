let btn = document.getElementById("btn-enviar");

btn.addEventListener("click", function() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultado = document.getElementById("input-saida");

    let somatoria = num1 + num2;
    console.log(num1, num2, somatoria);

    resultado.value = `A soma entre ${num1} e ${num2} é igual a ${somatoria}.`
})



