function rand(min, max) {
	min *= 1000;
	max *= 1000;

	return Math.floor(Math.random() * (max - min) + min);
}

function waitThere(msg, tempo) {
	setTimeout(() => {
		console.log(msg);
	}, tempo);
}

waitThere('teste1', rand(2, 4));
waitThere('teste2', rand(2, 4));
waitThere('teste3', rand(2, 4));