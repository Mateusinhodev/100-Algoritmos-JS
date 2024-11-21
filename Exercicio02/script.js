/* ::: Exercicio 02 :::

Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boas￾vindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer!
*/

const capturaValor = document.getElementById("btn-enviar");
capturaValor = addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById("name").value;
    console.log(nome);
    
    const mensagem = document.getElementById("msg")
    mensagem.innerHTML = `Olá ${nome}, é um prazer te conhecer!`; 

    if(nome == "") {
        mensagem.innerHTML = `É necessário inserir um nome!`; 
        mensagem.style = "color: red";
    } else if (!isNaN(nome)) {
        mensagem.innerHTML = `O nome não pode ser um número!`; 
        mensagem.style = "color: red";
    } else {
        mensagem.innerHTML = `Olá ${nome}, é um prazer te conhecer!`; 
    }
});
