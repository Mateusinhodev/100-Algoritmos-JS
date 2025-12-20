let btn = document.getElementById("btn-enviar");
let resultado = document.getElementById("input-saida");
let valorPorKm = 0.20;
let valorPorDias = 90;

btn.addEventListener('click', function() {
    let kmPercorridos = parseFloat(document.getElementById('kilometro').value);
    let diasAlugados = Number(document.getElementById('dias').value);

    let totalAluguel = (valorPorKm * kmPercorridos) + (valorPorDias * diasAlugados);

    resultado.value = `O total a pagar é: ${totalAluguel}`;
})