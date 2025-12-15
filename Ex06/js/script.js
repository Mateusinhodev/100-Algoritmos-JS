let btn = document.querySelector("#btn-enviar");
let resultado = document.querySelector("#input-saida")

btn.addEventListener("click", function() {
    let num = Number(document.querySelector("#num").value);
    let antecessor = num - 1;
    let sucessor = num + 1;

    resultado.innerHTML = `O antecessor de ${num} é: ${antecessor} </br>
    O sucessor de ${num} é: ${sucessor}`;
})