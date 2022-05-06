class Pokemon {
	/* atributos */
	#nombre = '';
	#edad = 0;
	#evolucion = '';
	#tipo = '';

	constructor(nombre, edad, evolucion) {
		this.#nombre = nombre;
		this.#edad = edad;
		this.#evolucion = evolucion;
	}

	get nombre() {
		return this.#nombre;
	}

	atacar() {
		return console.log(`${this.#nombre}, está atacando.`);
	}

	evolucionar() {
		const EVOLUCION = this.#evolucion || '';
		let mensaje = '';
		if (EVOLUCION === '') {
			mensaje = 'No puedo evolucionar';
			console.log(mensaje);
		} else {
			mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`;
			console.log(mensaje);
			this.$nombre = this.#evolucion;
		}
	}
}

// const charmander = new Pokemon('Charmander', 2, 'Charmeleon', 'Fuego');
// const bulbasaur = new Pokemon('Bulbasaur', 1, 'Ivysaur', 'Planta');

// charmander.evolucionar();
// bulbasaur.evolucionar();

class TipoFuego extends Pokemon {
	#tipo = '';
	constructor(nombre, edad, evolucion) {
		super(nombre, edad, evolucion);
		this.#tipo = 'Fuego';
	}
	atacar() {
		return console.log(`${this.nombre}, está lanzando un ataque de tipo ${this.#tipo}`);
	}
}

const charmander = new TipoFuego('Charmander', 2, 'Charmeleon');
console.log(charmander);
charmander.atacar();
