const container = document.querySelector('.container');
const ps = container.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
	p.style.background = backgroundColorBody;
	p.style.color = 'white';
}