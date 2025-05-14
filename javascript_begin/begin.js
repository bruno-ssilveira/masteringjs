// testes
// Todo código do curso https://github.com/luizomf/curso-js

console.log('Meu nome é "Bruno". Estou aprendendo JavaScript às', 10, 'da manhã.');

const nome = 'Bruno';
const sobrenome = 'Silveira';
const idade = 25;
const peso = 74;
const altura = 1.76;
let imc;
let anoNascimento;

console.log('Calculando o IMC');
imc = Math.round(peso / (altura * altura));
console.log(`O IMC calculado é: ${imc}`);

// conversão de tipos
let stringToNumber = parseInt('5');
stringToNumber = parseInt('5.3');
stringToNumber = parseFloat('5.3');
console.log(stringToNumber);
console.log(typeof stringToNumber);

// exercicio apontamento variaveis

let varA = 'A';
let varB = 'B';
let varC = 'C';

let containA = varA;

varA = varB;
varB = varC;
varC = containA;

varC = 'B'

[varA, varB, varC] = [varB, varC, varA];

console.log(varA)

console.log(varA, varB, varC);