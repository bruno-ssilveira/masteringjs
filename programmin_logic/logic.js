/* Operadores
    && -> AND
    || -> OR
    ! -> NOT
*/

/* Valores que JavaScript avalia como false
    0, ``, '', "", null, undefined, NaN
*/
console.log('eu' && '' && 'i')//returns at first false
console.log('eu' && 'me' && 'i') //all true, returns the last
const falaOi = () => {
    return 'Oi'
}
let vaiExecutar;
console.log(vaiExecutar && falaOi())

//true or false, returns the first true value with OR ||... IT`S almost a coalesce in sql
const corUsuario = '';
const corPadrao = 'black';
console.log(corUsuario || corPadrao);


// appendChild()
// Aplica dentro alguma outra tag etc html
const resultado = document.querySelector('.resultado');
const p = document.createElement('p');
p.innerHTML = 'qualquer coisa';
p.classList.add('paragrafo'); //adiciona classe na tag p
resultado.appendChild(p);

// Operador Ternário ? :


// Objeto Date
const data = new Date();
const data2 = new Date('2020-01-01 12:10:23.100');
console.log(data.getMonth() + 1); // Mês começa do zero, como array
console.log(data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data);


// Atribuição via desestruturação (Arrays, Objeto)

const numeros = [1000, 2000, 3000, 4000, 5000, 6000];
const [zero, um, dois, ...rest] = numeros;
console.log(rest);

const arrayNumbers = [[20, 30, 40], [50, 60, 70], [80, 90, 100]];
const [lista1] = arrayNumbers;
console.log(lista1[0]);

const pessoa = {
    //nome: 'Bruno',
    sobrenome: 'Silveira',
    endereco: {
        rua: 'rua 1',
        numero: 2
    }
}
const {nome = 'Sem nome', sobrenome, endereco: {rua, numero}} = pessoa;
console.log(nome, sobrenome, rua, numero);

// Existe for, for in, for of
for (let i in nomes) {
    console.log(nomes[i]); // basicamente o for, mas menos codigo, vai passar por todos os indices do array
}

for (let valor of nomes) {
    console.log(valor); // vai mostrar os elementos do array nome
}


// diferença de while e dowhile
do {
    console.log('roda uma vez, depois checa condicional');
} while (1 == 2);

while(1 == 2) {
    console.log('não roda nem uma vez');
}