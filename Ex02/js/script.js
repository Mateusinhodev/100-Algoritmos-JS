let btn = document.getElementById('btn-enviar');

btn.addEventListener("click", function() {
    let nome = document.getElementById('input-entrada').value;
    console.log(nome);
    let mensagem = document.getElementById('input-saida');
    mensagem.value = `Olá ${nome}, é um prazer te conhecer!`;
});

