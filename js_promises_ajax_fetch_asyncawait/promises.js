function rand(min, max) {
	min *= 1000;
	max *= 1000;

	return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, tempo) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(msg);
		}, tempo);
	});
}

waitThere('Phrase1', rand(2, 4))
	.then(response => {
		console.log(response);
		return waitThere('Phrase2', rand(1, 3));
	})
	.then(response => {
		console.log(response);
		return waitThere('Phrase3', rand(1, 3));
	})
	.then(response => {
		console.log(response);
	})
	.catch();

//waitThere('teste2', rand(2, 4));
//waitThere('teste3', rand(2, 4));