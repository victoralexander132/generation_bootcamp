// Nivel 1
/* const yearBirth = parseInt(prompt("Escribe tu año de nacimiento"));
const yearActual = 2022;
console.log(`Tienes ${yearActual - yearBirth} años`); */

// Nivel 2 Opción 1
// const yearActual = 2022;

// function calcular() {
//   const yearBirth = parseInt(document.getElementById('year').value);
//   console.log(`Tienes ${yearActual - yearBirth} años`);
// }

// Nivel 2 Opción 2
// const yearActual = 2022;
// const boton = document.getElementById('calcular');

// function calcular() {
//   const yearBirth = parseInt(document.getElementById('year').value);
//   console.log(`Tienes ${yearActual - yearBirth} años`);
// }


// boton.addEventListener('click', calcular)

// Nivel 3

const date = new Date();
const yearActual = date.getFullYear();
const monthActual = date.getMonth() + 1;
const dayActual = date.getDate();
// const yearActual = 2022;
// const monthActual = 4;
// const dayActual = 27;

function mostrarDatos() {
  const birth = document.getElementById('year').value;

  const ymd = birth.split('-');
  yyyy = parseInt(ymd[0]);
  mm = parseInt(ymd[1]);
  dd = parseInt(ymd[2]);
  if (mm <= monthActual && dd <= dayActual) {
    console.log("Ya cumpliste años")
    console.log(`Tienes ${yearActual - yyyy} años`)
  } else {
    console.log(`Tienes ${yearActual - yyyy - 1} años`)
    console.log("Todavía no cumpliste años")
    
  }
}