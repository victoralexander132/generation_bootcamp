const { arrayTypeAnnotation } = require('@babel/types');

const palindrome = (string) => {
	if (typeof string === 'undefined') return;

	return string.split('').reverse().join('');
};

const average = (array) => {
	if (typeof array === 'undefined' || array.length === 0) return;
	let sum = 0;
	array.forEach((num) => {
		sum += num;
	});
	return sum / array.length;
};

module.exports = {
	palindrome,
	average,
};
