const resultado = document.querySelector('.resultado');
resultado.style.display = 'block';

const elementos = [
	{tag: 'p', texto: 'Frase 1'},
	{tag: 'div', texto: 'Frase 2'},
	{tag: 'footer', texto: 'Frase 3'},
	{tag: 'section', texto: 'Frase 4'}
]

for(let i = 0; i < elementos.length; i++) {
	const elemento = document.createElement(elementos[i].tag);
	elemento.textContent = elementos[i].texto;
	resultado.appendChild(elemento)
}