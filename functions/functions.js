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