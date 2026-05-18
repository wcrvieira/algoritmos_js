/* Crie um algoritmo que receba uma letra e determine se ela é vogal ou
consoante e exiba no console. */
// Instalação da biblioteca via terminal
// npm install prompt-sync
// Importação da biblioteca prompt-sync
const prompt = require('prompt-sync')();

let letra = '';
letra = prompt('Digite uma letra qualquer: ');

switch(letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log(`Você digitou a vogal ${letra}`)
        break;
    default:
        console.log(`Você informou a consoante ${letra}`);
}