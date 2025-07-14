class EletronicDevice {
	constructor(name) {
		this.name = name;
		this.on = false;
	}

	turnOn() {
		if(this.on) return console.log(this.name + ' already on.');
		this.on = true;
	}

	turnOff() {
		if(!this.ligado) return console.log(this.name + ' already off.');
		this.on = false;
	}
}

const device1 = new EletronicDevice('Radio');
device1.turnOff();
device1.turnOn();

class Smartphone extends EletronicDevice {
	constructor(nome, cor) {
		super(nome);
		this.cor = cor;
	}
}

const smartphone1 = new Smartphone('Celphone', 'Black');
console.log(smartphone1);