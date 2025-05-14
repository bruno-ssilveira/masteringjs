const pessoa = {
    nome: 'Bruno',
    idade: 25,
    cidade: 'Porto Alegre'
};

// Função para criar objeto. Passa argumentos para o parâmetros da fnc, retorna um objeto.
// Essa função é conhecida como função factory, ela cria objetos.
function criaPessoa(nome, idade, cidade){ // parâmetros
    return {
        nome, // Quando o nome da var do objeto tem o mesmo nome do parâmetro, pode chamar só 'nome'...
        idade: idade, // idade,
        cidade: cidade // cidade
    };
};

const pessoa1 = criaPessoa('julia', '10', 'canoas'); // argumentos
console.log(pessoa1.nome);

// Podemos criar fnc dentro de objeto
const fncObjeto = {
    nome: 'Bruno',
    idade: 25,

    falar() { console.log(`${this.nome} está falando oi...`) }
}
fncObjeto.falar();