/* Algoritmo que analisa as estações do ano e informa através 
do mês digitado pelo usuário */
// Importação ou declaração da biblioteca prompt-sync
const frase = require('prompt-sync')();

// Exibir um menu dos meses do ano
console.log('1 - Janeiro | 2 - Fevereiro | 3 - Março');
console.log('4 - Abril | 5 - Maio | 6 - Junho');
console.log('7 - Julho | 8 - Agosto | 9 - Setembro');
console.log('10 - Outubro | 11 - Novembro | 12 - Dezembro');

// Declaração das variáveis
mes = parseInt(frase('Informe o número do mês: '));

// Criar uma estrutura para analisar e classificar em estações do ano
switch (mes) {
    case 1: case 2: case 12: console.log('Verão'); break;
    case 3: case 4: case 5: console.log('Outono'); break;
    case 6: case 7: case 8: console.log('Inverno'); break;
    case 9: case 10: case 11: console.log('Primavera'); break;    
    default: console.log('Mês inválido'); break;
}
