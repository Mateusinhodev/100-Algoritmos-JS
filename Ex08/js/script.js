let btn = document.getElementById("btn-enviar");

btn.addEventListener("click", function() {
    let metros = parseFloat(document.getElementById("distancia").value);

    let Km = (metros / (10**3));
    let Hm = (metros / (10**2));
    let Dam = (metros / 10);
    let dm = (metros * 10); 
    let cm = (metros * (10**2));
    let mm = (metros * (10**3));

    let resultado = document.getElementById("input-saida");

    resultado.innerHTML = `A distância de ${metros} corresponde a: <br>
     ${Km}Km <br> ${Hm}Hm <br> ${Dam}Dam <br> ${dm}dm <br> ${cm}cm <br> ${mm}mm <br>`
})