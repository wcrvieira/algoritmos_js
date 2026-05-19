// Algoritmo que exibe o dia da semana por extenso, usando o número do dia
// Importação da biblioteca prompt-sync
const entrada = require('prompt-sync')();

// Declaração de variáveis
// Utilizando a conversão de texto para inteiro usando o parseInt
dia_semana = parseInt(entrada('Digite o dia da semana: '));

// Utilizando o switch
switch (dia_semana) {
    case 1: console.log('Domingo'); break;
    case 2: console.log('Segunda-feira'); break;
    case 3: console.log('Terça-feira'); break;
    case 4: console.log('Quarta-feira'); break;
    case 5: console.log('Quinta-feira'); break;
    case 6: console.log('Sexta-feira'); break;
    case 7: console.log('Sábado'); break;
    default: console.log('Dia inválido!!!'); break;
}