class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('Bruno', 'Silveira');
const p2 = new Pessoa('Amanda', 'Passos');

p1.falar();
p2.falar();