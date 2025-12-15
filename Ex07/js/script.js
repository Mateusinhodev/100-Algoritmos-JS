let btn = document.getElementById("btn-enviar");

btn.addEventListener("click", function() {
    let num = parseFloat(document.getElementById("num").value);

    let dobro = num * 2;
    let tercaParte = num / 3;

    let resultado = document.getElementById("input-saida");
    resultado.innerHTML = `O dobro de ${num} é ${dobro} <br>
        A terça parte de ${num} é ${tercaParte}`
})