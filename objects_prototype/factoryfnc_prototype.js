// Factory function with prototype
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`);
        },

        comer() {
            console.log(`${this.nome} está comendo.`);
        },

        beber() {
            console.log(`${this.nome} está bebendo.`);
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Maria', 'Valverde');
const p2 = criaPessoa('Mario', 'Valazul');
p1.falar();
p2.falar();
