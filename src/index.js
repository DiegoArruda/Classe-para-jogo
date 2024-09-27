class Heroi {
	constructor(nome, idade, tipo) {
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
	}

	atacar() {
		let ataque;

		if (this.tipo == "mago") {
			ataque = "usou magia";
		} else if (this.tipo == "guerreiro") {
			ataque = "usou espada";
		} else if (this.tipo == "monge") {
			ataque = "usou artes marciais";
		} else ataque = "usou shuriken";

		console.log(`o ${this.tipo} atacou ${ataque}`);
	}
}
