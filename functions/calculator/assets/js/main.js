function createsCalculator() {
	return {
		display: document.querySelector('.display'),
		
		init() {
			this.clickButtons();
			this.pressEnter();
		},

		pressEnter() {
			this.display.addEventListener('keyup', e => {
				if(e.keycode === 13) {
					this.clickButtons();
				}
			});
		},

		clickButtons() {
			document.addEventListener('click', function(e) {
				const el = e.target;

				if(el.classList.contains('btn-num')) {
					this.btnToDisplay(el.innerText);
				} else if(el.classList.contains('btn-del')) {
					this.btnToDel();
				} else if(el.classList.contains('btn-clear')) {
					this.btnToClear();
				} else if(el.classList.contains('btn-eq')) {
					this.btnCalculation();
				}

			}.bind(this)); // Using bind in the function tells it to use the "this" from the calculator, not from the document. This can't be done with an arrow function
		},

		btnToDisplay(value) {
			this.display.value += value;
		},

		btnToDel() {
			this.display.value = this.display.value.slice(0, -1);
		},

		btnToClear() {
			this.display.value = '';
		},

		btnCalculation() {
			try {
				if (!/^[\d+\-*/().\s]+$/.test(this.display.value)) {
    				return alert('Conta inválida');
  				}
				this.display.value = String(eval(this.display.value));
			} catch(e) {
				alert('Conta inválida');
				return;
			};
		}

	};
}

const calculator = createsCalculator();
calculator.init();