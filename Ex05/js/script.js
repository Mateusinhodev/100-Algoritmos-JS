let btn = document.querySelector("#btn-enviar");

btn.addEventListener("click", function() {
    let nota1 = Number(document.querySelector("#nota1").value);
    let nota2 = Number(document.querySelector("#nota2").value);

    let media = ((nota1 + nota2)/2);

    let resultado = document.querySelector("#input-saida");
    resultado.value = `A média entre ${nota1} e ${nota2} é igual a ${media}`;
})

