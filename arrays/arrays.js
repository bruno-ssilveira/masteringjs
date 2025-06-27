const nomes = ['Bruno', 'Eduardo', 'Douglas'];
const novo = [...nomes];

nomes[2] = 'Rafael';
delete nomes[2];
console.log(nomes);

const removidofinal = nomes.pop(); // remove o último elemento do array
const removeinicio = nomes.shift(); // remove o primeiro elemento do array
const removidofinal2 = novo.pop()
console.log(removidofinal);
console.log(removidofinal2);
console.log(removeinicio);
console.log(nomes);
console.log(novo);

const cores = ['branco', 'preto', 'verde'];
cores.push('azul'); // adiciona um elemento no final do array
cores.unshift('marrom'); // adiciona um elemento no inicio do array
console.log(cores);
// o unshift e shift não é muito comum ser usado, em arrays grandes pode prejudicar desempenho por conta de alterar o indice de todos os elementos.

const animais = ['girafa', 'cavalo', 'zebra', 'alpaca'];
const animenos = animais.slice(1, 3); // pega do indice 1 ate o 2, precisa sempre por um a +
const animinus = animais.slice(1, -1);
console.log(animenos);
console.log(animinus);

const nomecompleto = 'Bruno Santos Silveira';
const nc = nomecompleto.split(' '); // transforma em um array separando pelos espaços
console.log(nc);
console.log(nc.join(' ')); // junta o array

const letters = ['a', 'b', 'c', 'd', 'e'];
//const removed = letters.splice(2, 3); // choice what's de initial indice,quantity to remove starting with choiced indice
const removeIntroduce = letters.splice(-1, 1, 'f'); // removes one and introduces 'f'
console.log(letters, removeIntroduce);

// Concat
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log(a3);
const test = [...a1, ...a2, ...[7, 8, 9]]; // thats called spread operator ... spread the array.
console.log(test);

// FILTER, MAP AND REDUCE ***** THE MOST IMPORTANT IN ARRAYS
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const retornou = [];
const retorno = numbers.map((n) => {if(n > 10){retornou.push(n)}});
console.log(retorno);
const returned = [];
const returning = () => {
    for(n of numbers) {
        if(n > 10){
            returned.push(n);
        }
    };
};
returning();
console.log(returned);

// FILTER - retorna um array com a mesma quantida do original ou menos.
const testnumber = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const filteredNumbers = testnumber.filter((valor, indice, array) => valor > 10 /* indice > 0 */ /* array */);
console.log(filteredNumbers);

const teststring = ['teste', 'testa', 'maria', 'raimundo'];
const stringA = teststring.filter(el => el.endsWith('a'));
console.log(stringA);

// MAP - 
const people = [
    {nome: 'bruno', idade: '30'},
    {nome: 'gabriel', idade: '33'},
    {nome: 'joana', idade: '23'},
    {nome: 'diego', idade: '25'},
];
const newPeople = people.map(valor => valor.nome);
console.log(newPeople);

// REDUCE
const testReduce = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const acumulado = testReduce.reduce((acumulador, valor) => acumulador += valor);
const pares = testReduce.filter(value => value % 2 == 0);
console.log(pares);
console.log(acumulado);
/*const total = testReduce.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);*/

// filter, map, reduce
const testAll = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const all = testAll
    .filter(valor => valor % 2 == 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);
console.log(all);

// Se por algum motivo não der para usar filter,map,reduce também tem forEach, itera sobre todos elementos, pode usar for, for of tb...
const forEachs = [];
testAll.forEach(valor => forEachs.push(valor * 2));
console.log(forEachs);