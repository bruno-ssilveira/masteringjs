// When the application starts, all the fnc are moved to the top of the code, so it doesn't matter if you call a fnc before its declaration.

// Em Js uma função mesmo sem parametros declarados consegue receber argumentos e fazer algo a partir deles
// Caso aplicar parametros, os primeiros argumentos passados para a fnc serao os parametros, mas tudo entrara em arguments podendo ser usado igual como um array
// Só funciona em functions criadas com a palavra function. Arrow fnc, fnc anonima não funciona...
function fnc(a, b, c) {
    let total = 0;
    for(let num of arguments) {
        total += num;
    }
    console.log(total, a, b, c);
}
fnc(1,2,3,4,5,6,7,8,9,10);

function conta(operador, acumulador) {
    console.log(operador, acumulador, arguments);
}
conta('+', 0, 20, 30, 40, 50);

// using the rest operator
function conta2(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
}
conta2('+', 0, 20, 30, 40, 50);

function conta3(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
    }
    console.log(acumulador);
}
conta3('+', 0, 10, 20, 30);

// To pass indeterminated arguments to the function
const args = (...args) => {
    console.log(args);
};
args('+',1,20,30,40,50);

function args() {
    const array = [];
    for(let args of arguments) {
        array.push(args);
    }
    console.log(array);
    console.log(arguments);
};
args('+',1,20,30,40,50);

// Return a fnc from another fnc
function createMultiplier(multiplier) {
    return function(n) {
        return n * multiplier;
    }
}
const duplicate = createMultiplier(2);
console.log(duplicate(2));

// Fnc of callback, basicamente chamar uma fnc dentro da outra
function f1() {
    setTimeout(function() {console.log('timout')}, 2000);
};
console.log(f1());

// Fnc imediata - IIFE > Immediately invoked function expression
(function() {
    // dessa forma tudo que estiver aqui dentro não toca o escopo global, da pra escrever todo código aqui dentro assim não tem como ver
        // o javascript da página pelo navegador
})();

// Factory Function - creates an object, for example a person
function createsPerson(name, surname, a, p) {
    return {
        name,
        surname,

        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.surname = value.join(' ');
        },

        speak(topic) {
            return `${this.name} está ${this.topic}.`
        },
        height: a,
        weight: p,
        get imc() {
            const indice = this.weight / (this.height ** 2);
            return indice.toFixed(2);
        }
    };
}
const p1 = createsPerson('Bruno', 'Silveira', 1.78, 73);
    // it's possible transform a fnc in attribute by applying an get before it's call
        console.log(p1.imc);

p1.fullName = 'Bruno Santos Silveira';
console.log(p1.fullName);

// Constructor Function
function Pessoa(name, surname) {
    this.name = name;
    this.surname = surname;
}

const p1 = new Pessoa('Bruno', 'Silveira');
console.log(p1.name);