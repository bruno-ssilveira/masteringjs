const nome = document.querySelector('.nome');
const sobrenome = document.querySelector('.sobrenome');
const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');
const btnEnviar = document.querySelector('.btnEnviar');
const result = document.querySelector('.result');
const registros = document.querySelector('.registros');

function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura
    };
};

const pessoas = [];

btnEnviar.addEventListener('click', () => {
    result.textContent = `Adicionado: ${nome.value} ${sobrenome.value}, peso: ${peso.value}, altura: ${altura.value}.`

    pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));

    registros.innerHTML = 'Registros: <br>';

    pessoas.forEach(pessoa => {
        registros.innerHTML += `${pessoa.nome} ${pessoa.sobrenome}, peso: ${pessoa.peso}, altura: ${pessoa.altura}.<br>`;
    });

    nome.value = '';
    sobrenome.value = '';
    peso.value = '';
    altura.value = '';
});