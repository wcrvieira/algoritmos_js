/*Construa um algoritmo que solicita ao usuário 
 que informe 4 idades. Depois, exiba quantas pessoas
 são maiores de idade (18 anos) e quantas são menores. 
 Explique nos comentários. */
// Instalação da biblioteca via terminal
// npm install prompt-sync
// Importação da biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Declaração de variáveis
// Utiliza a conversão de string (texto) para real usando parseFloat()
let maiores = 0, menores = 0;
let idade1 = parseInt(prompt('Informe a 1º idade: '));
let idade2 = parseInt(prompt('Digite a 2ª idade: '));
let idade3 = parseInt(prompt('Informe a 3ª idade: '));
let idade4 = parseInt(prompt('Digite a 4ª idade: '));

// Testando as condições das idades acima de 18 anos e
// contando as pessoas

if (idade1 >= 18) { maiores++; } 
    else if (idade1 < 18) { menores++; } 

if (idade2 >= 18) { maiores++; } 
    else if (idade2 < 18) { menores++; } 

if (idade3 >= 18) { maiores++; } 
    else if (idade3 < 18) { menores++; } 

if (idade4 >= 18) { maiores++; } 
    else if (idade4 < 18) { menores++; } 

// Exibe o resultado da média com duas casas decimais
console.log(`Quantidade de pessoas maiores de idade é ${maiores}`);
console.log(`Quantidade de pessoas menores de idade é ${menores}`);