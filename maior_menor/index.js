// Desenvolva um algoritmo que solicite 3 números inteiros ao usuário, 
// verifique qual é o maior e o menor e exiba os resultados. Comente no código.
// Instalação da biblioteca via terminal
// npm install prompt-sync
// Importação da biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Declaração de variáveis
// Utiliza a conversão de string (texto) para real usando parseFloat()
let maior, menor = 0;
let num1 = parseInt(prompt('Informe o 1º número: '));
let num2 = parseInt(prompt('Digite o 2º número: '));
let num3 = parseInt(prompt('Informe o 3º número: '));

// Testando as condições do maior e menor número
maior = num1;
menor = num1;

if (num2 > maior) {
    maior = num2;    
} else if (num2 < menor) {    
    menor = num2;
} 

if (num3 > maior) {
    maior = num3    
} else if (num3 < menor) {
    menor = num3;
}

// Exibe o resultado da média com duas casas decimais
console.log(`O maior valor dos 3 números é ${maior}`);
console.log(`O menor valor dos 3 números é ${menor}`);