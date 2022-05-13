const suma = (a, b) => {
	return a + b;
};

// console.log(suma(1, 8) === 9);
// console.log(suma(1, 3) === 4);

const arr = [
	{ a: 1, b: 3, resultado: 4 },
	{ a: 0, b: 0, resultado: 0 },
	{ a: 5, b: 5, resultado: 10 },
	{ a: 10, b: 30, resultado: 40 },
];

arr.forEach((prueba) => {
	const { a, b, resultado } = prueba;
	console.assert(suma(a, b) === resultado, `El resultado de la suma de ${a} y ${b} debería ser ${resultado}`);
});
