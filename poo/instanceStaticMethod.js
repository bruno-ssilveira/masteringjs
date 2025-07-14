class remoteControl {
	constructor(model) {
		this.model = model;
		this.volume = 0;
	}

	volumUp() {
		this.volume += 2;
	}
	volumDown() {
		this.volume -= 2;
	}

	static changeBattery() {
		console.log('Battery changed');
	}
}

const control1 = new remoteControl('LG');

control1.volumUp();
remoteControl.changeBattery();
console.log(control1);