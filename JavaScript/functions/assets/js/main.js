// funciones, nos permiten reutilizar código

function greeting(name = "Vic", lastname = "") {
  console.log("Hello, my name's", name, lastname);
  // console.log(`Hello my name's ${name}`);
  console.log(`Hello, my name's ${name ? "Víctor" : "Unknown"}`);
}

greeting((lastname = "Pedro"));

/* Función declarada */
function suma(a, b) {
  return a + b;
}

console.log(suma(10, 20));

/* Funciones expresadas | función expresión*/

const resta = function (a, b) {
  return a - b;
};

console.log(resta(10, 40));

const multiplicacion = (a, b) => {
  return a*b;
};
/* const multiplicacion = (a,b) => a*b | Es otra manera de utilizar las flecha sin return*/
console.log(multiplicacion(5, 4));


