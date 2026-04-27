// Cálculo de média de 3 valores inseridos pelo usuário
// Instalação da biblioteca via terminal
// npm install prompt-sync
// Importação da biblioteca prompt-sync
const prompt = require('prompt-sync')({signint: true});

// Declaração de variáveis
// Utiliza a conversão de string (texto) para real usando parseFloat()
let numero1 = parseFloat(prompt('Informe o 1º valor: '));
let numero2 = parseFloat(prompt('Digite a 2ª nota: '));
let numero3 = parseFloat(prompt('Informe a 3ª nota: '));

let media = (numero1 + numero2 + numero3)/3;

// Exibe o resultado da média com duas casas decimais
console.log(`A média das 3 notas é ${media.toFixed(2)}`);