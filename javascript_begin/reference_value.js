// "...a" cria uma cópia, b recebe uma cópia do valor de a, modificar 'a' não altera 'b'.

let a = [1, 2, 3];
let b = [...a];

a.push(4);
console.log(a, b);

// funciona com objetos também, basta fazer um spread '...' do objeto que quer copiar.

let p1 = {
    nome: 'bruno'
};

let p2 = {...p1};