// Nivel 1
/* const yearBirth = parseInt(prompt("Escribe tu año de nacimiento"));
const yearActual = 2022;
console.log(`Tienes ${yearActual - yearBirth} años`); */

// Nivel 2
const yearActual = 2022;

function calcular() {
  const yearBirth = parseInt(document.getElementById('year').value);
  console.log(`Tienes ${yearActual - yearBirth} años`);
}
