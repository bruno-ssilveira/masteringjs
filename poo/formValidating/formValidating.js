class FormValidating {
	constructor() {
		this.form = document.querySelector('.form');

		this.eventos();
	}

	eventos() {
		this.form.addEventListener('submit', e => {
			this.handleSubmit(e);
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const camposValidos = this.camposSaoValidos();
		const senhasValidas = this.senhasSaoValidas();

		if(camposValidos && senhasValidas) {
			alert('Forms enviado.');
		}
	}

	senhasSaoValidas() {
		let valid = true;

		const senha = this.form.querySelector('.senha');
		const repetirSenha = this.form.querySelector('.repetir-senha');

		if(senha.value.length < 6 || senha.value.length > 12) {
			this.criaErro(senha, `Senha deve conter entre 6 e 12 caracteres.`);
			valid = false;
		}

		if(repetirSenha.value.length < 6 || repetirSenha.value.length > 12) {
			this.criaErro(repetirSenha, `Senha deve conter entre 6 e 12 caracteres.`);
			valid = false;
		}

		if(senha.value !== repetirSenha.value) {
			this.criaErro(senha, `As senhas não são iguais.`);
			this.criaErro(repetirSenha, `As senhas não são iguais.`);
			valid = false;
		}

		return valid;
	}

	camposSaoValidos() {
		let valid = true;

		for(let errorText of this.form.querySelectorAll('.error-text')) {
			errorText.remove();
		}

		for(let campo of this.form.querySelectorAll('.validar')) {
			const label = campo.previousElementSibling.innerText.slice(0, -1);

			if(!campo.value) {
				this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
				valid = false;
			}

			if(campo.classList.contains('cpf')) {
				if(!this.validaCPF(campo)) valid = false;
			}
			
			if(campo.classList.contains('usuario')) {
				if(!this.validaUsuario(campo)) valid = false;
			}

		}

		return valid;
	}

	validaUsuario(campo) {
		const usuario = campo.value;
		let valid = true;

		if(usuario.length < 3 || usuario.length > 12) {
			this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
			valid = false;
		}

		if(!/^[a-zA-Z0-9]+$/.test(usuario)) {
			this.criaErro(campo, 'Usuário só pode conter letras e/ou números.');
			valid = false;
		}

		return valid;
	}

	validaCPF(campo) {
		const cpf = new ValidaCPF(campo.value);

		if(!cpf.valida()) {
			this.criaErro(campo, 'CPF inválido.');
			return false;
		}

		return true;
	}

	criaErro(campo, msg) {
		const div = document.createElement('div');
		div.innerHTML = msg;
		div.classList.add('error-text');
		campo.insertAdjacentElement('afterend', div);
	}
}

const valida = new FormValidating();