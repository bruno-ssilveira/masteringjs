// When the application starts, all the fnc are moved to the top of the code, so it doesn't matter if you call a fnc before its declaration.

// Em Js uma função mesmo sem parametros declarados consegue receber argumentos e fazer algo a partir deles
// Caso aplicar parametros, os primeiros argumentos passados para a fnc serao os parametros, mas tudo entrara em arguments podendo ser usado igual como um array
// Só funciona em functions criadas com a palavra function, arrow fnc, fnc anonima não funciona...
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

// Fnc of callback
function f1() {
    setTimeout(function() {console.log('timout')}, 2000);
};
console.log(f1());