const pessoa = {
    nome: 'bruno',
    sobrenome: 'silveira'
};

console.log(pessoa.nome);
const chave = 'sobrenome';
console.log(pessoa[chave]);

// Criar um objeto com uma função construtora
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Nem um objeto dessa fnc pode ser alterado. Pode ser usado com qualquer var...
}

const p1 = new Pessoa('bruno', 'silveira');
console.log(p1);

// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave
        //value: estoque, // valor
        //writable: false, // pode alterar o valor
        configurable: true // configurável... permite redefinir as property em outra chamada... nao permite apagar tb
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar a chave
        configurable: true, // configurável... permite redefinir as property em outra chamada... nao permite apagar tb
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== Number) {
                console.log("That's not a number.");
                return;
            }
            estoque = valor;
        }
    })
}

const prod1 = new Produto('Camiseta', 20, 10);
prod1.estoque = 500; //'abc'
console.log(prod1.estoque);

// PROTOTYPE
// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Bruno', 'Silveira'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Bruna', 'Almeida'); // <- Pessoa = Função construtora

// Invés de chamar direto no construtor, chamamos pelo prototype, assim só será criado uma vez a fnc e todos os objetos terão acesso a ela. Criando direto no construtor todos os objetos terão uma função, fazendo pesar o site/programa.
Pessoa.prototype.nomeCompleto = function() { return this.nome + ' ' + this.sobrenome };