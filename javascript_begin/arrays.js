const names = ['Douglas', 'Teste', 'Luana'];

names.push('Bruno'); // Adiciona no fim
names.push('Ingrid');
names.pop() // Remove o último elemento
names.shift() // Remove do começo
names.unshift('Carlos'); // Adiciona no começo
delete names[1];

console.log(names);
console.log(names[1]);

const names2 = ['Douglas', 'Teste', 'Luana'];
console.log(names2.slice(0, -1)); // Parte do elemento 0, e pega somente 2 elementos... (0, -1) parte do zero e elimina o último do array.