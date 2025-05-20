const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

let imc;

form.onsubmit = (event) => {
	event.preventDefault();

  	imc = (parseFloat(peso.value.replace(',', '.')) / (parseFloat(altura.value.replace(',', '.')) ** 2)).toFixed(2);

	if(imc < 18.5) {
		resultado.textContent = `Abaixo do peso. Seu IMC é ${imc} `;
		resultado.style.background = '#f58723';
		resultado.style.display = 'block';
		resultado.style.color = '#FEFEFE';
	} else if(imc < 24.9) {
		resultado.textContent = `Peso normal. Seu IMC é ${imc} `;
		resultado.style.background = '#93c2b1';
		resultado.style.display = 'block';
		resultado.style.color = '#FEFEFE';
	} else if(imc < 29.9) {
		resultado.textContent = `Sobrepeso. Seu IMC é ${imc} `;
		resultado.style.background = '#2c6b74';
		resultado.style.display = 'block';
		resultado.style.color = '#FEFEFE';
	} else if(imc < 34.9) {
		resultado.textContent = `Obesidade grau 1. Seu IMC é ${imc} `;
		resultado.style.background = '#63594d';
		resultado.style.display = 'block';
		resultado.style.color = '#FEFEFE';
	} else if(imc < 39.9) {
		resultado.textContent = `Obesidade grau 2. Seu IMC é ${imc} `;
		resultado.style.background = '#3e3e53';
		resultado.style.display = 'block';
		resultado.style.color = '#FEFEFE';
	} else if(imc >= 40) {
		resultado.textContent = `Obesidade grau 3. Seu IMC é ${imc} `;
		resultado.style.background = '#000000';
		resultado.style.display = 'block';
		resultado.style.color = '#FEFEFE';
	}
}
