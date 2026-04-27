// Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Declaração das variáveis
let num = 0;
let quadrado = 0;

// Entrada de dados pelo usuário
num = parseFloat(prompt("Informe o número para obter o seu quadrado: "));

// Utiliza a função Math e o método pow (potência)
quadrado = Math.pow(num, 2);

// Exibe o resultado no console
console.log(`O quadrado de ${num} é ${quadrado}`);