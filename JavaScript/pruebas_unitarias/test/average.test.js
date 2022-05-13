const { average } = require('../assets/js/para_probar');

describe('average', () => {
	test('Ingresar un solo valor', () => {
		const resultado = average([1]);
		expect(resultado).toBe(1);
	});

	test('Ingresando múltiples valores', () => {
		expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
	});

	test('Ingresando undefined', () => {
		expect(average()).toBeUndefined();
	});
});

// Crear un test para probar un valor undefined
