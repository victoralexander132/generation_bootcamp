const { palindrome } = require('../assets/js/para_probar');

/* Primer test unitario */

test('palindrome de generation', () => {
	const resultado = palindrome('generation');
	/* Comparación */
	expect(resultado).toBe('noitareneg');
});

test('palindrome de string vacío', () => {
	const resultado = palindrome('');
	/* Comparación */
	expect(resultado).toBe('');
});

test('palindrome usando undefined', () => {
	const resultado = palindrome();
	/* Comparación */
	expect(resultado).toBe();
});
