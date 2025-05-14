function saudacao(nome) {
    console.log(`${nome}, a função executa o que está dentro dela quando chamada, mas se chamada dentro de uma variável, a variável não terá nem um valor caso a função não retornar algo. A função pode retornar qualquer coisa, e continuará executando o resto do código normalmente.`);

    // return console.log(123); <- neste caso a var retornoFnc segue undefined, mas o console.log é executado.
    return 123; // aqui a var retornoFnc recebe 123.
}

const retornoFnc = saudacao('Bruno');
console.log(retornoFnc);

// Nada abaixo de return será executado.

function soma (x = 'Número não ', y = 'selecionado.'){ // Da para definir valores fixos nos parâmetros, caso não indicar um na chamada da função ele será exibido. E pode ser um parâmetro fixo string e na chamada passar número...

    return x + y;
}
let resultado = soma(1, 2)
console.log(resultado);

const raiz = function(n){
    return n ** 0.5; // n elevado a 0.5 para saber a raíz quadrada do número.
};
console.log(raiz(9));

const raiz2 = n => n ** 0.5; // Arrow Function: Quando se tem um único parâmetro, podemos remover os parênteses. Quando a fnc tem uma única linha podemos remover chaves.
console.log(raiz2(9));