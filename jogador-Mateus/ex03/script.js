/* ::: Exercicio 02 :::

Crie um programa que leia o nome e o salário de um funcionário, mostrando no final uma mensagem.
Ex:
Nome do Funcionário: Maria do Carmo
Salário: 1850,45
O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho. 
*/

const capturaValores = document.getElementById("btn-enviar");
capturaValores = addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do botão

    // Captura o valor de nome do formulário
    const nomeFuncionario = document.getElementById("name").value;
    console.log(nomeFuncionario);

    // Verifica se o nome é válido
    if(nomeFuncionario == "") {
        alert(`É necessário inserir um nome!`);
        return 
    } 

    if (!isNaN(nomeFuncionario)) {
        alert(`O nome não pode ser um número!`); 
        return;
    } 

    // Captura o valor salário do formulário
    let salarioTexto = document.getElementById("salario").value;

    // Substitui vírgula por ponto para garantir compatibilidade
    salarioTexto = salarioTexto.replace(',', '.');

    // Converte o texto para número decimal
    const salarioFuncionario = parseFloat(salarioTexto);
    
    if(isNaN(salarioFuncionario)) {
        alert("Por favor, insira um valor válido para o salário");
        return;
    }

    // Verifica se o valor é válido
    console.log(typeof salarioFuncionario);

    // Formata o salário como moeda brasileira
    const salarioFormatado = salarioFuncionario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    console.log(salarioFormatado);


    const mensagem = document.getElementById("msg").innerHTML = `O funcionário ${nomeFuncionario} tem um salário de ${salarioFormatado} em Junho.`
});